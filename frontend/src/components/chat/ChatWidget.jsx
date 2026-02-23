import { useState } from 'react'
import ChatWindow from './ChatWindow'
import './ChatWidget.css'

export default function ChatWidget() {
    const [open, setOpen] = useState(false)

    return (
        <>
            {/* Floating button */}
            <button
                id="chat-widget-btn"
                className={`chat-widget__fab ${open ? 'chat-widget__fab--active' : ''}`}
                onClick={() => setOpen(o => !o)}
                title="Chat with AI about Pritam's resume"
                aria-label="Open AI chat"
            >
                <span className="chat-widget__icon">
                    {open ? '✕' : '💬'}
                </span>
                {!open && <span className="chat-widget__pulse" />}
            </button>

            {/* Chat panel */}
            <div className={`chat-widget__panel ${open ? 'chat-widget__panel--open' : ''}`}>
                {open && <ChatWindow onClose={() => setOpen(false)} />}
            </div>
        </>
    )
}
