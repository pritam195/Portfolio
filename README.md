# Pritam Chavan — Portfolio Website

A professional portfolio with an **AI Resume Chat Assistant** powered by OpenRouter.

## Tech Stack
- **Frontend**: React.js + Vite
- **Backend**: Python FastAPI
- **Database**: MongoDB
- **AI**: OpenRouter (`meta-llama/llama-3.1-8b-instruct:free`)

---

## 🚀 Quick Start

### 1. Backend Setup

```bash
cd backend
pip install -r requirements.txt
```

Edit `backend/.env`:
```
MONGODB_URI=mongodb://localhost:27017
OPENROUTER_API_KEY=your_key_here   # Get free at openrouter.ai
```

Start the backend:
```bash
cd backend
uvicorn main:app --reload --port 8000
```

The API auto-seeds your resume data into MongoDB on first run.

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open **http://localhost:5173**

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/resume` | Full resume JSON |
| GET | `/api/projects` | Projects array |
| POST | `/api/chat` | `{ "question": "..." }` → AI response |

---

## 💬 AI Chat
- Click the **💬 button** (bottom right) to open the chat
- Ask anything: *"What projects has Pritam built?"*, *"What's his CGPA?"*
- The AI is strictly restricted to resume data — no hallucination

---

## 🔑 Get Free OpenRouter API Key
1. Go to [https://openrouter.ai/keys](https://openrouter.ai/keys)
2. Sign up (free)
3. Create a new key
4. Paste it in `backend/.env`
