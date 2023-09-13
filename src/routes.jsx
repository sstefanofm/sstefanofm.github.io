import Projects from './components/Projects'
import About from './components/About'
import NotFound from './components/NotFound'

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
