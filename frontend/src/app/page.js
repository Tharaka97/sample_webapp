'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'

// Configure axios base URL for different environments
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000',
})

export default function Home() {
  const [message, setMessage] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [contactResponse, setContactResponse] = useState('')

  const fetchHello = async () => {
    try {
      setLoading(true)
      const response = await api.get('/api/hello')
      setMessage(response.data.message + ' at ' + new Date(response.data.timestamp).toLocaleString())
    } catch (error) {
      setMessage('Error: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await api.get('/api/data')
      setData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await api.post('/api/contact', contactForm)
      setContactResponse(response.data.message)
      setContactForm({ name: '', email: '', message: '' })
    } catch (error) {
      setContactResponse('Error: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Full-Stack Web App
            </h1>
            <nav className="space-x-8">
              <a href="#home" className="text-gray-500 hover:text-gray-900">Home</a>
              <a href="#data" className="text-gray-500 hover:text-gray-900">Data</a>
              <a href="#contact" className="text-gray-500 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section id="home" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Our Full-Stack Application
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Built with Next.js frontend and Node.js backend
          </p>
          <button
            onClick={fetchHello}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            {loading ? 'Loading...' : 'Get Hello Message'}
          </button>
          {message && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              {message}
            </div>
          )}
        </section>

        {/* Data Section */}
        <section id="data" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sample Data</h2>
          <button
            onClick={fetchData}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white font-bold py-3 px-6 rounded-lg mb-6 transition duration-200"
          >
            {loading ? 'Loading...' : 'Load Data'}
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <span className="text-sm text-gray-400">ID: {item.id}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
          <form onSubmit={handleContactSubmit} className="max-w-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactForm.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactForm.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={contactForm.message}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {contactResponse && (
            <div className="mt-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded">
              {contactResponse}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Full-Stack Web App. Built with Next.js and Node.js.</p>
        </div>
      </footer>
    </div>
  )
}
