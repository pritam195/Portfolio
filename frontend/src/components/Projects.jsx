import './Projects.css'

const projects = [
    {
        title: 'Credit Risk Default Prediction',
        subtitle: '& Portfolio Segmentation',
        date: 'Oct 2025',
        type: 'Machine Learning',
        typeColor: 'blue',
        description: 'End-to-end ML system to estimate borrower probability of default and support credit portfolio risk management.',
        highlights: [
            '87% AUC-ROC on 5,000 borrower records',
            '14+ engineered financial features',
            '4 risk bands for portfolio segmentation',
        ],
        technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
        emoji: '📊',
    },
    {
        title: 'CampusCart',
        subtitle: 'MERN Stack Campus Marketplace',
        date: 'July 2025',
        type: 'Full Stack',
        typeColor: 'purple',
        description: 'Secure peer-to-peer marketplace for college students to buy/sell with optimized performance and JWT auth.',
        highlights: [
            '20+ RESTful APIs with JWT auth',
            '12+ reusable React components',
            '30% faster load via lazy loading',
        ],
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
        emoji: '🛒',
    },
    {
        title: 'Mentors Connect',
        subtitle: 'Real-Time Mentorship Platform',
        date: 'June 2025',
        type: 'Full Stack',
        typeColor: 'cyan',
        description: 'Real-time mentor–student platform with instant Zoom sessions, live chat, and 2-layer security.',
        highlights: [
            'Zoom API for instant meeting creation',
            'Socket.IO real-time chat system',
            '2-layer JWT + HTTP-only cookie auth',
        ],
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Zoom API'],
        emoji: '🎓',
    },
]

const typeColors = {
    purple: { bg: 'rgba(124,58,237,0.15)', border: 'rgba(124,58,237,0.4)', text: '#a78bfa' },
    cyan: { bg: 'rgba(6,182,212,0.15)', border: 'rgba(6,182,212,0.4)', text: '#67e8f9' },
    blue: { bg: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.4)', text: '#93c5fd' },
}

export default function Projects() {
    return (
        <section id="projects" className="section projects">
            <div className="section-container">
                <p className="section-label">What I've built</p>
                <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                <div className="divider" />

                <div className="projects__grid">
                    {projects.map((project, i) => {
                        const colors = typeColors[project.typeColor]
                        return (
                            <div key={i} className="glass-card projects__card">
                                <div className="projects__card-top">
                                    <span className="projects__emoji">{project.emoji}</span>
                                    <span
                                        className="projects__type-badge"
                                        style={{ background: colors.bg, border: `1px solid ${colors.border}`, color: colors.text }}
                                    >
                                        {project.type}
                                    </span>
                                </div>

                                <div className="projects__header">
                                    <h3 className="projects__title">{project.title}</h3>
                                    <p className="projects__subtitle">{project.subtitle}</p>
                                    <span className="projects__date">{project.date}</span>
                                </div>

                                <p className="projects__desc">{project.description}</p>

                                <ul className="projects__highlights">
                                    {project.highlights.map((h, j) => (
                                        <li key={j} className="projects__highlight-item">
                                            <span className="projects__bullet" />
                                            {h}
                                        </li>
                                    ))}
                                </ul>

                                <div className="projects__tech">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
