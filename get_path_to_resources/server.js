import http from 'node:http'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { serveStatic } from './utils/serveStatic.js'

const PORT = 8000

// Recreate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer((req, res) => {

    // Call serveStatic and pass current directory
    serveStatic(__dirname)

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><h1>The server is working</h1></html>')
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))