import Projects from './Projects/Projects'
import About from './About/About'

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
