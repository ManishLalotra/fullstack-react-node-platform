import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';

export const analyticsRouter = Router();

analyticsRouter.get('/dashboard-metrics', authenticate, (req, res) => {
  res.json({
    summary: {
      totalUsers: 1420,
      activeProjects: 38,
      systemUptime: '99.98%',
      apiRequestsLast24h: 342100
    },
    performanceMetrics: [
      { timestamp: '00:00', latencyMs: 42, cpuLoad: 24 },
      { timestamp: '04:00', latencyMs: 38, cpuLoad: 21 },
      { timestamp: '08:00', latencyMs: 65, cpuLoad: 48 },
      { timestamp: '12:00', latencyMs: 78, cpuLoad: 58 },
      { timestamp: '16:00', latencyMs: 71, cpuLoad: 52 },
      { timestamp: '20:00', latencyMs: 49, cpuLoad: 31 }
    ]
  });
});
