import './Item.css'
import { NavLink, matchPath, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const IconItemSelected = to => {
  const { pathname } = useLocation()
  const isCurrentPath = matchPath(to, pathname)

  if (isCurrentPath)
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        className='bi bi-check'
        viewBox='0 0 16 16'
      >
        <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
      </svg>
    )
  return undefined
}

const Item = ({ name, to }) => {
  const activeStyle = {
    pointerEvents: 'none',
  }

  return (
    <li className='Item'>
      <NavLink
        className='Item__NavLink'
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to={to}
      >
        <div>{IconItemSelected(to)}</div>
        <div>
          <span className='Item__Name'>{name}</span>
        </div>
      </NavLink>
    </li>
  )
}

Item.propTypes = {
  name: PropTypes.string,
  to: PropTypes.string,
}

export default Item
