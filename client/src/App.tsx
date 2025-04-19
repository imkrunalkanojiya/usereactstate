import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { queryClient } from "./lib/queryClient";
import { StateProvider } from "./lib/ReactState";
import Home from "@/pages/Home";
import Documentation from "@/pages/Documentation";
import ApiReference from "@/pages/ApiReference";
import Examples from "@/pages/Examples";
import Tutorials from "@/pages/Tutorials";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/documentation" component={Documentation} />
      <Route path="/api-reference" component={ApiReference} />
      <Route path="/examples" component={Examples} />
      <Route path="/tutorials" component={Tutorials} />
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
    },
    examples: {
      counter: 0,
      todos: [
        { id: 1, text: "Learn ReactState library", completed: false },
        { id: 2, text: "Build an application", completed: false },
        { id: 3, text: "Share with others", completed: false }
      ],
      theme: 'light'
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
