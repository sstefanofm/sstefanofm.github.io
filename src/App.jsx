import './App.css'
import Nav from './Nav/Nav'
import routes from './routes'
import { useRoutes } from 'react-router-dom'

const App = () => {
  const mainContent = useRoutes(routes)

  return (
    <>
      <Nav />
      {mainContent}
    </>
  )
}

export default App
