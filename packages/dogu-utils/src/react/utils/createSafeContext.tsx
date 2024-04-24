import { ReactNode, createContext, useContext } from "react"

type ProviderProps<Value> = {
  children: ReactNode
  value: Value
}

export const createSafeContext = <Value,>(defaultValue?: Value) => {
  const Context = createContext<Value | null>(defaultValue ?? null)

  const Provider = ({ children, value }: ProviderProps<Value>) => {
    return <Context.Provider value={value}>{children}</Context.Provider>
  }

  const useSafeContext = () => {
    const context = useContext(Context)
    if (context === null) {
      throw new Error(
        "useSafeContext must be used within a Provider, or give it a default value."
      )
    }
    return context
  }

  return [Provider, useSafeContext] as const
}
