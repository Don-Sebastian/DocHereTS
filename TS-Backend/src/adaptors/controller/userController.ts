import asyncHandler from "express-async-handler";
import { UserDbInterface } from "../../application/repositories/UserDbInterface";
import { UserRepositoryMongoDB } from "../../frameworks/database/mongodb/repositories/UserRegpositoryMongoDB";
import { Request, Response } from "express";
import { findUserById } from "../../application/useCases/users/findUserById";

const userController = (
    userDbRepository: UserDbInterface,
    userDbRepositoryImpl: UserRepositoryMongoDB,
) => {
    const dbRepositoryUser = userDbRepository(userDbRepositoryImpl());
    
    const getUserById = asyncHandler(async (req: Request, res: Response) => {
        const userId = (req as any).userId;
        const user = await findUserById(userId, dbRepositoryUser);
        res.status(200).json({user, status: 'success'});
    });

    return {
        getUserById,
    }
}

export default userController;