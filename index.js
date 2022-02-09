const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

const PORT = process.env.PORT
const HOST = process.env.HOST
const API_SERVICE_URL = 'https://itunes.apple.com'

// Logging
app.use(morgan('dev'))

// CORS
app.use(cors({ origin: '*' }))

// Proxy endpoint
app.use(
  '/',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
  })
)

// Start the server
app.listen(PORT, HOST, () => {
  console.log(`✨ Proxy server running at ${HOST}:${PORT}`)
})
