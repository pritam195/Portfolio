import './Achievements.css'

const achievements = [
    {
        icon: '🏆',
        title: 'Smart India Hackathon (SIH)',
        description: 'Led a team of 6 members to clear the internal college round at VJTI, demonstrating leadership, ideation, and technical execution skills.',
        tag: 'Leadership',
        tagColor: 'gold',
    },
    {
        icon: '💻',
        title: '400+ LeetCode Problems',
        description: 'Solved 400+ Data Structures and Algorithms problems on LeetCode, demonstrating strong problem-solving and algorithmic thinking.',
        tag: 'DSA',
        tagColor: 'orange',
    },
    {
        icon: '⭐',
        title: '2-Star CodeChef Rating',
        description: 'Achieved a 2-star rating on CodeChef in competitive programming, consistently competing in rated contests.',
        tag: 'Competitive Programming',
        tagColor: 'brown',
    },
    {
        icon: '🎓',
        title: 'Full Stack Web Development — Udemy',
        description: 'Completed Udemy certification (2025) gaining practical experience in MERN stack, JWT authentication, responsive design, and API-driven backends.',
        tag: 'Certification',
        tagColor: 'green',
    },
]

export default function Achievements() {
    return (
        <section id="achievements" className="section achievements">
            <div className="section-container">
                <p className="section-label">Recognition & Certifications</p>
                <h2 className="section-title">
                    Achievements &amp; <span className="gradient-text">Milestones</span>
                </h2>
                <div className="divider" />

                <div className="achievements__grid">
                    {achievements.map((item, i) => (
                        <div key={i} className="glass-card achievements__card">
                            <div className="achievements__card-inner">
                                <span className="achievements__icon">{item.icon}</span>
                                <div className="achievements__content">
                                    <div className="achievements__header">
                                        <h3 className="achievements__title">{item.title}</h3>
                                        <span className={`achievements__tag achievements__tag--${item.tagColor}`}>
                                            {item.tag}
                                        </span>
                                    </div>
                                    <p className="achievements__desc">{item.description}</p>
                                </div>
                            </div>
                            <div className="achievements__number">0{i + 1}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
