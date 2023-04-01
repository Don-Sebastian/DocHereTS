import { Request, Response } from "express";
import asyncHandler from "express-async-handler";


const authController = () => {

    const registerUser = asyncHandler (async (req: Request, res: Response) => {
        const user: { name: String, email: string, password: string } = req.body;
        const token = await userRegister(user, dbRepositoryUser, authService);
        res.status(200).json({});
    })

};

export default authController;