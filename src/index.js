import main from "./handlers/main";
import addCORSToResponse from "./utils/cors";

addEventListener("fetch", (_event) => {
	/**
	 * @type {import("@cloudflare/workers-types").FetchEvent}
	 */
	const event = _event

	event.respondWith(handleRequest(event.request))
});

/**
 * 
 * @param {Request} req 
 * @returns {Promise<Response>}
 */
async function handleRequest(req){
	return addCORSToResponse(await main(req))
}