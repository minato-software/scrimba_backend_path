import sanitizeHtml from 'sanitize-html'

export function sanitizeInput(incomingData) {
    const sanitizedData = {}

    for (const [key, value] of Object.entries(incomingData)) {
        if (typeof value === 'string') {
            sanitizedData[key] = sanitizeHtml(value, {
                allowedTags: ['b'],
                allowedAttributes: {}
            })
        } else {
            sanitizedObj[key] = value
        }
    }
    return sanitizedObj
}