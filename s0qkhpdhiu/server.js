import http from 'node:http'

const PORT = 4000

const server = http.createServer((req, res) => {
    if (req.url === '/api' && req.method === 'GET') {

        res.end('This is from the server.')

    }
})

server.listen(PORT, () => console.log(`listening on port ${PORT}`))