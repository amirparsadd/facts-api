/**
 * Logs a message to the console
 * 
 * @param {"INFO" | "ERROR"} level 
 * @param {String} type 
 * @param {String} message 
 * @param {Record<String, String>} additional
 */
export function log(level = "INFO", type, message, additional){
	if(
		!type ||
		!message ||
		!level
	) throw new Error("Invalid data passed to logger function")

	console.log({
		level,
		type,
		message,
		...additional
	})
}