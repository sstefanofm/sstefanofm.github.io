import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Card from './components/Card'
import ThemeContext from './context/ThemeContext'
import Theme from './context/theme'
import { routes } from './routes'

import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'

const getBin = (n = 0) => (n >>> 0).toString(2)
const getTime = () => Math.floor(new Date().getTime() / 1e3)

const App = () => {
  const [theme, setTheme] = useState(Theme.LIGHT)
  const [binaryTime, setBinaryTime] = useState(getBin(getTime()))

  useEffect(() => {
    const t = setInterval(() => {
      setBinaryTime(getBin(getTime()))
    }, 1e3)

    return () => clearInterval(t)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Nav />
      <Card>{binaryTime}</Card>
      {useRoutes(routes) /* pages */}
      <Footer />
    </ThemeContext.Provider>
  )
}

export default App
