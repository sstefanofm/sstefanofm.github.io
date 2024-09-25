import './Nav.css'
import logo from '../../assets/logo_256.png'
import Menu from './Menu'
import Card from '../Card'
import ThemeSwitcher from '../ThemeSwitcher'
import ThemeContext from '../../context/ThemeContext'
import { menuNavigation } from '../../routes.jsx'

import { useContext } from 'react'

const Nav = () => {
  const { theme } = useContext(ThemeContext)

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
        <a
          href="http://sstefanofm.github.io"
          className="Nav__Title"
        >
          <h1 className={`Nav__Title Nav__Title--${theme}`}>sstefanofm</h1>
        </a>
      </Card>

      <Menu>
        <ThemeSwitcher />
        <Menu.Burger options={menuNavigation} />
      </Menu>
    </Card>
  )
}

export default Nav
