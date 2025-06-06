export default class HandlerError {
    /**
     * @type {Number}
     */
    status;

    /**
     * @type {String}
     */
    message;

    /**
     * 
     * @param {Number} status 
     * @param {String} message 
     */
    constructor (status, message)  {
        this.status = status
        this.message = message
    }

    toResponse () {
        return new Response(this.message, { status: this.status })
    }
}