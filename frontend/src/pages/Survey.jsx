import React, { useEffect, useState } from 'react'
import { getSurveyQuestions, submitSurvey } from '../api/api'

export default function Survey() {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})

  useEffect(() => {
    getSurveyQuestions().then(d => setQuestions(d.questions)).catch(console.error)
  }, [])

  function handleChange(id, value) {
    setAnswers(prev => ({ ...prev, [id]: value }))
  }

  function handleSubmit() {
    // NOTE: in real app, userId from auth
    submitSurvey({ userId: 'demo-user-id', answers: Object.entries(answers).map(([k,v]) => ({ questionId: k, value: v })) })
      .then(console.log)
      .catch(console.error)
  }

  return (
    <div>
      <h2 className="text-xl font-semibold">Personalization Survey</h2>
      <div className="mt-4 space-y-4">
        {questions.map(q => (
          <div key={q.id}>
            <label className="block text-sm font-medium">{q.text}</label>
            <input type="text" className="mt-1 p-2 border rounded w-full" onChange={e=>handleChange(q.id, e.target.value)} />
          </div>
        ))}
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={handleSubmit}>Submit</button>
    </div>
  )
}
