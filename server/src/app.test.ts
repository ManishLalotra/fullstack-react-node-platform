import request from 'supertest';
import { app } from './app';

describe('Health Checks', () => {
  it('GET /api/v1/health should return 200 and healthy status', async () => {
    const res = await request(app).get('/api/v1/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('healthy');
    expect(res.body.service).toBe('fullstack-react-node-platform-api');
  });

  it('GET /api/v1/ready should return 200 ready', async () => {
    const res = await request(app).get('/api/v1/ready');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ready');
  });
});
