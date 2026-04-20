import http from 'node:http'

const PORT = 8000


const server = http.createServer( (req, res)=> {

console.log(req.url)

  if (req.url === '/api') {
    res.end('This is from the server')
  } else {
    res.end('Not Found')
  }
})



server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
