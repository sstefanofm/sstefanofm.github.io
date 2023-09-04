import './ContentHeader.css'
import PropTypes from 'prop-types'

const ContentHeader = ({ title = '', children }) => {
  return (
    <header className='ContentHeader'>
      <h2 className='ContentHeader__Title'>/{title.toLowerCase()}.txt</h2>
      {children}
    </header>
  )
}

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

export default ContentHeader
