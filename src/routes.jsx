import Projects from './pages/Projects'
import About from './pages/About'
import NotFound from './pages/NotFound'

export const routes = [
  {
    path: '/',
    element: <Projects />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
