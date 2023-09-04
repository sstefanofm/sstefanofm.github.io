import './App.css'
import Nav from './components/Nav'
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
