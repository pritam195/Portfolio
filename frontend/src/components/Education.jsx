import './Education.css'

export default function Education() {
    return (
        <section id="education" className="section education">
            <div className="section-container">
                <p className="section-label">Where I'm learning</p>
                <h2 className="section-title">
                    <span className="gradient-text">Education</span>
                </h2>
                <div className="divider" />

                <div className="education__timeline">
                    <div className="education__line" />

                    <div className="glass-card education__card">
                        <div className="education__dot" />
                        <div className="education__header">
                            <div>
                                <h3 className="education__inst">Veermata Jijabai Technological Institute</h3>
                                <p className="education__short">(VJTI) — Mumbai, Maharashtra</p>
                            </div>
                            <span className="education__duration">July 2023 – May 2027</span>
                        </div>

                        <div className="education__degree-row">
                            <div className="education__degree-badge">B.Tech</div>
                            <div>
                                <p className="education__degree">
                                    Electronics &amp; Telecommunication Engineering
                                </p>
                                <p className="education__minor">Minor in Data Science</p>
                            </div>
                        </div>

                        <div className="education__cpi-row">
                            <div className="education__cpi-card">
                                <span className="education__cpi-label">Current CPI</span>
                                <span className="education__cpi-value gradient-text">7.70</span>
                            </div>
                        </div>

                        <div className="education__coursework">
                            <h4 className="education__coursework-title">Relevant Coursework</h4>
                            <div className="education__coursework-grid">
                                {[
                                    'C++ Programming',
                                    'Python Programming',
                                    'Data Science',
                                    'Object-Oriented Programming',
                                    'Computer Communication Network',
                                ].map(course => (
                                    <div key={course} className="education__course-item">
                                        <span className="education__course-dot" />
                                        {course}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
