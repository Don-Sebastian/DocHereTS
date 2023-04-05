import { Application } from "express";
import authRouter from "./router/authRouter";
import userRouter from "./router/userRouter";
import userAuthMiddleware from "../middlewares/userAuthMiddleware";

const routes = (app: Application) => {
    app.use('/api/v1/auth', authRouter());
    app.use('/api/v1/user', userAuthMiddleware, userRouter());
    // app.use('/api/user', useAuthMiddleware, userRouter);
}

export default routes;