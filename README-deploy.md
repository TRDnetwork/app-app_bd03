# Deploy: Launch Page

## Deploy to Vercel
1. Push code to a GitHub repository
2. Log in to Vercel.com and click "New Project"
3. Import the repository
4. Use default settings:
   - Framework: Auto-detected (Vite)
   - Root directory: /
   - Build command: `vite build`
   - Output directory: `dist`
5. Click "Deploy"

## Environment Variables
None required. This is a fully static site with client-side email capture (logs to console only).

## First-time setup
None required. No database, authentication, or external services are used.