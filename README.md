# Full Stack Shop Website (Ready-to-upload)

This repository contains a simple full-stack e-commerce scaffold:
- Backend: Node/Express + SQLite (products, orders)
- Frontend: React app (shop, cart, checkout, admin login)
- Docker: docker-compose to run both services

## Quick start (Docker)
1. Copy `backend/.env.example` to `backend/.env` and fill secrets (ADMIN_PASS, STRIPE keys).
2. Put your logo at `frontend/public/logo.png` and `backend/public/logo.png` (optional).
3. Run:
```
docker-compose up --build
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:4000

## Local dev (no Docker)
- Backend: `cd backend && npm install && node server.js`
- Frontend: `cd frontend && npm install && npm start`

## Notes
- Admin login: POST /api/admin/login with JSON {username, password} returns JWT token.
- Protect admin endpoints by sending Authorization: Bearer <token> header.
- Stripe: Replace STRIPE_SECRET_KEY in backend .env to use Stripe test mode.
- bKash: bKash flow included as a sandbox/mock endpoint for testing only.

Enjoy!