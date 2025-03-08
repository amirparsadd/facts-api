import { getRandomFact } from "./utils/fact";

addEventListener("fetch", (event) => {
	event.respondWith(handleRequest(event.request))
});

async function handleRequest(){
	return new Response(await getRandomFact())
}