import "reflect-metadata";
import express, {Request, Response, NextFunction} from 'express';
import "express-async-errors";
import {router} from './routes';
import "./database";

const app = express();

app.use(express.json())

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
        return res.status(400).json({
            success: false,
            message: err.message
        });
    }
    
    return res.status(500).json({
        success: false,
        message: err || "internal server error"
    })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on ${PORT}!`));