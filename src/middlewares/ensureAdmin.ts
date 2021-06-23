import {Request, Response, NextFunction} from "express";


export function ensureAdmin(req: Request, res: Response, next: NextFunction ) {
    // Verify if users is admin
    const admin = true;
    if(admin) return next();

    return res.status(401).json({
        success: false,
        message: "Unauthorized"
    });
}