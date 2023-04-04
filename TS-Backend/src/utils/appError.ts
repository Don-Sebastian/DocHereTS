import { HttpStatus } from "../types/httpStatus";

class AppError extends Error{
    statusCode: number | undefined;
    status: string | undefined;
    isOperational: boolean | undefined;
    constructor(message: string, statusCode: HttpStatus) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;