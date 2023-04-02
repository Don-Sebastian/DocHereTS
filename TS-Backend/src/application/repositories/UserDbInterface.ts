import { UserRepositoryMongoDB } from "../../frameworks/database/mongodb/repositories/UserRegpositoryMongoDB";


export const userDbRepository = (repository: ReturnType<UserRepositoryMongoDB>) => {

    const addUser = async (user: { name: string, email: string, password?: string }) => await repository.addUser(user);

    const getUserByEmail = async (email: string) => await repository.getUserByEmail(email);

    return {
        addUser,
        getUserByEmail,
    }
}

export type UserDbInterface = typeof userDbRepository;