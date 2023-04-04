import asyncHandler from "express-async-handler";
import { UserDbInterface } from "../../application/repositories/UserDbInterface";
import { UserRepositoryMongoDB } from "../../frameworks/database/mongodb/repositories/UserRegpositoryMongoDB";
import { Request, Response } from "express";

const userController = (
    userDbRepository: UserDbInterface,
    userDbRepositoryImpl: UserRepositoryMongoDB,
) => {
    const dbRepositoryUser = userDbRepository(userDbRepositoryImpl());
    
    const getUserById = asyncHandler(async (req: Request, res: Response) => {
        const user = req.body;
    });

    return {
        getUserById,
    }
}

export default userController;