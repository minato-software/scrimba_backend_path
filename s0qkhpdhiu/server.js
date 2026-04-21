import http from 'node:http'
import {getDataFromDB} from "./database/db.js";

const PORT = 4000

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB();
    if (req.url === '/api' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(destinations))
    } else if (req.url.startsWith('/api/continent/') && req.method === 'GET') {
        const urlParts = req.url.split('/');
        const continentName  = urlParts.pop();
        const filteredDestinations = destinations.filter((destination) => {
            return destination.continent.toLowerCase() === continentName.toLowerCase();
        })
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(filteredDestinations));
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        const errorResponse = {
            error: 'not found',

            message: 'The requested route does not exist'
        };
        res.end(JSON.stringify(errorResponse));
    }
});

server.listen(PORT, () => console.log(`Connected on port ${PORT}`))