import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function getData() {
  try {
    const filePath = path.join(__dirname, '..', 'data', 'data.json')

    const jsonData = await fs.readFile(filePath, 'utf-8')

    const data = JSON.parse(jsonData)

    return data

  } catch (err) {
    return []
  }
}