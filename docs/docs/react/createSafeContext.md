# createSafeContext

`createSafeContext` is a utility function designed to simplify the creation and usage of React Contexts by ensuring that the context value is always defined when accessed. It Throws an error if the context value is null.

## Signature

```tsx
function createSafeContext<Value>(
  defaultValue?: Value
): readonly [React.Provider<Value>, () => Value]

const [Provider, useSafeContext] = createSafeContext<Value>()
```

### Parameters

- defaultValue (optional): The default value for the context.

### Returns

An array containing:

- Provider: A React Provider component for the context.
- useSafeContext: A hook that returns the context value. Throws an error if the context value is null.

## Usage

Here's a basic usage example:

```tsx
import React from "react"
import { createSafeContext } from "dogu-utils/react"

const [MyProvider, useMyContext] = createSafeContext<number>()

const MyComponent = () => {
  const value = useMyContext()
  return <div>The context value is {value}</div>
}

const App = () => {
  return (
    <MyProvider value={42}>
      <MyComponent />
    </MyProvider>
  )
}
```
