import { Application } from "express";
import authRouter from "./router/authRouter";

const routes = (app: Application) => {
    app.use('/api/v1/auth', authRouter());
    // app.use('/api/user', useAuthMiddleware, userRouter);
}

export default routes;