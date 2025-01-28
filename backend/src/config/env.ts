import dotenv from 'dotenv';

dotenv.config();

export const envConfig={
    mongoUri: process.env.MONGODB_URI || '',
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
    jwtSecret: process.env.JWT_SECRET || 'fallback_secret_key',
    nodeEnv: process.env.NODE_ENV ||'develoment'

}