import './Projects.css'
import Project from './Project'
import Content from '../../components/Content'
import { CodeSlash } from '../../components/Icon'
import { getProjects } from '../../data/projects'

const Projects = () => {
  return (
    <Content>
      <Content.Header title='projects'>
        <CodeSlash
          width={23}
          height={23}
          classes={['GrimRotation']}
        />
      </Content.Header>
      <Content.Body>
        <div className='Projects'>
          {getProjects().map((p, index) => (
            <Project
              key={`${index}${p.path}`}
              p={p}
            />
          ))}
        </div>
      </Content.Body>
    </Content>
  )
}

export default Projects
