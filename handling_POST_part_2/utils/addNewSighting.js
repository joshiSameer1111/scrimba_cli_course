import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getData } from './getData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function addNewSighting(newSighting) {
  try {
    const data = await getData()

    data.push(newSighting)

    const filePath = path.join(__dirname, '..', 'data', 'data.json')

    await fs.writeFile(
      filePath,
      JSON.stringify(data, null, 2),
      'utf8'
    )

  } catch (err) {
    throw new Error(`Could not add new sighting: ${err}`)
  }
}