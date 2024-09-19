import './Project.css'
import ThemeContext from '../../context/ThemeContext'

import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

const Project = ({ name, description, imgsrc }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <NavLink
      className={`Project Project--${theme}`}
      to={`/${name}`}
    >
      <div className='Project__Header'>
        <div className={`Project__ImgContainer Project__ImgContainer--${theme}`}>
          <img
            className='Project__Img'
            src={`/img/${imgsrc}`}
            alt={`${name} project image`}
          />
        </div>
        <div className='Project__Name'>{name.slice(name.lastIndexOf('/'))}</div>
      </div>
      <div className='Project__Description'>{description}</div>
    </NavLink>
  )
}

export default Project
