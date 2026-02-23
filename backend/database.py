from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGODB_URI = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
client = MongoClient(MONGODB_URI)
db = client["portfolio"]

RESUME_DATA = {
    "name": "Pritam Chavan",
    "location": "Mumbai, Maharashtra",
    "phone": "9130238226",
    "email": "pcchavan_b23@et.vjti.ac.in",
    "linkedin": "linkedin.com/in/chavanpritam",
    "github": "github.com/pritam195",
    "tagline": "B.Tech student passionate about building scalable MERN stack applications and AI-driven backend systems.",
    "education": [
        {
            "institution": "Veermata Jijabai Technological Institute (VJTI)",
            "degree": "B.Tech in Electronics and Telecommunication (Minor in Data Science)",
            "cpi": "7.70",
            "location": "Mumbai, Maharashtra",
            "duration": "July 2023 – May 2027",
            "coursework": [
                "C++ Programming",
                "Data Science",
                "Object-Oriented Programming",
                "Python Programming",
                "Computer Communication Network"
            ]
        }
    ],
    "skills": {
        "Languages": ["C++", "JavaScript", "Python", "SQL"],
        "Frontend": ["HTML", "CSS", "Tailwind CSS", "React.js"],
        "Backend": ["Node.js", "Express.js", "Socket.IO", "Axios"],
        "Databases": ["MongoDB", "MySQL"],
        "Tools": ["Git", "GitHub", "Postman", "VS Code"],
        "Libraries": ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
        "CS Fundamentals": ["DSA", "OOP", "DBMS", "OS"]
    },
    "projects": [
        {
            "title": "Credit Risk Default Prediction & Portfolio Segmentation",
            "date": "Oct 2025",
            "description": "Built an end-to-end machine learning system to estimate borrower probability of default and support credit portfolio risk management.",
            "highlights": [
                "Trained and evaluated 2 ML models (Logistic Regression, Random Forest) on 5,000 borrower records, achieving 87% AUC-ROC.",
                "Engineered 14+ financial and behavioral features and identified top 5 default risk drivers using feature importance analysis.",
                "Segmented the credit portfolio into 4 risk bands, enabling early-warning insights for high-risk borrower monitoring."
            ],
            "technologies": ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
            "type": "Machine Learning"
        },
        {
            "title": "CampusCart – MERN Stack Campus Marketplace",
            "date": "July 2025",
            "description": "Developed a secure full-stack campus marketplace enabling peer-to-peer buying and selling with optimized performance and authentication.",
            "highlights": [
                "Designed and implemented 20+ RESTful APIs with JWT authentication and a modular 5-collection MongoDB schema.",
                "Built a responsive React SPA with 12+ reusable components and Context-based authentication for user and session management.",
                "Optimized frontend performance using pagination and lazy loading, reducing page load time by 30%."
            ],
            "technologies": ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Axios"],
            "type": "Full Stack"
        },
        {
            "title": "Mentors Connect – Real-Time Mentorship Platform",
            "date": "June 2025",
            "description": "Engineered a real-time mentor–student interaction platform with instant virtual sessions and secure communication.",
            "highlights": [
                "Integrated Zoom API to automate instant meeting creation using OAuth-based authorization and REST endpoints.",
                "Developed a real-time chat system using Socket.IO with event-driven messaging and persistent message storage in MongoDB.",
                "Implemented 2-layer session security using JWT-based authentication and HTTP-only cookies."
            ],
            "technologies": ["React.js", "Node.js", "Express.js", "MongoDB", "Zoom API", "Socket.IO", "JWT"],
            "type": "Full Stack"
        }
    ],
    "achievements": [
        "Led a team of 6 members to clear the internal college round of Smart India Hackathon (SIH) at VJTI, demonstrating leadership, ideation, and technical execution skills.",
        "Solved 400+ Data Structures and Algorithms problems on LeetCode.",
        "Achieved a 2-star rating on CodeChef in competitive programming.",
        "Full Stack Web Development – Udemy (2025): Gained practical experience in building MERN stack applications with JWT-based authentication, responsive design, and API-driven backend systems."
    ]
}

def seed_database():
    """Idempotently seed resume data into MongoDB."""
    collection = db["resume"]
    existing = collection.find_one({"name": "Pritam Chavan"})
    if not existing:
        collection.insert_one(RESUME_DATA)
        print("✅ Resume data seeded into MongoDB.")
    else:
        # Update existing record
        collection.replace_one({"name": "Pritam Chavan"}, RESUME_DATA)
        print("✅ Resume data updated in MongoDB.")

def get_resume_collection():
    return db["resume"]
