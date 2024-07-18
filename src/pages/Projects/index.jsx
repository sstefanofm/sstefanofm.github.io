import './Projects.css'
import Project from './Project'
import Content from '../../components/Content'
import { CodeSlash } from '../../components/Icon'
import { projects as projectsJson } from '../../data/projects'

const Projects = () => {
  const projects = Object.keys(projectsJson)
    .map(pk => projectsJson[pk])

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
        {projects.map((p, index) => (
          <Project
            key={`${index}${p.name}`}
            name={p.name}
            description={p.description}
            imgsrc={p.imgsrc}
            href={p.href}
          />
        ))}
      </Content.Body>
    </Content>
  )
}

export default Projects
