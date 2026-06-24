# Wameir — Marketing Site

Single-page static site served by a tiny Express server (so it runs on Railway).

## Structure
- `public/index.html` — the entire site (self-contained: HTML, CSS, JS inline)
- `server.js` — minimal Express static server, listens on `process.env.PORT`
- `railway.json` — Railway deploy config

## Run locally
```bash
npm install
npm start
# open http://localhost:3000
```

## Edit & iterate
Edit `public/index.html`, commit, and push. Railway redeploys automatically
on every push to the connected branch.

## Deploy (first time)
1. Push this repo to GitHub.
2. In Railway: New Project → Deploy from GitHub repo → pick this repo.
3. Railway auto-detects Node, runs `npm install`, then `npm start`.
4. Settings → Networking → Generate Domain (test URL), then add your
   custom domain and point Namecheap DNS at the target Railway gives you.
