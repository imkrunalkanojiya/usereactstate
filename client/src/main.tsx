import { createRoot } from "react-dom/client";
import { StateProvider } from "./lib/ReactState";
import App from "./App";
import "./index.css";

// Initial state for the entire application
const initialState = {
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
  ui: {
    sidebar: {
      collapsed: false
    },
    modal: {
      isOpen: false
    }
  },
  counter: 0,
  activeTab: "implementation"
};

createRoot(document.getElementById("root")!).render(
  <StateProvider initialState={initialState} debug={true}>
    <App />
  </StateProvider>
);
