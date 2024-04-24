# useOpenCloseState

It's designed to simplify the management of open/close states, such as for modals, dropdowns, or accordions.

## Signature

```tsx
function useOpenCloseState(initialState?: boolean): {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}
```

## Usage

Here's a basic usage example:

```tsx
import { useOpenCloseState } from "dogu-utils/react/hooks"

function ExampleComponent() {
  const { isOpen, open, close, toggle } = useOpenCloseState()

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isOpen && <div>This is an open state</div>}
    </div>
  )
}
```
