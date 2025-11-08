/**
 * Main entry point for the React application.
 * Sets up Convex client, providers, and renders the App component.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import "./index.css";
import App from "./App.tsx";

// Initialize Convex client with environment URL
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

// Render the application with providers
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </StrictMode>,
);
