import './Nav.css'
import logo from '../../assets/logo_256.png'
import Menu from './Menu'
import Card from '../Card'
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
    <Card
      row={true}
      border={true}
      classes='Nav'
    >
      <Card
        row={true}
        border={false}
        classes='Nav__Logo'
      >
        <img
          src={logo}
          alt='Logo'
          className='Nav__Img'
        />
        <h1 className={`Nav__Title Nav__Title--${theme}`}>sstefanofm</h1>
      </Card>

      <Menu>
        <ThemeSwitcher />
        <Menu.Burger options={listItems} />
        {/* <nav className='Nav__Links'>
          <ul className='Nav__Items'>
            {listItems.map((li, i) => (
              <Item
                key={`${i}-${li.name}`}
                name={li.name}
                to={li.to}
              />
            ))}
          </ul>
        </nav> */}
      </Menu>
    </Card>
  )
}

export default Nav
