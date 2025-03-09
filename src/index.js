import { getRandomFact } from "./utils/fact";
import { log } from "./utils/logger";

addEventListener("fetch", (event) => {
	event.respondWith(handleRequest(event.request))
});

async function handleRequest(){
	try {
		return new Response(await getRandomFact())
	} catch (error) {
		log("ERROR", "request-handler-exception", "An error occured while handling a request", {
			error: JSON.stringify(error)
		})

		return new Response("An Error Occured!", { status: 500 })
	}
}