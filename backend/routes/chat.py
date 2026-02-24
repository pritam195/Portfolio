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
    """Convert resume dict to a rich, structured text for the AI system prompt."""
    lines = []

    lines.append("=== PERSONAL INFORMATION ===")
    lines.append(f"Name: {resume.get('name')}")
    lines.append(f"Bio / Tagline: {resume.get('tagline', '')}")
    lines.append(f"Location: {resume.get('location')}")
    lines.append(f"Phone: {resume.get('phone')}")
    lines.append(f"Email: {resume.get('email')}")
    lines.append(f"LinkedIn: {resume.get('linkedin')}")
    lines.append(f"GitHub: {resume.get('github')}")
    lines.append("")

    lines.append("=== EDUCATION ===")
    for edu in resume.get("education", []):
        lines.append(f"Institution: {edu['institution']}")
        lines.append(f"Degree: {edu['degree']}")
        lines.append(f"Duration: {edu['duration']}")
        lines.append(f"Location: {edu['location']}")
        lines.append(f"CPI/CGPA: {edu['cpi']}")
        lines.append(f"Relevant Coursework: {', '.join(edu['coursework'])}")
    lines.append("")

    lines.append("=== TECHNICAL SKILLS ===")
    skills = resume.get("skills", {})
    for category, items in skills.items():
        lines.append(f"{category}: {', '.join(items)}")
    lines.append("")

    lines.append("=== PROJECTS ===")
    for proj in resume.get("projects", []):
        lines.append(f"Project Title: {proj['title']} ({proj['date']})")
        lines.append(f"Type: {proj['type']}")
        lines.append(f"Description: {proj['description']}")
        lines.append(f"Technologies Used: {', '.join(proj['technologies'])}")
        lines.append("Key Highlights:")
        for h in proj["highlights"]:
            lines.append(f"  - {h}")
        lines.append("")

    lines.append("=== ACHIEVEMENTS & CERTIFICATIONS ===")
    for ach in resume.get("achievements", []):
        lines.append(f"  - {ach}")

    return "\n".join(lines)


@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    api_key = os.getenv("OPENROUTER_API_KEY", "").strip()
    logging.info(f"[CHAT] api_key len={len(api_key)}, prefix={api_key[:12]!r}")

    if not api_key:
        raise HTTPException(
            status_code=500,
            detail="OpenRouter API key not configured. Please set OPENROUTER_API_KEY as an environment variable."
        )

    collection = get_resume_collection()
    resume = collection.find_one({"name": "Pritam Chavan"}, {"_id": 0})
    if not resume:
        raise HTTPException(status_code=500, detail="Resume data not found in database.")

    resume_context = build_resume_context(resume)

    system_prompt = f"""You are a friendly and professional AI assistant embedded in Pritam Chavan's personal portfolio website.

Your role is to represent Pritam accurately and help visitors learn about him — his background, skills, projects, education, and achievements.

INTRODUCTION (use this when someone asks "who is Pritam", "introduce yourself", "tell me about him", etc.):
Pritam Chavan is a B.Tech student at Veermata Jijabai Technological Institute (VJTI), Mumbai, pursuing Electronics and Telecommunication with a Minor in Data Science (Batch 2023–2027). He has a CPI of 7.70.
He is passionate about building scalable full-stack web applications using the MERN stack and AI-driven backend systems.
His key projects include:
- CampusCart: A full-stack campus marketplace with JWT auth and 20+ RESTful APIs
- Mentors Connect: A real-time mentorship platform using Socket.IO and Zoom API
- Credit Risk Default Prediction: An ML system achieving 87% AUC-ROC on 5,000 borrower records
He has solved 400+ DSA problems on LeetCode and holds a 2-star rating on CodeChef.
He has also led a team of 6 to clear the internal round of Smart India Hackathon (SIH) at VJTI.

RULES:
1. Answer ONLY from the resume data provided below — never invent or assume information.
2. Be warm and professional. Refer to Pritam in third person (e.g., "Pritam has...", "He built...").
3. For unrelated questions (e.g., general coding help, current events), say: "I'm Pritam's portfolio assistant — I can only answer questions about him. Feel free to ask about his skills, projects, or background!"
4. Keep answers clear and concise. Use bullet points when listing multiple items.
5. For contact info, share: Email: {resume.get('email')} | LinkedIn: {resume.get('linkedin')} | GitHub: {resume.get('github')}

--- RESUME DATA ---
{resume_context}
--- END OF RESUME DATA ---
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
                    "max_tokens": 600,
                    "temperature": 0.4
                }
            )
            response.raise_for_status()
            data = response.json()
            answer = data["choices"][0]["message"]["content"].strip()
            return ChatResponse(answer=answer)

    except httpx.HTTPStatusError as e:
        logging.error(f"[CHAT ERROR] OpenRouter {e.response.status_code}: {e.response.text}")
        raise HTTPException(
            status_code=e.response.status_code,
            detail=f"OpenRouter error: {e.response.text}"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Chat error: {str(e)}")
