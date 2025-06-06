// The endpoint used for getting completions. Must follow the OPENAI API's format
export const API_ENDPOINT = "https://api.avalai.ir/"

// The AI model. Must support chat completions.
export const AI_MODEL = "gemini-2.0-flash-lite"

// The base system prompt
export const AI_PROMPT = 
    `Generate an interesting and fun fact in the language defined by the user.
    The fact should be accurate, engaging, short, complete, and suitable for the specified audience.
    You may use emojis in your response but do not overuse it. 
    Your response should only contain the fact and nothing else, it should not contain a translation, prefix, introduction nor any markdown.`