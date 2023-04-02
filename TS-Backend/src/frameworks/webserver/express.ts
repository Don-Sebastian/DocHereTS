import express, { Application, NextFunction, Request, Response } from "express";
import morgan = require('morgan');
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import configKeys from "../../config";

const expressConfig = (app: Application) => {
    if (configKeys.nodeDevelopmentEnv === 'development') {
        app.use(morgan('dev'));
    }

    const corsConfig = {
      credentials: true,
      origin: [`${configKeys.frontendPort}`],
      method: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    };
    
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

    app.use(cors(corsConfig));
    app.use(express.json());
    app.use(cookieParser());
    app.use(bodyParser.json())
    app.use(express.urlencoded({ extended: true }));

}

export default expressConfig;