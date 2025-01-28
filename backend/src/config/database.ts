import mongoose from 'mongoose';
import { envConfig } from './env';

const connectDB = async ()=>{

    try {
        console.log('URI DE MONGO/////////////////////////////////////////////',envConfig.mongoUri)
        await mongoose.connect(envConfig.mongoUri);
        console.log('MondoDB connected')
        
    } catch (error) {
        console.error('MongoDB connection error:', error);
    process.exit(1);
    }
    
}
export default connectDB