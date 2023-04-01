import { Application } from "express";

const routes = (app: Application) => {
    app.use('/api/v1/auth', authRouter());
    // app.use('/api/user', useAuthMiddleware, userRouter);
}