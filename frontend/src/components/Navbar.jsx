import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
    { label: 'About', href: '#hero' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLinkClick = () => setMenuOpen(false)

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner">
                <a href="#hero" className="navbar__logo">
                    <span className="navbar__logo-bracket">&lt;</span>
                    <span className="navbar__logo-name">PC</span>
                    <span className="navbar__logo-bracket"> /&gt;</span>
                </a>

                <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a href={link.href} className="navbar__link" onClick={handleLinkClick}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="mailto:pcchavan_b23@et.vjti.ac.in"
                            className="btn-primary navbar__cta"
                            onClick={handleLinkClick}
                        >
                            <span>Hire Me</span>
                        </a>
                    </li>
                </ul>

                <button
                    className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    )
}
