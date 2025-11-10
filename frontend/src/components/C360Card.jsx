import React from 'react'

export default function C360Card({ customer }){
  if(!customer) return null
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">{customer.name || customer.email}</h3>
      <div className="text-sm text-gray-600 mt-2">Tags: {customer.tags && customer.tags.join(', ')}</div>
    </div>
  )
}
