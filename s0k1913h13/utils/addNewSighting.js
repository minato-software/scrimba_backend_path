import {getData} from "./getData.js";
import fs from 'node:fs/promises';

export async function addNewSighting(newSighting) {
  try {
    const sightings = await getData()

    sightings.push(newSighting)
    const pathJSON = path.join('data', 'data.json')

    await fs.writeFile(
         pathJSON,
        JSON.stringify(sightings, null, 2),
        'utf8')

  } catch (err) {
    throw new Error(`Failed to save new sighting: ${err}`)
  }
}
