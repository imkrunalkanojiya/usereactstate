import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Endpoints for ReactState demo
  
  // Get current state
  app.get('/api/state', (req, res) => {
    // This would typically interact with a database
    // For our example, we'll just return a mock state
    res.json({
      user: {
        name: "John Doe",
        isAuthenticated: true,
        preferences: {
          theme: "dark",
          notifications: true
        }
      },
      todos: [
        { id: 1, text: "Complete state library", done: false },
        { id: 2, text: "Write documentation", done: false }
      ],
      counter: 0
    });
  });
  
  // Update state (for demo purposes)
  app.post('/api/state', (req, res) => {
    // In a real implementation, this would update the state in storage
    const { path, value } = req.body;
    
    if (!path) {
      return res.status(400).json({ error: 'Path is required' });
    }
    
    // Return success response
    res.json({ success: true, path, value });
  });

  const httpServer = createServer(app);

  return httpServer;
}
