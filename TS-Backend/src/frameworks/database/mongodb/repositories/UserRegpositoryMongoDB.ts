import { UserInterface } from "../../../../types/userInterface";
import User from "../models/userModel";


export const userRepositoryMongoDB = () => {
    const addUser = async (user: {
        name: string,
        email: string,
        password?: string,
    }) => await User.create(user);

    const getUserByEmail = async (email: string) => {
        const user: UserInterface | null = await User.findOne({ email });
        return user;
    }

    return {
        addUser,
        getUserByEmail,
    }
};

export type UserRepositoryMongoDB = typeof userRepositoryMongoDB;