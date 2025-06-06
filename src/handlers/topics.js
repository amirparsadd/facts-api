import topics from "../topics"

/**
 * Handler for sending the facts
 * 
 * @param {Request} req 
 * @returns {Promise<Response | null>}
 */
export default async function handleTopicsFetching(req){
    if(req.method !== "GET" || new URL(req.url).pathname !== "/topics") return null

    const responseBody = {
        data: topics
    }

    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    return new Response(JSON.stringify(responseBody), { headers })
}