import React, { useState } from 'react'
import ChatBox from '../components/ChatBox'
import { postChat } from '../api/api'

export default function Chat() {
  const [messages, setMessages] = useState([])

  async function send(message) {
    setMessages(prev => [...prev, { role: 'user', text: message }])
    try {
      const res = await postChat({ userId: 'demo-user-id', message })
      setMessages(prev => [...prev, { role: 'assistant', text: res.assistantText }])
      console.log('actions executed', res.actions)
    } catch (err) { console.error(err) }
  }

  return (
    <div className="max-w-3xl">
      <h2 className="text-xl font-semibold">AI Chat</h2>
      <ChatBox messages={messages} onSend={send} />
    </div>
  )
}
