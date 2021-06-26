require('dotenv').config()
import "reflect-metadata";
import express, {Request, Response, NextFunction} from 'express';
import "express-async-errors";
import {router} from './routes';
import "./database";
import cors from 'cors';
const cookieParser = require('cookie-parser');
import { errorHandler } from "./middlewares/errorHandler";
import morgan from 'morgan';
import helmet from 'helmet';


const app = express();

app.use(express.json());
app.use(morgan("common"));
app.use(
    helmet({
      contentSecurityPolicy: false,
    }),
  );
app.use(cors({ origin: process.env.FRONT_URL, credentials: true }));
app.use(cookieParser());
app.use(router);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}!`));