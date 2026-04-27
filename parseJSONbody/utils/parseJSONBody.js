export function parseJSONBody(req) {
  return new Promise((resolve, reject) => {
    let body = ''

    req.on('data', chunk => {
      body += chunk.toString()
    })

    req.on('end', () => {
      try {
        const parsedBody = JSON.parse(body)
        resolve(parsedBody)
      } catch (err) {
        reject(`Invalid JSON format: ${err}`)
      }
    })

    req.on('error', err => {
      reject(err)
    })
  })
}