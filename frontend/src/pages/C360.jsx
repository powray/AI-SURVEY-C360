import React, { useEffect, useState } from 'react'
import { listCustomers, getCustomer } from '../api/api'
import { useParams } from 'react-router-dom'

export default function C360() {
  const { id } = useParams()
  const [customer, setCustomer] = useState(null)

  useEffect(()=>{
    if (id) {
      getCustomer(id).then(d=>setCustomer(d.customer)).catch(console.error)
    } else {
      listCustomers('demo-user-id').then(d=>{
        setCustomer(d.customers && d.customers[0])
      }).catch(console.error)
    }
  }, [id])

  if (!customer) return <div>Loading...</div>

  return (
    <div>
      <h2 className="text-xl font-semibold">Customer 360 — {customer.name || customer.email}</h2>
      <div className="mt-4 bg-white p-4 rounded shadow">
        <pre className="text-sm">{JSON.stringify(customer, null, 2)}</pre>
      </div>
    </div>
  )
}
