import React, { useState } from 'react'

export default function ChatBox({ messages = [], onSend }) {
  const [text, setText] = useState('')

  function submit(e) {
    e.preventDefault()
    if (!text.trim()) return
    onSend(text.trim())
    setText('')
  }

  return (
    <div className="border rounded p-4 bg-white">
      <div className="h-64 overflow-auto mb-4">
        {messages.map((m,i) => (
          <div key={i} className={`mb-2 ${m.role==='user'?'text-right':''}`}>
            <div className={`inline-block p-2 rounded ${m.role==='user'?'bg-blue-500 text-white':'bg-gray-200'}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={submit} className="flex gap-2">
        <input value={text} onChange={e=>setText(e.target.value)} className="flex-1 p-2 border rounded" placeholder="Type message..." />
        <button className="px-4 py-2 bg-green-600 text-white rounded">Send</button>
      </form>
    </div>
  )
}
