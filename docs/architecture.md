# Architecture Documentation

## System Topology

```mermaid
graph TD
    Client[Browser / React SPA Client] -->|HTTPS :443| Nginx[Nginx Reverse Proxy / SSL]
    Nginx -->|Proxy :3000| Web[React Static Assets Container]
    Nginx -->|Proxy :5000 /api| Node[Express API Backend Container]
    Node -->|SQL Pool :5432| Postgres[(PostgreSQL 16 Database)]
    Node -->|Cache :6379| Redis[(Redis 7 In-Memory Cache)]
    Prometheus[Prometheus Metrics Scraper] -.->|Scrape /metrics| Node
```

## Security Controls
- **Helmet.js**: Injects strict HTTP response security headers (CSP, HSTS, X-Frame-Options).
- **CORS**: Restricts API calls to approved origins only.
- **Rate Limiting**: Protects against brute-force attacks on authentication endpoints.
- **Non-Root Containers**: Node and Nginx run as unprivileged system users inside containers.
