import React from 'react'
import { useCounter } from '../hooks/useCounter'

function Information() {
    const { count, inc, reset } = useCounter(0)
  return (
    <div>
      <h2>Clicks: <span> {count}</span></h2>
        
    </div>
  )
}

export default Information
