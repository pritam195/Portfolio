import logging
import httpx
import os
from fastapi import APIRouter, HTTPException
from dotenv import load_dotenv
from models import ChatRequest, ChatResponse
from database import get_resume_collection

load_dotenv()

router = APIRouter()

OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
AI_MODEL = "openai/gpt-4o-mini"


def build_resume_context(resume: dict) -> str:
    """Convert resume dict to a readable text blob for the AI prompt."""
    lines = []

    lines.append(f"Name: {resume.get('name')}")
    lines.append(f"Location: {resume.get('location')}")
    lines.append(f"Phone: {resume.get('phone')}")
    lines.append(f"Email: {resume.get('email')}")
    lines.append(f"LinkedIn: {resume.get('linkedin')}")
    lines.append(f"GitHub: {resume.get('github')}")
    lines.append("")

    # Education
    for edu in resume.get("education", []):
        lines.append(f"Education: {edu['degree']} at {edu['institution']}")
        lines.append(f"  Duration: {edu['duration']}, Location: {edu['location']}")
        lines.append(f"  CPI/CGPA: {edu['cpi']}")
        lines.append(f"  Coursework: {', '.join(edu['coursework'])}")
    lines.append("")

    # Skills
    skills = resume.get("skills", {})
    for category, items in skills.items():
        lines.append(f"Skills - {category}: {', '.join(items)}")
    lines.append("")

    # Projects
    for proj in resume.get("projects", []):
        lines.append(f"Project: {proj['title']} ({proj['date']})")
        lines.append(f"  Type: {proj['type']}")
        lines.append(f"  Description: {proj['description']}")
        lines.append(f"  Technologies: {', '.join(proj['technologies'])}")
        lines.append("  Highlights:")
        for h in proj["highlights"]:
            lines.append(f"    - {h}")
    lines.append("")

    # Achievements
    lines.append("Achievements & Certifications:")
    for ach in resume.get("achievements", []):
        lines.append(f"  - {ach}")

    return "\n".join(lines)


@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    # Read key from environment (set OPENROUTER_API_KEY in Render dashboard)
    api_key = os.getenv("OPENROUTER_API_KEY", "").strip()

    # DEBUG: log what key we actually have
    logging.info(f"[CHAT DEBUG] api_key len={len(api_key)}, first12={api_key[:12]!r}, repr={api_key!r}")

    if not api_key:
        raise HTTPException(
            status_code=500,
            detail="OpenRouter API key not configured. Please set OPENROUTER_API_KEY in environment variables."
        )

    collection = get_resume_collection()
    resume = collection.find_one({"name": "Pritam Chavan"}, {"_id": 0})
    if not resume:
        raise HTTPException(status_code=500, detail="Resume data not found in database.")

    resume_context = build_resume_context(resume)

    system_prompt = f"""You are an AI assistant for Pritam Chavan's personal portfolio website.
Your ONLY job is to answer questions about Pritam based on the resume data provided below.

STRICT RULES:
1. Answer ONLY from the information in the resume context below.
2. Do NOT add, invent, or assume any information not explicitly present in the resume.
3. If the question cannot be answered from the resume, say: "I can only answer questions about Pritam's resume and portfolio. That information isn't available here."
4. Keep answers concise, friendly, and professional.
5. Use first person when referring to Pritam's accomplishments (e.g., "Pritam has..." or "He built...").

--- RESUME CONTEXT ---
{resume_context}
--- END OF RESUME ---
"""

    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.post(
                OPENROUTER_URL,
                headers={
                    "Authorization": f"Bearer {api_key}",
                    "Content-Type": "application/json",
                    "HTTP-Referer": "https://portfolio-three-pearl-26.vercel.app",
                    "X-Title": "Pritam Chavan Portfolio"
                },
                json={
                    "model": AI_MODEL,
                    "messages": [
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": request.question}
                    ],
                    "max_tokens": 500,
                    "temperature": 0.3
                }
            )
            response.raise_for_status()
            data = response.json()
            answer = data["choices"][0]["message"]["content"].strip()
            return ChatResponse(answer=answer)

    except httpx.HTTPStatusError as e:
        logging.error(f"[CHAT ERROR] OpenRouter {e.response.status_code}: {e.response.text}")
        raise HTTPException(status_code=e.response.status_code, detail=f"OpenRouter error: {e.response.text}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Chat error: {str(e)}")
