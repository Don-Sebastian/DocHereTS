import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { userGoogleLogin, userLogin, userRegister } from "../../application/useCases/auth/userAuth";
import { UserDbInterface } from "../../application/repositories/UserDbInterface";
import { UserRepositoryMongoDB } from "../../frameworks/database/mongodb/repositories/UserRegpositoryMongoDB";
import { AuthService } from "../../frameworks/services/authService";
import { AuthServiceInterface } from "../../application/services/authServiceInterface";

const authController = (
  userDbRepository: UserDbInterface,
  userDbRepositoryImpl: UserRepositoryMongoDB,
  authService: AuthService,
  authServiceInterface: AuthServiceInterface
) => {
    
  const dbRepositoryUser = userDbRepository(userDbRepositoryImpl());
  const authServiceImpl = authServiceInterface(authService());

  const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const user: { name: string; email: string; password: string } = req.body;
    const token = await userRegister(user, dbRepositoryUser, authServiceImpl);
            
    res
      .status(200)
      .json({
        status: "success",
        message: "New User Registered Successfully!",
        token,
      });
  });
    
    const loginUser = asyncHandler(async (req: Request, res: Response) => {
        const user: { email: string, password: string } = req.body;
        const token = await userLogin(user, dbRepositoryUser, authServiceImpl);
        res.json({ status: 'success', message: 'User Verified' , token});
    })
  
  const googleLoginUser = asyncHandler(async (req: Request, res: Response) => {
    const user: { name: string, email: string, email_verified: boolean, picture: string } = req.body;
    const token = await userGoogleLogin(user, dbRepositoryUser, authServiceImpl);
    res.json({ status: 'success', message: 'User verified with google', token });
  })
    
    return {
        registerUser,
        loginUser,
        googleLoginUser,
    }
};

export default authController;
