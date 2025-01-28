import { Request, Response, NextFunction } from 'express';
import { envConfig } from '../config/env';

export const errorHandler = (
  err: Error, 
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  console.error('Error:', err.stack);

  res.status(500).json({
    message: 'Something went wrong',
    // Only show error details in development
    error: envConfig.nodeEnv === 'development' ? err.message : {}
  });
};