
class ErrorResponse extends Error {
    message: string;
    statusCode: number;

    constructor(message: string, statusCode: number)
    {
        super(message)
        this.statusCode = statusCode
    }
}

export { ErrorResponse }