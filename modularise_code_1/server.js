import http from 'node:http'
import { getDataFromDB } from './database/db.js'

const PORT = 8000

function sendResponse(res, statusCode, data) {
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = statusCode
  res.end(JSON.stringify(data))
}

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

  if (req.url === '/api' && req.method === 'GET') {
    sendResponse(res, 200, destinations)

  } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
    const continent = req.url.split('/').pop()
    const filteredData = destinations.filter(destination =>
      destination.continent.toLowerCase() === continent.toLowerCase()
    )

    sendResponse(res, 200, filteredData)

  } else {
    sendResponse(res, 404, {
      error: 'not found',
      message: 'The requested route does not exist'
    })
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))