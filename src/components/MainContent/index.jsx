import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import './MainContent.css'
import PropTypes from 'prop-types'

const MainContent = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return <main className={`MainContent MainContent--${theme}`}>{children}</main>
}

MainContent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default MainContent
