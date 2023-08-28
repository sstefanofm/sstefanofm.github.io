import './MainContent.css'
import PropTypes from 'prop-types'

const MainContent = ({ children }) => {
  return <main className='MainContent'>{children}</main>
}

MainContent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default MainContent
