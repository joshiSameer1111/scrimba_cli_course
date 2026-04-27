import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { handleGet } from './handlers/routeHandlers.js'

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {

  // 1. Route for /api
  if (req.url === '/api') {

    // 2. Check method GET
    if (req.method === 'GET') {

      // 3. Handle GET request
      return await handleGet(req, res)
    }
  }

  // Serve frontend for everything else
  if (!req.url.startsWith('/api')) {
    return await serveStatic(req, res, __dirname)
  }

})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))