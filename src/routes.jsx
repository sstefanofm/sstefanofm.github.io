import Projects from './Projects/Projects'
import About from './About/About'

const routes = [
  {
    path: '/',
    element: <Projects imgpath='/img/' />,
  },
  {
    path: '/about',
    element: <About />,
  },
]

export default routes
