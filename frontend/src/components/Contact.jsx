import './Contact.css'

const contactLinks = [
    {
        icon: '📧',
        label: 'Email',
        value: 'pcchavan_b23@et.vjti.ac.in',
        href: 'mailto:pcchavan_b23@et.vjti.ac.in',
        color: 'purple',
    },
    {
        icon: '📱',
        label: 'Phone',
        value: '+91 9130238226',
        href: 'tel:+919130238226',
        color: 'cyan',
    },
    {
        icon: '💼',
        label: 'LinkedIn',
        value: 'linkedin.com/in/chavanpritam',
        href: 'https://linkedin.com/in/chavanpritam',
        color: 'blue',
        external: true,
    },
    {
        icon: '🐙',
        label: 'GitHub',
        value: 'github.com/pritam195',
        href: 'https://github.com/pritam195',
        color: 'green',
        external: true,
    },
]

export default function Contact() {
    return (
        <section id="contact" className="section contact">
            <div className="section-container">
                <p className="section-label">Get in touch</p>
                <h2 className="section-title">
                    Let's <span className="gradient-text">Connect</span>
                </h2>
                <div className="divider" />

                <div className="contact__layout">
                    <div className="contact__intro">
                        <p className="contact__text">
                            I'm currently open to internships, project collaborations, and exciting
                            opportunities. Whether you have a question, a project idea, or just want
                            to connect — feel free to reach out!
                        </p>
                        <div className="contact__availability">
                            <span className="contact__avail-dot" />
                            <span>Available for opportunities</span>
                        </div>
                    </div>

                    <div className="contact__links">
                        {contactLinks.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`glass-card contact__card contact__card--${link.color}`}
                                target={link.external ? '_blank' : undefined}
                                rel={link.external ? 'noopener noreferrer' : undefined}
                            >
                                <span className="contact__icon">{link.icon}</span>
                                <div className="contact__info">
                                    <span className="contact__link-label">{link.label}</span>
                                    <span className="contact__link-value">{link.value}</span>
                                </div>
                                <span className="contact__arrow">→</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="contact__footer">
                <p>Built with React + FastAPI · Powered by OpenRouter AI</p>
                <p>© 2025 Pritam Chavan — All rights reserved</p>
            </div>
        </section>
    )
}
