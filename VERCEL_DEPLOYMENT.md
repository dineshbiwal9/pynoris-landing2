# Vercel Deployment Guide

## Issues Fixed

1. **Slow Build Times**: Optimized build script with better logging and error handling
2. **Missing Configuration**: Added `vercel.json` with proper settings
3. **Node.js Version**: Added `.nvmrc` to specify Node.js 20
4. **Build Optimization**: Removed Replit-specific plugins in production
5. **Cache Optimization**: Added `.vercelignore` to exclude unnecessary files

## Quick Deploy Commands

### Option 1: Deploy via Vercel CLI (Recommended)
```bash
# Install Vercel CLI globally (if not installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Option 2: Deploy via Git Integration
1. Push your code to GitHub/GitLab/Bitbucket
2. Import project in Vercel dashboard
3. Vercel will auto-detect settings from `vercel.json`

### Option 3: Deploy Frontend Only (Faster)
If you only need the landing page:
```bash
# Build only the frontend
npm run build

# Deploy the dist/public folder
vercel dist/public --prod
```

## Environment Variables

Set these in Vercel Dashboard → Settings → Environment Variables:

- `NODE_ENV=production`
- `DATABASE_URL` (if using database)
- Any other required environment variables

## Build Optimization Tips

1. **Use npm ci instead of npm install** (already configured)
2. **Enable build cache** in Vercel settings
3. **Use Vercel's Edge Network** for static assets
4. **Monitor build logs** for any warnings

## Troubleshooting

### Build Timeout
- Increase build timeout in Vercel project settings
- Optimize dependencies (remove unused packages)

### Build Fails
- Check Node.js version (should be 20.x)
- Verify all dependencies are in package.json
- Check build logs in Vercel dashboard

### Slow Deployments
- Enable Vercel's build cache
- Use `npm ci` instead of `npm install`
- Remove unnecessary files with `.vercelignore`

## Files Created/Modified

- `vercel.json` - Vercel configuration
- `.vercelignore` - Files to exclude from deployment
- `.nvmrc` - Node.js version specification
- `vite.config.ts` - Optimized for production
- `script/build.ts` - Enhanced with better logging
- `package.json` - Added `vercel-build` script

