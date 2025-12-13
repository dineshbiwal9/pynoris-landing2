// Vercel serverless function handler
// Types are provided by Vercel runtime
type VercelRequest = any;
type VercelResponse = any;

// For Vercel, we'll use a simpler approach - just handle API routes
// Static files are served automatically by Vercel from dist/public
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    // Try to import from built server first (production)
    let createApp;
    try {
      const serverModule = await import("../dist/index.cjs");
      createApp = serverModule.createApp || serverModule.default?.createApp;
    } catch {
      // Fallback to source (development)
      const serverModule = await import("../server/index");
      createApp = serverModule.createApp;
    }

    if (!createApp) {
      return res.status(500).json({ error: "Server not properly configured" });
    }

    const app = await createApp();
    
    // Handle the request through Express
    return new Promise<void>((resolve) => {
      app(req, res, () => {
        resolve();
      });
    });
  } catch (error: any) {
    console.error("Vercel handler error:", error);
    return res.status(500).json({ 
      error: "Internal server error",
      message: error?.message 
    });
  }
}
