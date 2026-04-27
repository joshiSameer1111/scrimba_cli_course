import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const PORT = 8000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer(async (req, res) => {
  await serveStatic(__dirname, req, res)
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))