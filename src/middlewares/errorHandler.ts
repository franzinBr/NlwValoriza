import { Request, Response, NextFunction } from 'express';
import { ErrorResponse } from '../utils/ErrorResponse';


export function errorHandler(err: ErrorResponse ,req: Request, res: Response, next: NextFunction){
    const error = err;
        
    return res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || "Internal server error"
    })
}