import { HttpStatus } from "../../../types/httpStatus";
import AppError from "../../../utils/appError";
import { UserDbInterface } from "../../repositories/UserDbInterface";
import { AuthServiceInterface } from "../../services/authServiceInterface";

export const userRegister = async(
    user: { name: string, email: string, password: string },
    userRepository: ReturnType<UserDbInterface>,
    authService: ReturnType<AuthServiceInterface>
) => {
    user.email = user.email.toLowerCase();
    const isExistingEmail = await userRepository.getUserByEmail(user.email);
    if (isExistingEmail) throw new AppError("This email already exisit", HttpStatus.UNAUTHORIZED);
    user.password = await authService.encryptPassword(user.password);
    const { _id: userId } = await userRepository.addUser(user);
    const token = authService.generateToken(userId.toString());
    return token;
}