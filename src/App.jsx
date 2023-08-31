import './App.css'
import Nav from './Nav/Nav'
import { routes } from './routes'
import { useRoutes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Nav />
      {useRoutes(routes) /* MainContent impls */}
    </>
  )
}

export default App
