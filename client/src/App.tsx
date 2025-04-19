import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { queryClient } from "./lib/queryClient";
import { StateProvider } from "./lib/ReactState";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initial state for our state management library
  const initialState = {
    counter: 0,
    activeTab: 'examples',
    todos: [
      { id: 1, text: "Learn ReactState", done: false },
      { id: 2, text: "Build an example app", done: false }
    ],
    user: {
      name: "John Doe",
      preferences: {
        theme: "light",
        notifications: true
      }
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <StateProvider initialState={initialState} debug={true}>
          <Toaster />
          <Router />
        </StateProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
