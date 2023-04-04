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

    const addGoogleVerifiedUser = async ({ name, email, email_verified, picture }: { name: string, email: string, email_verified: boolean, picture: string }) =>
        await User.findOneAndUpdate({ email }, {
            name,
            email,
            avatar: picture,
            provider: 'Google',
            google_verified: email_verified,
    }, {
        upsert: true, runValidators: false, new: true, lean: true,
    })

    return {
        addUser,
        getUserByEmail,
        addGoogleVerifiedUser,
    }
};

export type UserRepositoryMongoDB = typeof userRepositoryMongoDB;