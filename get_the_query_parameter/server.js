import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'
import { getDataByPathParams } from './utils/getDataByPathParams.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

  const urlObj = new URL(req.url, `http://${req.headers.host}`)
  const queryObj = Object.fromEntries(urlObj.searchParams)

  if (urlObj.pathname === '/api' && req.method === 'GET') {

    let filteredDestinations = destinations

    // apply query filters (e.g. ?continent=asia)
    if (queryObj.continent) {
      filteredDestinations = getDataByPathParams(
        filteredDestinations,
        'continent',
        queryObj.continent
      )
    }

    if (queryObj.country) {
      filteredDestinations = getDataByPathParams(
        filteredDestinations,
        'country',
        queryObj.country
      )
    }

    sendJSONResponse(res, 200, filteredDestinations)

  } else if (urlObj.pathname.startsWith('/api/continent') && req.method === 'GET') {

    const continent = urlObj.pathname.split('/').pop()
    const filteredData = getDataByPathParams(destinations, 'continent', continent)

    sendJSONResponse(res, 200, filteredData)

  } else if (urlObj.pathname.startsWith('/api/country') && req.method === 'GET') {

    const country = urlObj.pathname.split('/').pop()
    const filteredData = getDataByPathParams(destinations, 'country', country)

    sendJSONResponse(res, 200, filteredData)

  } else {

    sendJSONResponse(res, 404, {
      error: "not found",
      message: "The requested route does not exist"
    })

  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))