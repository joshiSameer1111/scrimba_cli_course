import sanitizeHtml from 'sanitize-html'

export function sanitizeData(data) {
  const sanitized = {}

  for (const key in data) {
    const value = data[key]

    if (typeof value === 'string') {
      sanitized[key] = sanitizeHtml(value, {
        allowedTags: ['b'],
        allowedAttributes: {}
      })
    } else {
      sanitized[key] = value
    }
  }

  return sanitized
}