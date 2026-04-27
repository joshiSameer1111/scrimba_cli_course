import { getData } from '../utils/getData.js'
import { sendResponse } from '../utils/sendResponse.js'

export async function handleGet(req, res) {
  const data = await getData()

  const json = JSON.stringify(data)

  sendResponse(res, 200, 'application/json', json)
}