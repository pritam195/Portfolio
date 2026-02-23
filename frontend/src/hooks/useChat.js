import { useState, useRef, useCallback } from 'react'

const BASE_URL = import.meta.env.VITE_API_URL || ''
const API_URL = `${BASE_URL}/api/chat`

export function useChat() {
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: "Hi! 👋 I'm Pritam's AI assistant. Ask me anything about his skills, projects, education, or experience — I only answer from his resume!",
        },
    ])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const abortRef = useRef(null)

    const sendMessage = useCallback(async (question) => {
        if (!question.trim() || loading) return

        const userMsg = { role: 'user', content: question }
        setMessages(prev => [...prev, userMsg])
        setLoading(true)
        setError(null)

        try {
            const controller = new AbortController()
            abortRef.current = controller

            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question }),
                signal: controller.signal,
            })

            if (!res.ok) {
                const errData = await res.json().catch(() => ({}))
                throw new Error(errData.detail || `Server error: ${res.status}`)
            }

            const data = await res.json()
            setMessages(prev => [...prev, { role: 'assistant', content: data.answer }])
        } catch (err) {
            if (err.name === 'AbortError') return
            const errMsg = err.message || 'Something went wrong. Please try again.'
            setError(errMsg)
            setMessages(prev => [
                ...prev,
                { role: 'assistant', content: `⚠️ ${errMsg}`, isError: true },
            ])
        } finally {
            setLoading(false)
        }
    }, [loading])

    const clearMessages = useCallback(() => {
        setMessages([
            {
                role: 'assistant',
                content: "Hi! 👋 I'm Pritam's AI assistant. Ask me anything about his skills, projects, education, or experience!",
            },
        ])
        setError(null)
    }, [])

    return { messages, loading, error, sendMessage, clearMessages }
}
