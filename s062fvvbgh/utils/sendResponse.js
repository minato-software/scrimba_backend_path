export function sendResponse(res, statusCode, contentType, payload) {

    res.statusCode = statusCode
    res.setHeader('Content-type', contentType)
    res.end(payload)
}


