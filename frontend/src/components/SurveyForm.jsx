import React from 'react'

export default function SurveyForm({ questions, onSubmit }){
  return (
    <form onSubmit={e=>{e.preventDefault(); onSubmit();}}>
      {questions.map(q=> (
        <div key={q.id} className="mb-2">
          <label>{q.text}</label>
          <input className="w-full p-2 border rounded" />
        </div>
      ))}
      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Save</button>
    </form>
  )
}
