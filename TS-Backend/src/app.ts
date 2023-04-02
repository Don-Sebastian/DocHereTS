import express, { Application, NextFunction, Request, Response } from "express";
import http from 'http';
import connectDB from './frameworks/database/mongodb/connection';
import expressConfig from "./frameworks/webserver/express";
import Colors = require("colors.ts");
import routes from "./frameworks/webserver/routes";
import errorHandlingMiddleware from "./frameworks/webserver/middlewares/errorHandlingMiddleware";
import AppError from "./utils/appError";
import serverConfig from "./frameworks/webserver/server";
Colors.enable

const app: Application = express();
const server = http.createServer(app);

connectDB();

// const redisClient = connection().createRedisClient();

expressConfig(app);

routes(app)

app.use(errorHandlingMiddleware)

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError('Not found', 404));
})

serverConfig(server).startServer();

