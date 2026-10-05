import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App() {
  const [status, setStatus] = React.useState('')
  const [requests, setRequests] = React.useState([])

  async function submitRequest(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const response = await fetch('http://localhost:3001/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Request failed')
      setRequests((items) => [data.request, ...items])
      setStatus(`Request ${data.request.id} submitted successfully.`)
      event.currentTarget.reset()
    } catch (error) {
      setStatus(error.message)
    }
  }

  return (
    <div className="app">
      <a className="skip-link" href="#main">Skip to main content</a>

      <header className="site-header">
        <div className="container header-inner">
          <div>
            <p className="eyebrow">PUBLIC SERVICE PORTAL</p>
            <h1>Service Request Center</h1>
          </div>
          <nav aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#request">Submit request</a>
            <a href="#requests">My requests</a>
          </nav>
        </div>
      </header>

      <main id="main" className="container">
        <section className="hero" aria-labelledby="welcome-title">
          <div>
            <p className="eyebrow">ACCESSIBILITY-FIRST DEMO</p>
            <h2 id="welcome-title">Request a public service online</h2>
            <p>Submit a request, receive a reference number, and track progress from one accessible dashboard.</p>
          </div>
          <div className="status-card" aria-label="Portal status">
            <strong>Online</strong>
            <span>Services available 24/7</span>
          </div>
        </section>

        <section id="services" className="panel" aria-labelledby="services-title">
          <h2 id="services-title">Popular services</h2>
          <div className="service-grid">
            <article><h3>Document certificate</h3><p>Request a certificate or verify an existing application.</p></article>
            <article><h3>Address update</h3><p>Submit a change of address for eligible services.</p></article>
            <article><h3>Public grievance</h3><p>Report an issue and track its resolution status.</p></article>
          </div>
        </section>

        <section id="request" className="panel" aria-labelledby="request-title">
          <h2 id="request-title">Submit a service request</h2>
          <form onSubmit={submitRequest}>
            <div className="form-grid">
              <div>
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" autoComplete="name" required />
              </div>
              <div>
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" type="email" autoComplete="email" required />
              </div>
            </div>

            <div>
              <label htmlFor="service">Service</label>
              <select id="service" name="service" defaultValue="" required>
                <option value="" disabled>Select a service</option>
                <option>Document certificate</option>
                <option>Address update</option>
                <option>Public grievance</option>
              </select>
            </div>

            <div>
              <label htmlFor="description">Request details</label>
              <textarea id="description" name="description" rows="5" required />
            </div>

            <button type="submit">Submit request</button>
            <p className="form-status" role="status" aria-live="polite">{status}</p>
          </form>
        </section>

        <section id="requests" className="panel" aria-labelledby="requests-title">
          <h2 id="requests-title">Recent requests</h2>
          {requests.length === 0 ? (
            <p>No requests submitted in this session.</p>
          ) : (
            <ul className="request-list">
              {requests.map((item) => (
                <li key={item.id}>
                  <strong>{item.id}</strong>
                  <span>{item.service}</span>
                  <span>{item.status}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer>
        <div className="container">
          <p>Accessibility Baseline & Repository Architecture Audit — demonstration project.</p>
        </div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
