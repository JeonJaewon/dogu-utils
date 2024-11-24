# EarlyReturn

The `EarlyReturn` class is a utility designed to handle conditional early returns in a clean and readable manner. It allows you to specify a series of conditions and corresponding actions, and it will execute the first action whose condition is met. If no conditions are met, a default action can be specified.

### Methods

```tsx
case(condition: boolean, func: Callback<T>): EarlyReturn<T>
```

This method checks a condition and executes the provided callback function if the condition is true. If a return value has already been set, it will not execute any further callbacks.

- **Parameters:**

  - `condition`: A boolean value that determines whether the callback should be executed.
  - `func`: A callback function to be executed if the condition is true.

- **Returns:** The `EarlyReturn` instance for chaining.

---

```tsx
default(func: Callback<T>): T
```

This method executes the provided callback function if no previous conditions were met and no return value has been set.

- **Parameters:**

  - `func`: A callback function to be executed if no conditions were met.

- **Returns:** The return value from the executed callback function.

---

### Example

```typescript
const result = new EarlyReturn<string>()
  .case(false, () => "First case")
  .case(true, () => "Second case")
  .default(() => "Default case")

console.log(result) // Output: 'Second case'
```

In this example, the `EarlyReturn` instance checks the first condition, which is `false`, so it moves to the next condition. The second condition is `true`, so it executes the corresponding callback and sets the return value to `'Second case'`. The `default` callback is not executed because a return value has already been set.
