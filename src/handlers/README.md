# Handlers
Handlers may either send a response to the request or return null, letting the main handler know to pass the request to the next handler. Handlers may also throw an error of type `HandlerError` to let the main thread know to send a response with an error structure.

## Main Handler
The main handler recieves a request and must return a response. The main handler generates a list of handlers based on the request and executes them.