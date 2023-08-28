import './ContentBody.css'
import PropTypes from 'prop-types'

const ContentBody = ({ children }) => {
  return <div className='ContentBody'>{children}</div>
}

ContentBody.propTypes = {
  children: PropTypes.element.isRequired,
}

export default ContentBody
