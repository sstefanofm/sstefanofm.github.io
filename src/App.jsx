import './App.css'
import Nav from './components/Nav'
import ThemeContext from './context/ThemeContext'
import Theme from './components/ThemeSwitcher/theme'
import { routes } from './routes'
import { useRoutes } from 'react-router-dom'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState(Theme.LIGHT)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Nav />
      {useRoutes(routes) /* MainContent impls */}
    </ThemeContext.Provider>
  )
}

export default App
