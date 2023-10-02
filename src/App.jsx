import './App.css'
import Nav from './components/Nav'
import ThemeContext from './context/ThemeContext'
import Theme from './context/theme'
import { routes } from './routes'

import { useState } from 'react'
import { useRoutes } from 'react-router-dom'

const App = () => {
  const [theme, setTheme] = useState(Theme.LIGHT)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Nav />
      {useRoutes(routes) /* pages */}
      {/* <Footer /> */}
    </ThemeContext.Provider>
  )
}

export default App
