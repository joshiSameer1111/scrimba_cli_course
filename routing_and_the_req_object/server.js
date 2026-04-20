import http from 'node:http'

const PORT = 8000


const server = http.createServer( (req, res)=> {

console.log(req.url)

  if (req.method === 'GET') {
   if (req.url === '/api') {
    res.end('This is a GET request')
   }
    
  } else {
    res.end('Method not allowed')
  }
})



server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
