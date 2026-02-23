import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        let animId
        let particles = []

        const resize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        resize()
        window.addEventListener('resize', resize)

        // Create particles
        for (let i = 0; i < 60; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 2 + 0.5,
                dx: (Math.random() - 0.5) * 0.4,
                dy: (Math.random() - 0.5) * 0.4,
                alpha: Math.random() * 0.5 + 0.1,
                color: Math.random() > 0.5 ? '#7c3aed' : '#06b6d4',
            })
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach(p => {
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                ctx.fillStyle = p.color
                ctx.globalAlpha = p.alpha
                ctx.fill()
                p.x += p.dx
                p.y += p.dy
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1
            })
            ctx.globalAlpha = 1
            animId = requestAnimationFrame(draw)
        }
        draw()

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <section id="hero" className="hero">
            <canvas ref={canvasRef} className="hero__canvas" />
            <div className="hero__glow hero__glow--purple" />
            <div className="hero__glow hero__glow--cyan" />

            <div className="hero__content section-container">
                <div className="hero__badge animate-fade-up">
                    <span className="hero__badge-dot" />
                    Available for opportunities
                </div>

                <h1 className="hero__name animate-fade-up" style={{ animationDelay: '0.1s' }}>
                    Hi, I'm <span className="gradient-text">Pritam Chavan</span>
                </h1>

                <div className="hero__roles animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    <span>Full Stack Developer</span>
                    <span className="hero__roles-sep">·</span>
                    <span>MERN Stack</span>
                    <span className="hero__roles-sep">·</span>
                    <span>ML Enthusiast</span>
                </div>

                <p className="hero__bio animate-fade-up" style={{ animationDelay: '0.3s' }}>
                    B.Tech student at <span className="hero__highlight">VJTI Mumbai</span> specializing in
                    Electronics & Telecommunication with a Minor in Data Science. I build scalable
                    full-stack applications with clean code and great UX.
                </p>

                <div className="hero__actions animate-fade-up" style={{ animationDelay: '0.4s' }}>
                    <a href="#projects" className="btn-primary">
                        <span>🚀 View Projects</span>
                    </a>
                    <a href="#contact" className="btn-secondary">
                        📬 Get in Touch
                    </a>
                </div>

                <div className="hero__stats animate-fade-up" style={{ animationDelay: '0.5s' }}>
                    <div className="hero__stat">
                        <span className="hero__stat-number gradient-text">3+</span>
                        <span className="hero__stat-label">Projects Built</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-number gradient-text">400+</span>
                        <span className="hero__stat-label">LeetCode Solved</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-number gradient-text">7.70</span>
                        <span className="hero__stat-label">CPI at VJTI</span>
                    </div>
                </div>
            </div>

            <div className="hero__scroll-hint">
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-wheel" />
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    )
}
