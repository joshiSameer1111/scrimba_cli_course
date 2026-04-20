import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'
import { filterData } from './utils/filterData.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

  if (req.url === '/api' && req.method === 'GET') {
    sendJSONResponse(res, 200, destinations)

  } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
    const continent = req.url.split('/').pop()
    sendJSONResponse(res, 200, filterData(destinations, 'continent', continent))

  } else if (req.url.startsWith('/api/country') && req.method === 'GET') {
    const country = req.url.split('/').pop()
    sendJSONResponse(res, 200, filterData(destinations, 'country', country))

  } else {
    sendJSONResponse(res, 404, {
      error: "not found",
      message: "The requested route does not exist"
    })
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))