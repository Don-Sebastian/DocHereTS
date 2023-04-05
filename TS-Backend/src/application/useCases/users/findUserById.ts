import { HttpStatus } from "../../../types/httpStatus";
import AppError from "../../../utils/appError";
import { UserDbInterface } from "../../repositories/UserDbInterface";

export const findUserById = async(userId: string, dbRepositoryUser: ReturnType<UserDbInterface>) => {
    const user = await dbRepositoryUser.getUserById(userId);
    if (!user) throw new AppError('User not found', HttpStatus.BAD_REQUEST);
    return user;
}