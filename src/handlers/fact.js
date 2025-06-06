import { getRandomFact } from "../utils/fact"
import { log } from "../utils/logger"

/**
 * Handler for sending the facts
 * 
 * @param {Request} req 
 * @returns {Promise<Response | null>}
 */
export default async function handleFacts(req){
    if(req.method !== "GET" || new URL(req.url).pathname !== "/") return null

    return new Response(await getRandomFact())
}