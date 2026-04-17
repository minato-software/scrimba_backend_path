import http from 'node:http'

const PORT = 3000

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.end('This is from the server.', 'utf8', ()=>console.log('response end'))
    }
    else {
        res.end()
    }
})

server.listen(PORT, () => console.log(`listening on port ${PORT}`))