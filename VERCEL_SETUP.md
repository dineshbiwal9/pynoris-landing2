# Vercel Deployment Setup

## ✅ Project is now Vercel-compatible!

### What was changed:

1. **Server Refactoring** (`server/index.ts`):
   - Refactored to export `createApp()` function instead of immediately starting server
   - Server only starts listening if not in Vercel environment
   - Works both locally and on Vercel

2. **Static File Serving** (`server/static.ts`):
   - Detects Vercel environment and skips static file serving (Vercel handles this)
   - Works correctly for local development

3. **Vercel API Handler** (`api/index.ts`):
   - Created serverless function wrapper for Express app
   - Handles all API routes through Express

4. **Vercel Configuration** (`vercel.json`):
   - Proper routing configuration
   - Static files served from `dist/public`
   - API routes handled by serverless function
   - Cache headers for static assets

5. **Build Configuration**:
   - Build command: `npm run build`
   - Output directory: `dist/public`
   - Node.js version: 20.x (via `.nvmrc` and `package.json` engines)

### Deployment Steps:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Make project Vercel-compatible"
   git push origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect settings from `vercel.json`
   - Click "Deploy"

3. **Environment Variables** (if needed):
   - Go to Project Settings → Environment Variables
   - Add any required variables (e.g., `DATABASE_URL`, etc.)

### How it works:

- **Static Files**: Served directly by Vercel's CDN from `dist/public`
- **API Routes**: Handled by serverless function in `api/index.ts` which uses Express
- **SPA Routing**: All non-API routes serve `index.html` for client-side routing

### Local Development:

```bash
# Development mode (with Vite HMR)
npm run dev

# Production build and start
npm run build
npm run start
```

### Troubleshooting:

- **Build fails**: Check Node.js version (should be 20.x)
- **API not working**: Verify `api/index.ts` is properly configured
- **Static files not loading**: Check `dist/public` exists after build
- **Routes not working**: Verify `vercel.json` rewrites are correct

