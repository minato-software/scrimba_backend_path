import http from 'node:http'
import {getDataFromDB} from "./database/db.js";
import { sendJSON } from "./utils/utils.js";
import { destinationFilter } from "./utils/utils.js";

const PORT = 4000

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB();

    const urlObj = new URL(req.url, `http://${req.headers.host}`);

    const queryObj = Object.fromEntries(urlObj.searchParams);



    if (urlObj.pathname === '/api' && req.method === 'GET') {
        //let filteredDestinations = destinations;

        console.log(queryObj);
        // update filteredDestinations

        sendJSON(res, 200, destinations)

    } else if (req.url.startsWith('/api/continent/') && req.method === 'GET') {
        const continent = req.url.split('/').pop();
        const filteredDestinations = destinationFilter(destinations, 'continent', continent);
        sendJSON(res, 200, filteredDestinations);

    } else if (req.url.startsWith('/api/country/') && req.method === 'GET') {
        const country = req.url.split('/').pop();
        const filteredDestinations = destinationFilter(destinations, 'country', country);
        sendJSON(res, 200, filteredDestinations)
    } else {

        sendJSON(res, 404, {
            error: 'not found',
            message: 'The requested route does not exist'
        })
    }
});

server.listen(PORT, () => console.log(`Connected on port ${PORT}`))