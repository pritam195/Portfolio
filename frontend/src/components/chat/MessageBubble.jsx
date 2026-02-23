import './MessageBubble.css'

export default function MessageBubble({ message }) {
    const isUser = message.role === 'user'

    return (
        <div className={`bubble-wrapper ${isUser ? 'bubble-wrapper--user' : 'bubble-wrapper--ai'}`}>
            {!isUser && (
                <div className="bubble-avatar bubble-avatar--ai">
                    <span>🤖</span>
                </div>
            )}

            <div className={`bubble ${isUser ? 'bubble--user' : 'bubble--ai'} ${message.isError ? 'bubble--error' : ''}`}>
                <p className="bubble-text">{message.content}</p>
            </div>

            {isUser && (
                <div className="bubble-avatar bubble-avatar--user">
                    <span>👤</span>
                </div>
            )}
        </div>
    )
}
