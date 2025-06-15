export const project = (imgsrc = '', name = '', path = '', description = '', href = '') => {
  // const name = path.slice(path.lastIndexOf('/') + 1)

  return ({ name, imgsrc, path, description, href })
}

export const getProjectByRepoName = (name = '') =>
  Object.values(projects).find(p => p.path === 'md/' + name)

export const projects = Object.freeze({
  PORTFOLIO: project(
    'logo_64.png',
    'portfolio',
    'md/sstefanofm.github.io',
    'This portfolio. Where I publish my projects and some other things :D',
    'https://github.com/sstefanofm/sstefanofm.github.io/tree/dev/react',
  ),
  FCM_MICROSERVICE: project(
    'firebase_logo.svg',
    'FCM Microservice',
    'md/fcm-microservice',
    'A token management and push notifications microservice for Firebase Cloud Messaging made with Docker, Postgres and Java Spring',
    'https://github.com/sstefanofm/fcm-microservice',
  ),
  JAVASCRIPT: project(
    'javascript_logo.svg',
    'JavaScript',
    'js',
    'Made with JavaScript',
    '/js'
  ),
  DOTFILES: project(
    'linux_logo.svg',
    'dotfiles',
    'md/dots',
    'My dotfiles (in progress...)',
    'https://github.com/sstefanofm/dots',
  ),
})

export const getProjects = () => Object.keys(projects)
  .map(pk => projects[pk])
