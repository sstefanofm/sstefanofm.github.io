import './Projects.css'
import MainContent from '../MainContent'
import ContentHeader from '../MainContent/ContentHeader'
import HomeIcon from '../Icons/Home'
import ContentBody from '../MainContent/ContentBody'
import Project from './Project'
import { projects as jsonProjects } from './projects'

const Projects = () => {
  const { projects } = jsonProjects

  return (
    <MainContent>
      <ContentHeader title='Projects'>
        <HomeIcon
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
