
import React from 'react'

import useLocalStorage from 'hooks/useLocalStorage'

const ValueContext = React.createContext()

export function Provider ({ children }) {
  const ls = useLocalStorage('SUPER_SECRET_KEY')

  return <ValueContext.Provider value={ls}>{children}</ValueContext.Provider>
}

export const Consumer = ValueContext.Consumer
