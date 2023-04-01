import express from 'express';
import authController from '../../../../adaptors/controller/authController';

const authRouter = () => {
    const router = express.Router();

    const controller = authController();

    router.post('/register', controller.registerUser);
}