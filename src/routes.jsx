import Projects from './pages/Projects'
import Markdown from './pages/Markdown'
import About from './pages/About'
import NotFound from './pages/NotFound'

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
    path: 'about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
