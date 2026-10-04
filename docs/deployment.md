# Deployment Guide

## Prerequisites
- Ubuntu 22.04 LTS / 24.04 LTS
- Docker 24.0+ & Docker Compose v2
- UFW Firewall with ports 80, 443, and 22 open
- A registered domain name pointed to your server IP

## 1. Traditional VPS / EC2 Deployment
1. Clone the repository into `/opt/applications/fullstack-react-node-platform`.
2. Configure `.env` from `.env.example`.
3. Install dependencies and compile:
   ```bash
   npm install
   npm run build
   ```
4. Set up systemd service unit for the Node backend.
5. Configure Nginx virtual host with SSL via Certbot.

## 2. Docker Compose Deployment (Recommended)
1. Run the stack:
   ```bash
   docker compose up -d --build
   ```
2. Check container status:
   ```bash
   docker compose ps
   ```
3. Test healthcheck:
   ```bash
   curl http://localhost:5000/api/v1/health
   ```
