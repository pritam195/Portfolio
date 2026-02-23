import './Skills.css'

const skillGroups = [
    {
        category: 'Languages',
        icon: '🧠',
        color: 'purple',
        skills: ['C++', 'JavaScript', 'Python', 'SQL'],
    },
    {
        category: 'Frontend',
        icon: '🎨',
        color: 'cyan',
        skills: ['HTML', 'CSS', 'Tailwind CSS', 'React.js'],
    },
    {
        category: 'Backend',
        icon: '⚙️',
        color: 'pink',
        skills: ['Node.js', 'Express.js', 'Socket.IO', 'Axios'],
    },
    {
        category: 'Databases',
        icon: '🗄️',
        color: 'green',
        skills: ['MongoDB', 'MySQL'],
    },
    {
        category: 'Tools',
        icon: '🛠️',
        color: 'orange',
        skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
    },
    {
        category: 'ML Libraries',
        icon: '📊',
        color: 'blue',
        skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    },
    {
        category: 'CS Fundamentals',
        icon: '📚',
        color: 'violet',
        skills: ['DSA', 'OOP', 'DBMS', 'OS'],
    },
]

export default function Skills() {
    return (
        <section id="skills" className="section skills">
            <div className="section-container">
                <p className="section-label">What I work with</p>
                <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
                <div className="divider" />

                <div className="skills__grid">
                    {skillGroups.map(group => (
                        <div key={group.category} className={`glass-card skills__card skills__card--${group.color}`}>
                            <div className="skills__card-header">
                                <span className="skills__icon">{group.icon}</span>
                                <h3 className="skills__category">{group.category}</h3>
                            </div>
                            <div className="skills__badges">
                                {group.skills.map(skill => (
                                    <span key={skill} className="tech-badge">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
