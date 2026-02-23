from fastapi import APIRouter
from database import get_resume_collection

router = APIRouter()

@router.get("/resume")
async def get_resume():
    collection = get_resume_collection()
    resume = collection.find_one({"name": "Pritam Chavan"}, {"_id": 0})
    if not resume:
        return {"error": "Resume not found"}
    return resume

@router.get("/projects")
async def get_projects():
    collection = get_resume_collection()
    resume = collection.find_one({"name": "Pritam Chavan"}, {"_id": 0, "projects": 1})
    if not resume:
        return []
    return resume.get("projects", [])
