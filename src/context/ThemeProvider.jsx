import Theme from './theme'

import { createContext, useState } from 'react'

export const ThemeContext = createContext(Theme.LIGHT)

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return Theme.LIGHT
  })

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
