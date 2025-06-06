import HandlerError from "../utils/handler";
import handleCORS from "./cors";
import handleFacts from "./fact";

/**
 * 
 * @param {Request} req 
 * @returns {Promise<Response>}
 */
export default async function main(req) {
    const handlers = [ handleCORS, handleFacts ]

    for (let i = 0; i < handlers.length; i++) {
        const handler = handlers[i];
        
        try {
            const handlerResult = await handler(req)

            if(handlerResult !== null) {
                return handlerResult
            }
        } catch (error) {
            if(error instanceof HandlerError) {
                return error.toResponse()
            }

            return new Response("Internal Server Error", { status: 500 })
        }
    }

    return new Response("Reached End Of Handler Queue Without A Response (Not Found)", { status: 404 })
}