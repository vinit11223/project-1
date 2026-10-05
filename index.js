import express from 'express'
import cors from 'cors'
import crypto from 'node:crypto'

const app = express()
const PORT = process.env.PORT || 3001
const requests = []

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'request-api' })
})

app.get('/api/requests', (_req, res) => {
  res.json({ requests })
})

app.post('/api/requests', (req, res) => {
  const { name, email, service, description } = req.body || {}

  if (!name || !email || !service || !description) {
    return res.status(400).json({ message: 'All fields are required.' })
  }

  const request = {
    id: `REQ-${crypto.randomBytes(3).toString('hex').toUpperCase()}`,
    name,
    email,
    service,
    description,
    status: 'Submitted',
    createdAt: new Date().toISOString()
  }

  requests.push(request)
  return res.status(201).json({ request })
})

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`)
})
