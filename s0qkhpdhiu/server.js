import http from 'node:http'
import {getDataFromDB} from "./database/db.js";

const PORT = 4000

const server = http.createServer(async (req, res) => {

    if (req.url === '/api' && req.method === 'GET') {
       try{
           const dbData = await getDataFromDB();
           const destinations = JSON.stringify(dbData);
           res.writeHead(200, {'Content-Type': 'application/json'});
           res.end(destinations);
       } catch(err) {
           console.error(err);
           res.writeHead(500, { 'Content-Type': 'application/json' });
           res.end(JSON.stringify({ error: 'Internal Server Error' }));
       }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("NOT FOUND");
    }
});

server.listen(PORT, () => console.log(`listening on port ${PORT}`))