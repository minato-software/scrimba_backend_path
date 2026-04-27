// handleGet
import {getData} from "../utils/getData.js";
import {sendResponse} from "../utils/sendResponse.js";

export async function handleGet(req, res) {
    try {
        const data = await getData()
        const jsonString = JSON.stringify(data)

        sendResponse(res, 200, 'application/json',jsonString)
    } catch (err) {
        console.log(err)
        sendResponse(res, 500, 'text/plain', 'Internal Server Error')
    }
}
