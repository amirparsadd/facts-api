import { languages } from "../languages"

/**
 * Handler for sending the facts
 * 
 * @param {Request} req 
 * @returns {Promise<Response | null>}
 */
export default async function handleLanguagesFetching(req){
    if(req.method !== "GET" || new URL(req.url).pathname !== "/languages") return null

    const responseBody = {
        data: languages
    }

    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    return new Response(JSON.stringify(responseBody), { headers })
}