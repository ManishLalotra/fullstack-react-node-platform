import { Router } from 'express';

export const healthRouter = Router();

healthRouter.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: '1.0.0',
    service: 'fullstack-react-node-platform-api'
  });
});

healthRouter.get('/ready', (req, res) => {
  // In production check DB and Redis connections
  res.status(200).json({ status: 'ready' });
});
