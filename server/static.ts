import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // In Vercel, static files are served automatically, so we only handle SPA routing
  if (process.env.VERCEL === "1") {
    // In Vercel, static files are handled by Vercel's CDN
    // Only handle SPA routing for non-API routes
    app.get("*", (req, res, next) => {
      // Skip API routes
      if (req.path.startsWith("/api")) {
        return next();
      }
      // For SPA, Vercel will serve index.html via rewrites
      next();
    });
    return;
  }

  // For local/production server, serve static files
  const distPath = path.resolve(__dirname, "..", "dist", "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
