import express from 'express';
import userController from '../../../../adaptors/controller/userController';
import { userDbRepository } from '../../../../application/repositories/UserDbInterface';
import { userRepositoryMongoDB } from '../../../database/mongodb/repositories/UserRegpositoryMongoDB';

const userRouter = () => {
    const router = express.Router();

    const controller = userController(
      userDbRepository,
      userRepositoryMongoDB
    );

  router.get('/get-user-by-id', controller.getUserById);
  
  return router;
}

export default userRouter;