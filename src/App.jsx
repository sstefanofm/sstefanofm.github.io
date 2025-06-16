import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import ThemeProvider from './context/ThemeProvider'
import Theme from './context/theme'
import { routes } from './routes'

import { useState } from 'react'
import { useRoutes } from 'react-router-dom'

const App = () => {
  return (
    <ThemeProvider>
      <Nav />
      {useRoutes(routes) /* pages */}
      <Footer />
    </ThemeProvider>
  )
}

export default App
