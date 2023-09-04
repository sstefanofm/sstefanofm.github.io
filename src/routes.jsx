import Projects from './components/Projects'
import About from './components/About'

export const routes = [
  {
    path: '/',
    element: <Projects />,
  },
  {
    path: 'about',
    element: <About />,
  },
]
