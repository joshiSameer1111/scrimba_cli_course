import http from 'node:http'

const server = http.createServer((req, res) => {
  // Status code
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })

  // HTML response
  res.end('<html><h1>The server is working</h1></html>')
})

// Listen on port 8000
server.listen(8000, () => {
  console.log('Server running at http://localhost:8000')
})