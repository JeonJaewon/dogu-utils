import { useCallback, useState } from "react"

export const useOpenCloseState = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return [isOpen, open, close] as const
}
