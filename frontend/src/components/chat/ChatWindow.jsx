import { useState, useRef, useEffect } from 'react'
import { useChat } from '../../hooks/useChat'
import MessageBubble from './MessageBubble'
import TypingIndicator from './TypingIndicator'
import './ChatWindow.css'

const SUGGESTIONS = [
    'What projects has Pritam worked on?',
    'What are his technical skills?',
    "What's his CGPA?",
    'Tell me about CampusCart',
    'What certifications does he have?',
]

export default function ChatWindow({ onClose }) {
    const { messages, loading, sendMessage, clearMessages } = useChat()
    const [input, setInput] = useState('')
    const bottomRef = useRef(null)
    const inputRef = useRef(null)
    const [showSuggestions, setShowSuggestions] = useState(true)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, loading])

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const handleSend = () => {
        if (!input.trim() || loading) return
        setShowSuggestions(false)
        sendMessage(input.trim())
        setInput('')
    }

    const handleSuggestion = (text) => {
        setShowSuggestions(false)
        sendMessage(text)
    }

    const handleKey = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    return (
        <div className="chat-window">
            {/* Header */}
            <div className="chat-window__header">
                <div className="chat-window__header-info">
                    <div className="chat-window__avatar">🤖</div>
                    <div>
                        <h3 className="chat-window__title">Resume AI</h3>
                        <p className="chat-window__subtitle">Ask about Pritam's portfolio</p>
                    </div>
                </div>
                <div className="chat-window__actions">
                    <button
                        className="chat-window__btn"
                        onClick={clearMessages}
                        title="Clear chat"
                    >
                        🗑️
                    </button>
                    <button
                        className="chat-window__btn"
                        onClick={onClose}
                        title="Close"
                    >
                        ✕
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className="chat-window__messages">
                {messages.map((msg, i) => (
                    <MessageBubble key={i} message={msg} />
                ))}

                {loading && <TypingIndicator />}

                {/* Suggestions */}
                {showSuggestions && messages.length === 1 && (
                    <div className="chat-window__suggestions">
                        <p className="chat-window__suggest-label">Try asking:</p>
                        {SUGGESTIONS.map(s => (
                            <button
                                key={s}
                                className="chat-window__suggest-btn"
                                onClick={() => handleSuggestion(s)}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                )}

                <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="chat-window__input-area">
                <textarea
                    ref={inputRef}
                    className="chat-window__input"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="Ask about skills, projects, education..."
                    rows={1}
                    disabled={loading}
                />
                <button
                    className={`chat-window__send ${loading ? 'chat-window__send--loading' : ''}`}
                    onClick={handleSend}
                    disabled={loading || !input.trim()}
                    title="Send"
                >
                    {loading ? '⏳' : '➤'}
                </button>
            </div>
        </div>
    )
}
