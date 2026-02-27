'use client'

import { useState, useEffect } from 'react'
import { sdk } from '@farcaster/miniapp-sdk'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await sdk.actions.ready()
      } catch (error) {
        console.error('Failed to initialize SDK:', error)
      }
    }
    initializeApp()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name.trim() || !email.trim()) {
      setMessage('❌ Please fill in all fields')
      return
    }

    if (!email.includes('@')) {
      setMessage('❌ Please enter a valid email')
      return
    }

    setLoading(true)

    try {
      // Simulate API call (replace with your backend)
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Store data (you can replace this with actual API call)
      const existingData = localStorage.getItem('waitlist') || '[]'
      const list = JSON.parse(existingData)
      list.push({ name, email, joinedAt: new Date().toISOString() })
      localStorage.setItem('waitlist', JSON.stringify(list))

      setMessage(`✅ Welcome ${name}! You've been added to the waitlist.`)
      setName('')
      setEmail('')
    } catch (error) {
      setMessage('❌ Something went wrong. Please try again.')
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
      />
      
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />
      
      <button 
        type="submit" 
        disabled={loading}
        style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
      >
        {loading ? 'Joining...' : 'Join Waitlist'}
      </button>

      {message && (
        <div className={message.startsWith('✅') ? 'success-message' : 'error-message'}>
          {message}
        </div>
      )}
    </form>
  )
}
