import { NextFunction, Request, Response } from "express";
import AppError from "../../../utils/appError";
import { HttpStatus } from "../../../types/httpStatus";
import { authService } from "../../services/authService";

const userAuthMiddleware = async(req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new AppError('Token not found! Please login again.', HttpStatus.UNAUTHORIZED);
    try {
        const {payload}: any = await authService().verifyToken(token);
        (req as any).userId = payload;
        next();
    } catch (err) {
        throw new AppError('UnAuthorized User', HttpStatus.UNAUTHORIZED)
    }
}

export default userAuthMiddleware;