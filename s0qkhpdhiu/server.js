import http from 'node:http'
import {getDataFromDB} from "./database/db.js";
import { sendJSON } from "./utils/utils.js";

const PORT = 4000

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB();

    if (req.url === '/api' && req.method === 'GET') {
        sendJSON(res, 200, destinations)

    } else if (req.url.startsWith('/api/continent/') && req.method === 'GET') {
        const continentName = req.url.split('/').pop();
        const filteredDestinations = destinations.filter((destination) => {
            return destination.continent.toLowerCase() === continentName.toLowerCase();
        })

        sendJSON(res, 200, filteredDestinations)

    } else {

        sendJSON(res, 404, {
            error: 'not found',
            message: 'The requested route does not exist'
        })
    }
});

server.listen(PORT, () => console.log(`Connected on port ${PORT}`))