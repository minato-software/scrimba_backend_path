import { getData } from '../utils/getData.js'
import { sendResponse } from '../utils/sendResponse.js'
import {parseJSONBody} from "../utils/parseJSONBody.js";


export async function handleGet(res) {
  const data = await getData()
  const content = JSON.stringify(data)
  sendResponse(res, 200, 'application/json', content)
}  

export async function handlePost(req) {
  const parsedBody = await parseJSONBody(req)

} 

// santizeData() 
// addNewSighting() will do the donkey work of adding the data to our dataset
// sendResponse()


