import { getRandomFact } from "./utils/fact";
import { log } from "./utils/logger";

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
 * @returns {Response}
 */
async function handleRequest(req){
	const corsHeaders = new Headers()
	corsHeaders.append("Access-Control-Allow-Headers", "*")
	corsHeaders.append("Access-Control-Allow-Origin", "*")
	corsHeaders.append("Access-Control-Allow-Methods", "*")

	if (req.method === "OPTIONS") {
    return new Response("OK", {
      headers: corsHeaders
    });
  }

	try {
		return new Response(await getRandomFact(), { headers: corsHeaders })
	} catch (error) {
		log("ERROR", "request-handler-exception", "An error occured while handling a request", {
			error: JSON.stringify(error)
		})

		return new Response("An Error Occured!", { status: 500 }, { headers: corsHeaders })
	}
}