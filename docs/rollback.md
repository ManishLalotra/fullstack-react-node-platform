# Rollback Procedure

In case of a faulty release:

1. Identify the previous stable Git commit or Docker image tag.
2. Revert to previous release:
   ```bash
   git checkout <PREVIOUS_STABLE_COMMIT_HASH>
   docker compose up -d --build
   ```
3. Verify API health endpoint:
   ```bash
   curl -f http://localhost:5000/api/v1/health || echo "Health check failed!"
   ```
4. Check error logs:
   ```bash
   docker compose logs --tail=100 api
   ```
