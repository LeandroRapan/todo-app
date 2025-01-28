
import  express  from 'express';
import cors from 'cors';
import { envConfig } from './config/env';
import connectDB from './config/database';
import { errorHandler } from './utils/errorMiddleware';





const app = express();
const PORT = envConfig.port ||3000;

//middles
app.use(cors());
app.use(express.json());
app.use(errorHandler);
//base route
app.checkout('/',(req,res)=>{
    res.send('estamos en vivo!')
})


const startServer = async () => {
    try {
      // Conectar a MongoDB
      await connectDB();
      
      // Iniciar servidor
      app.listen(envConfig.port, () => {
        console.log(`🚀 Server running on port ${envConfig.port}`);
      });
    } catch (error) {
      console.error('Failed to start server:', error);
      process.exit(1);
    }
  };
  startServer();