# Troubleshooting Guide

### Common Issues

1. **Port conflict on port 5000 or 3000**
   Check for running processes:
   ```bash
   lsof -i :5000
   lsof -i :3000
   ```

2. **Database connection timeout**
   Ensure PostgreSQL container is healthy:
   ```bash
   docker compose logs postgres
   ```

3. **CORS errors in browser**
   Verify `CORS_ORIGIN` in `.env` matches the client's origin exact protocol and port.
