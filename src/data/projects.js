export const project = (
  imgsrc = '',
  path = '',
  description = '',
  href = ''
) => ({ imgsrc, path, description, href })

export const projects = Object.freeze({
  PORTFOLIO: project(
    'logo_64.png',
    'md/sstefanofm.github.io',
    'This portfolio. Where I publish my projects and some other things :D',
    'https://github.com/sstefanofm/sstefanofm.github.io/tree/dev/react',
  ),
  DOTFILES: project(
    'dots_logo.gif',
    'md/dots',
    'My dotfiles (in progress...)',
    'https://github.com/sstefanofm/dots',
  ),
  JAVASCRIPT: project(
    'js.png',
    'js',
    'Made with JavaScript',
    '/js'
  )
})

export const getProjects = () => Object.keys(projects)
  .map(pk => projects[pk])
