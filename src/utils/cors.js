/**
 * 
 * @param {Response} res 
 * @returns {Response}
 */
export default function addCORSToResponse(res){
    const newResponse = res

    newResponse.headers.append("Access-Control-Allow-Headers", "*")
    newResponse.headers.append("Access-Control-Allow-Origin", "*")
    newResponse.headers.append("Access-Control-Allow-Methods", "*")

    return newResponse
}