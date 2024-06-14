import Projects from './pages/Projects'
import Markdown from './pages/Markdown'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Js from './pages/Js'

export const menuNavigation = [
  {
    name: 'home',
    to: '/',
  },
  {
    name: 'about',
    to: '/about',
  },
  {
    name: 'js',
    to: '/js',
  }
]

export const routes = [
  {
    path: '/',
    element: <Projects />,
  },
  {
    path: 'md',
    children: [
      {
        path: ':repoName',
        element: <Markdown />,
      },
    ],
  },
  {
    path: 'js',
    element: <Js />,
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
