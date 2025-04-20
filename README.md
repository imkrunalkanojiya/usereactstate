# ReactState

A powerful, type-safe React state management library with built-in debugging capabilities and data fetching support.

## Features

- 🔄 **Type-safe State Management**: Built with TypeScript for complete type safety
- 🐛 **Built-in Debugging**: Includes a visual debugger for state changes
- 🔍 **Fine-grained Updates**: Optimized for performance with path-based updates
- 📡 **Data Fetching**: Integrated with React Query for seamless data management
- 🎨 **UI Utilities**: Includes utility functions for class name management
- 🔌 **Plugin System**: Extensible architecture for custom functionality

## Installation

```bash
npm install @imkrunalkanojiya/usereactstate
# or
yarn add @imkrunalkanojiya/usereactstate
```

## Quick Start

```tsx
import { StateProvider, useStateValue } from '@imkrunalkanojiya/usereactstate';

function App() {
  return (
    <StateProvider initialState={{ user: { name: 'John' } }}>
      <UserProfile />
    </StateProvider>
  );
}

function UserProfile() {
  const [user, setUser] = useStateValue('user');
  
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={() => setUser({ ...user, name: 'Jane' })}>
        Change Name
      </button>
    </div>
  );
}
```

## Core Concepts

### State Provider

The `StateProvider` component is the root of your state management system:

```tsx
<StateProvider 
  initialState={{ /* your initial state */ }}
  debug={true} // Enable debugging
>
  {/* Your app components */}
</StateProvider>
```

### State Management Hooks

#### useStateValue
Get and set state values with type safety:

```tsx
const [value, setValue] = useStateValue<string>('path.to.value');
```

#### useStateWatch
Watch state changes without the ability to modify:

```tsx
const value = useStateWatch<string>('path.to.value');
```

#### useStore
Access the entire store context:

```tsx
const { state, setState, mergeState } = useStore();
```

#### useEntireStore
Get the complete state object:

```tsx
const state = useEntireStore();
```

### Debugging

Enable the debug mode and use the `StateDebugger` component:

```tsx
import { StateProvider, StateDebugger } from '@imkrunalkanojiya/usereactstate';

function App() {
  return (
    <StateProvider debug={true}>
      <StateDebugger />
      {/* Your app components */}
    </StateProvider>
  );
}
```

### Data Fetching

The library includes a query client for data fetching:

```tsx
import { queryClient } from '@imkrunalkanojiya/usereactstate';

// Use in your components
const data = await queryClient.get('/api/data');
```

## Advanced Usage

### State Paths

State paths can be specified as strings or arrays:

```tsx
// Both are equivalent
const [value] = useStateValue('user.profile.name');
const [value] = useStateValue(['user', 'profile', 'name']);
```

### Performance Optimization

The library is optimized for performance with:
- Path-based updates
- Memoized selectors
- Batched updates
- Minimal re-renders

### Type Safety

Full TypeScript support with generics:

```tsx
interface User {
  name: string;
  age: number;
}

const [user, setUser] = useStateValue<User>('user');
```

## API Reference

### Components

- `StateProvider`: Root component for state management
- `StateDebugger`: Visual debugger for state changes

### Hooks

- `useStateValue<T>(path)`: Get and set state values
- `useStateWatch<T>(path)`: Watch state changes
- `useStore()`: Access store context
- `useEntireStore()`: Get complete state

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
