import { AuthServiceReturn } from "../../frameworks/services/authService";

export const authServiceInterface = (service: AuthServiceReturn) => {
  const encryptPassword = (password: string) =>
    service.encryptPassword(password);

  const generateToken = (payload: string) => service.generateToken(payload);

  return {
      encryptPassword,
      generateToken,
  };
};

export type AuthServiceInterface = typeof authServiceInterface;
