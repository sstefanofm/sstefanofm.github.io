import './Nav.css'
import logo from './skull.png'
import Item from './Item'
import ThemeSwitcher from '../ThemeSwitcher'
import ThemeContext from '../../context/ThemeContext'

import { useContext } from 'react'

const Nav = () => {
  const { theme } = useContext(ThemeContext)

  const listItems = [
    {
      name: 'home',
      to: '/',
    },
    {
      name: 'about',
      to: '/about',
    },
  ]

  return (
    <div className={`Nav Nav--${theme}`}>
      <div className='Nav__Logo'>
        <img
          src={logo}
          className='Nav__Img'
          alt='logo'
        />
        <h1 className={`Nav__Title Nav__Title--${theme}`}>
          <a
            className='Nav__Title__Link'
            href='https://github.com/sstefanofm'
            target='_blank'
            rel='noreferrer'
          >
            sstefanofm
          </a>
        </h1>
      </div>

      <ThemeSwitcher />

      <ul className='Nav__Items'>
        {listItems.map((item, i) => (
          <Item
            key={`${i}${item.name}`}
            name={item.name}
            to={item.to}
          />
        ))}
      </ul>
    </div>
  )
}

export default Nav
