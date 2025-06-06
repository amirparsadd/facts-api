import addCORSToResponse from "../utils/cors";

/**
 * Handler for CORS
 * 
 * @param {Request} req 
 * @returns {Promise<Response | null>}
 */
export default async function handleCORS(req){
    if (req.method !== "OPTIONS") return null

    return new Response("OK");
}