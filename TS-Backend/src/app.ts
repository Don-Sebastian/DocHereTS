import express, { Application, Request, Response } from "express";
import http from 'http';
import connectDB from './frameworks/database/mongodb/connection';
import expressConfig from "./frameworks/webserver/express";
import Colors = require("colors.ts");
Colors.enable

const app: Application = express();
const server = http.createServer(http);

connectDB();

// const redisClient = connection().createRedisClient();

expressConfig(app);

routes(app)

const port = process.env.BACKEND_PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});