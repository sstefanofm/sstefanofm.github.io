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
      <div className='Project-Header'>
        <div className='Project-ImgContainer'>
          <img
            src={src}
            alt={src}
          />
        </div>
        <div className='Project-Name'>{name}</div>
      </div>
      <div className='Project-Description'>{description}</div>
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
