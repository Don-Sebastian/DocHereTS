import express, { Application } from "express";
import morgan from 'morgan';
import cors from 'cors';
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

    app.use(cors(corsConfig));
    app.use(express.json());
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: true }));

}

export default expressConfig;