import { UserRepositoryMongoDB } from "../../frameworks/database/mongodb/repositories/UserRegpositoryMongoDB";


export const userDbRepository = (repository: ReturnType<UserRepositoryMongoDB>) => {

    const addUser = async (user: { name: string, email: string, password?: string }) => await repository.addUser(user);

    const getUserByEmail = async (email: string) => await repository.getUserByEmail(email);

    const addGoogleVerifiedUser = async (user: { name: string, email: string, email_verified: boolean, picture: string }) => await repository.addGoogleVerifiedUser(user);

    return {
        addUser,
        getUserByEmail,
        addGoogleVerifiedUser,
    }
}

export type UserDbInterface = typeof userDbRepository;