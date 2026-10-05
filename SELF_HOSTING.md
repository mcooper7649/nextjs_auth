# Self-hosting

Live at **https://modern-auth.mycodedojo.com**, self-hosted on Michael's homelab (moved off Netlify/Vercel in October 2026).

It runs as a container in the `portfolio-projects` Docker Compose stack on the homelab (`~/portfolio-projects`, visible in Portainer), behind Caddy.

**Redeploy after pushing to `main`:**

```bash
ssh mcooper@192.168.68.75 '~/portfolio-projects/deploy.sh modern-auth'
```

**Run locally:**

```bash
docker build -t modern-auth .
docker run -p 3000:3000 modern-auth
```

## Configuration

- **Database:** self-hosted MongoDB (`portfolio-mongo` container), set with `MONGODB_URI` (default `mongodb://portfolio-mongo:27017/nextAuth`). This replaces the old MongoDB Atlas cluster.
- **Env:** `MONGODB_URI`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`.
- **Demo login:** `demo@mycodedojo.com` / `demo-password` (visitors can also sign up).
