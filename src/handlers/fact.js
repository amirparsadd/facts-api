import { languages } from "../languages"
import topics from "../topics"
import { getRandomFact } from "../utils/fact"
import HandlerError from "../utils/handler"
import { log } from "../utils/logger"

/**
 * Handler for sending the facts
 * 
 * @param {Request} req 
 * @returns {Promise<Response | null>}
 */
export default async function handleFacts(req){
    const url = new URL(req.url)

    if(req.method !== "GET" || url.pathname !== "/") return null

    const selectedTopic = url.searchParams.get("topic") ?? undefined
    if(selectedTopic && !topics.includes(selectedTopic)) {
        throw new HandlerError(400, "Invalid Topic! Topics Are Case Sensitive")
    }

    const selectedLanguage = url.searchParams.get("language") ?? undefined
    if(selectedLanguage && !languages.includes(selectedLanguage)) {
        throw new HandlerError(400, "Invalid Language! Languages Are Case Sensitive")
    }

    return new Response(await getRandomFact(selectedTopic, selectedLanguage))
}