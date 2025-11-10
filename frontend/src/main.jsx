import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Survey from './pages/Survey'
import Chat from './pages/Chat'
import C360 from './pages/C360'
import Dashboard from './pages/Dashboard'
import Performance from './pages/Performance'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="survey" element={<Survey />} />
          <Route path="chat" element={<Chat />} />
          <Route path="c360/:id" element={<C360 />} />
          <Route path="performance" element={<Performance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
