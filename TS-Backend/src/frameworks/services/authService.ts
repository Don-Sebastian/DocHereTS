import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import configKeys from '../../config';

export const authService = () => {
    const encryptPassword = async (password: string) => {

        const salt = await bcrypt.genSaltSync(10);
        password = await bcrypt.hashSync(password, salt);
        return password;
    }

    const generateToken = (payload: string) => {
        const token = jwt.sign({ payload }, configKeys.jwtSecret, {
            expiresIn: '2d',
        })
        return token;
    };

    return {
        encryptPassword,
        generateToken,
    }
}

export type AuthService = typeof authService;

export type AuthServiceReturn = ReturnType<AuthService>;