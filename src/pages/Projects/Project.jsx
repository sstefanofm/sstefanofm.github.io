import './Project.css'
import ThemeContext from '../../context/ThemeContext'
import { project } from '../../data/projects.js'

import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

const Project = ({ p = project() }) => {
  const { theme } = useContext(ThemeContext)
  const { imgsrc, path, description } = p

  return (
    <NavLink
      className={`Project Project--${theme}`}
      to={`/${path}`}
    >
      <div className='Project__Header'>
        <div className={`Project__ImgContainer Project__ImgContainer--${theme}`}>
          <img
            className='Project__Img'
            src={`/img/${imgsrc}`}
            alt={`${path} project image`}
          />
        </div>
        <div className='Project__Name'>{path.slice(path.lastIndexOf('/'))}</div>
      </div>
      <div className='Project__Description'>{description}</div>
    </NavLink>
  )
}

export default Project
