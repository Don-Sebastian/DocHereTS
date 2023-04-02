import dotenv from 'dotenv';

dotenv.config();;

const configKeys = {
  mongoDbUrl: process.env.MONGODB_URL as string,

  port: process.env.PORT || 5000,

  frontendPort: process.env.FRONTEND_PORT as string,

  nodeDevelopmentEnv: "development",

  jwtSecret: process.env.JWT_SECRET_KEY as string,
};

export default configKeys;