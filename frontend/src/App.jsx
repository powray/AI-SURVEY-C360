import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 bg-white shadow">
        <div className="container mx-auto flex gap-4">
          <h1 className="font-bold">MERN AI C360</h1>
          <nav className="flex gap-2">
            <Link to="/" className="text-sm">Dashboard</Link>
            <Link to="/survey" className="text-sm">Survey</Link>
            <Link to="/chat" className="text-sm">Chat</Link>
            <Link to="/performance" className="text-sm">Performance</Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  )
}
