import express from "express";
import authController from "../../../../adaptors/controller/authController";
import { userDbRepository } from "../../../../application/repositories/UserDbInterface";
import { userRepositoryMongoDB } from "../../../database/mongodb/repositories/UserRegpositoryMongoDB";
import { authService } from "../../../services/authService";
import { authServiceInterface } from "../../../../application/services/authServiceInterface";

const authRouter = () => {
  const router = express.Router();

  const controller = authController(
    userDbRepository,
    userRepositoryMongoDB,
    authService,
    authServiceInterface
  );

    router.post("/register-patient", controller.registerUser);
    router.post('/login-patient', controller.loginUser);
    router.post('/google/patient', controller.googleLoginUser);
  
    return router;
};

export default authRouter;
