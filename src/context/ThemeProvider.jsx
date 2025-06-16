import Theme from './theme'

import { createContext, useState } from 'react'

export const ThemeContext = createContext(Theme.LIGHT)

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    let preferredTheme = Theme.LIGHT

    try {
      const savedTheme = localStorage.getItem('theme')

      if (!savedTheme)
        preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
          .matches ? Theme.DARK : Theme.LIGHT
      else
        preferredTheme = savedTheme
    } catch {
      console.log('Error getting preferred user theme. Using default.')
    }

    return preferredTheme
  })

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
