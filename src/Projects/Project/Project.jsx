import './Project.css'
import PropTypes from 'prop-types'

const Project = ({ name, description, src, href }) => {
  return (
    <a
      className='Project'
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      <div className='Project__Header'>
        <div className='Project__ImgContainer'>
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

Project.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  href: PropTypes.string,
}

export default Project
