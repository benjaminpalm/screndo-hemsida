'use client'

import { createContext, useContext, useState } from 'react'

const AIPanelContext = createContext<{
  isOpen: boolean
  setIsOpen: (v: boolean) => void
  pendingMessage: string
  setPendingMessage: (v: string) => void
}>({
  isOpen: true,
  setIsOpen: () => {},
  pendingMessage: '',
  setPendingMessage: () => {},
})

export function AIPanelProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)
  const [pendingMessage, setPendingMessage] = useState('')

  return (
    <AIPanelContext.Provider value={{ isOpen, setIsOpen, pendingMessage, setPendingMessage }}>
      {children}
    </AIPanelContext.Provider>
  )
}

export function useAIPanel() {
  return useContext(AIPanelContext)
}
