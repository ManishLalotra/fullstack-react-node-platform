import dotenv from 'dotenv';
dotenv.config();
import { app } from './app.js';
import { logger } from './config/logger.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
