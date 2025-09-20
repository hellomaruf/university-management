import dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL,
  BCRYPT_SOLT_ROUND: process.env.BCRYPT_SOLT_ROUND,
};

export default config;
