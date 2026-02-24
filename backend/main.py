import os
import logging

logging.basicConfig(level=logging.INFO)
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import seed_database
from routes import resume, chat

app = FastAPI(title="Pritam Chavan Portfolio API", version="1.0.0")

# CORS — restrict to frontend URL in production, allow all in dev
FRONTEND_URL = os.getenv("FRONTEND_URL")
allowed_origins = [FRONTEND_URL] if FRONTEND_URL else ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Seed database on startup
@app.on_event("startup")
async def startup_event():
    seed_database()
    key = os.getenv("OPENROUTER_API_KEY", "")
    logging.info(f"[STARTUP] OPENROUTER_API_KEY loaded: '{key[:12]}...' (len={len(key)})")

# Include routers
app.include_router(resume.router, prefix="/api")
app.include_router(chat.router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Pritam Chavan Portfolio API is running!", "docs": "/docs"}
