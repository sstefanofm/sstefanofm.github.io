import Projects from '../Projects/Projects'
import About from '../About/About'
import { Routes as RoutesRR, Route } from 'react-router-dom'

const Routes = () => {
  const routes = [
    {
      path: '/',
      element: <Projects />,
    },
    {
      path: 'about',
      element: <About />,
    },
  ]

  return (
    <RoutesRR>
      {routes.map(r => (
        <Route
          key={`route-${r.path}`}
          path={r.path}
          element={r.element}
        />
      ))}
    </RoutesRR>
  )
}

export default Routes
