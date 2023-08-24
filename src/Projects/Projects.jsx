import './Projects.css'
import Project from './Project/Project'
import PropTypes from 'prop-types'

import { useEffect, useState } from 'react'

const Projects = ({ imgpath }) => {
  const [projects, setProjects] = useState([])

  const getProjects = async () => {
    const data = await fetch('data/projects.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })

    const { projects } = await data.json()

    setProjects(projects)
  }

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <div className='Projects'>
      <h2 className='Projects__Title'>
        <div className='Projects__Icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='23'
            height='23'
            fill='currentColor'
            className='bi bi-code-slash'
            viewBox='0 0 16 16'
          >
            <path d='M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z' />
          </svg>
        </div>
        projects.txt
      </h2>
      <div className='Projects__ContentWrapper'>
        {projects.map((p, i) => (
          <Project
            key={`${i}${p.name}`}
            src={`${imgpath}${p.src}`}
            name={p.name}
            description={p.description}
            href={p.href}
          />
        ))}
      </div>
    </div>
  )
}

Projects.propTypes = {
  imgpath: PropTypes.string,
}

export default Projects
