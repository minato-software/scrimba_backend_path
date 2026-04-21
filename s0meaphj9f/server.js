import http from 'node:http'

const PORT = 4000

const server = http.createServer(async (req, res) => {
    const serveString = '<html><h1>The server is working</h1></html>';

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(serveString)
})

server.listen(PORT, () => console.log(`Listening on port ${PORT}`))