import './Project.css'
import ThemeContext from '../../context/ThemeContext'

import { useContext } from 'react'

const Project = ({ name, description, src, href }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <a
      className={`Project Project--${theme}`}
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      <div className='Project__Header'>
        <div className={`Project__ImgContainer Project__ImgContainer--${theme}`}>
          <img
            className='Project__Img'
            src={`/img/${src}`}
            alt={src}
          />
        </div>
        <div className='Project__Name'>{name}</div>
      </div>
      <div className='Project__Description'>{description}</div>
    </a>
  )
}

export default Project
