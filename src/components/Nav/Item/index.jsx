import './Item.css'
import { Check } from '../../Icon'
import { NavLink, matchPath, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const IconItemSelected = to => {
  const { pathname } = useLocation()
  const isCurrentPath = matchPath(to, pathname)

  if (isCurrentPath)
    return (
      <Check
        width={16}
        height={16}
      />
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
