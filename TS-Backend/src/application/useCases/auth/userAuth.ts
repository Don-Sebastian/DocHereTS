import { HttpStatus } from "../../../types/httpStatus";
import { UserInterface } from "../../../types/userInterface";
import AppError from "../../../utils/appError";
import { UserDbInterface } from "../../repositories/UserDbInterface";
import { AuthServiceInterface } from "../../services/authServiceInterface";

export const userRegister = async(
    user: { name: string, email: string, password: string },
    userRepository: ReturnType<UserDbInterface>,
    authService: ReturnType<AuthServiceInterface>
) => {
    user.email = user.email.toLowerCase();
    const isExistingEmail: UserInterface | null = await userRepository.getUserByEmail(user.email);
    if (isExistingEmail) throw new AppError("This email already exisit", HttpStatus.UNAUTHORIZED);
    user.password = await authService.encryptPassword(user.password);
    const { _id: userId } = await userRepository.addUser(user);
    const token = authService.generateToken(userId.toString());
    return token;
}

export const userLogin = async(
    user: { email: string, password: string },
    userRepository: ReturnType<UserDbInterface>,
    authService: ReturnType<AuthServiceInterface>,
) => {
    const userDetails: UserInterface | null = await userRepository.getUserByEmail(user.email);
    if (!userDetails) throw new AppError('This user does not exist', HttpStatus.UNAUTHORIZED);
    if (userDetails.google_verified) throw new AppError('You have logged in using Google Auth', HttpStatus.UNAUTHORIZED);
    const isPasswordCorrect = await authService.comparePassword(user.password, userDetails.password);
    if (!isPasswordCorrect) throw new AppError('Sorry, your password is incorrect', HttpStatus.UNAUTHORIZED);
    const token = await authService.generateToken(userDetails._id.toString());
    return token;
};

export const userGoogleLogin = async(
    user: { name: string, email: string, email_verified: boolean, picture: string },
    userRepository: ReturnType<UserDbInterface>,
    authService: ReturnType<AuthServiceInterface>,
) => {
    const { _id: userId } = await userRepository.addGoogleVerifiedUser(user);
    const token = authService.generateToken(userId.toString());
    return token;
};