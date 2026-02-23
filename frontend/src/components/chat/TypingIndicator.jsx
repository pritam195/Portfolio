import './TypingIndicator.css'

export default function TypingIndicator() {
    return (
        <div className="typing-wrapper">
            <div className="typing-avatar">🤖</div>
            <div className="typing-bubble">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
            </div>
        </div>
    )
}
