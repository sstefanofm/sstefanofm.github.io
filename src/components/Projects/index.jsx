import './Projects.css'
import { projects as jsonProjects } from './projects'
import Project from './Project'
import MainContent from '../MainContent'
import ContentHeader from '../MainContent/ContentHeader'
import { Home } from '../Icon'
import ContentBody from '../MainContent/ContentBody'

const Projects = () => {
  const { projects } = jsonProjects

  return (
    <MainContent>
      <ContentHeader title='Projects'>
        <Home
          width={23}
          height={23}
          modifiers={['GrimRotation', 'LightTheme']}
        />
      </ContentHeader>
      <ContentBody>
        <div className='Projects'>
          {projects.map((p, index) => (
            <Project
              key={`${index}${p.name}`}
              name={p.name}
              description={p.description}
              src={p.src}
              href={p.href}
            />
          ))}
        </div>
      </ContentBody>
    </MainContent>
  )
}

export default Projects
