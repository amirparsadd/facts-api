import { AI_MODEL, AI_PROMPT, API_ENDPOINT } from "../config";
import topics from "../topics";
import { getRandomItem } from "./array";
import { log } from "./logger";

/**
 * Generates a random fact using AI
 * 
 * @returns {String | null}
 */
export async function getRandomFact(){
	try {
		const fact = await (await fetch(API_ENDPOINT + "v1/chat/completions", {
			method: "POST",
			headers: {
				"Authorization": `Bearer ${process.env.API_SECRET}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				model: AI_MODEL,
				messages: [
					{
						role: "system",
						content: AI_PROMPT
					},
					{
						role: "user",
						content: `A fact about ${getRandomItem(topics)} in persian`
					}
				]
			})
		})).json();
		
		const res = fact.choices[0].message.content

		log("INFO", "fact-generator-info", "Generated fact! | " + res)

		return res
	} catch (error) {
		return null
	}
}