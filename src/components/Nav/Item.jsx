import './Item.css'
import { Check } from '../Icon'
import ThemeContext from '../../context/ThemeContext'

import { useContext } from 'react'
import { NavLink, matchPath, useLocation } from 'react-router-dom'

const IconItemSelected = to => {
  const { pathname } = useLocation()
  const isCurrentPath = matchPath(to, pathname)

  return isCurrentPath ? (
    <Check
      width={16}
      height={16}
    />
  ) : undefined
}

const Item = ({ name, to }) => {
  const { theme } = useContext(ThemeContext)

  const activeStyle = {
    pointerEvents: 'none',
  }

  return (
    <li className='Item'>
      <NavLink
        className={`Item__NavLink Item__NavLink--${theme}`}
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

export default Item
