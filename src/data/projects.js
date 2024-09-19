export const projects = Object.freeze({
  PORTFOLIO: {
    imgsrc: 'logo_64.png',
    name: 'md/sstefanofm.github.io',
    description: 'This portfolio. Where I publish my projects and some other things :D',
    href: 'https://github.com/sstefanofm/sstefanofm.github.io/tree/dev/react',
  },
  DOTFILES: {
    imgsrc: 'dots_logo.gif',
    name: 'md/dots',
    description: 'My dotfiles (in progress...)',
    href: 'https://github.com/sstefanofm/dots',
  },
  JAVASCRIPT: {
    imgsrc: 'dots_logo.gif',
    name: 'js',
    description: 'Made with JavaScript',
    href: '/js'
  }
})

export const getProjects = () => Object.keys(projects)
  .map(pk => projects[pk])
