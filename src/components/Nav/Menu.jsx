import './Menu.css'
import ThemeContext from '../../context/ThemeContext'
import { Button } from '../Button'
import Item from './Item'
import Card from '../Card'
import Topbar from '../Topbar'
import { List, ViewList } from '../Icon'

import { useContext, useState } from 'react'

const Menu = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return <nav className={`Menu Menu--${theme}`}>{children}</nav>
}

Menu.Burger = ({ options = [{ name: '', to: '' }] }) => {
  const [hidden, setHidden] = useState(true)
  const { theme } = useContext(ThemeContext)

  const hideMenu = () => {
    setHidden(true)
  }

  return (
    <>
      <Button
        onclick={() => setHidden(!hidden)}
        classes='BurgerMenu'
      >
        {hidden ? (
          <List
            width={30}
            height={30}
          />
        ) : (
          <ViewList
            width={30}
            height={30}
          />
        )}
      </Button>

      <Card
        row={false}
        border={true}
        classes={`BurgerMenu__Options BurgerMenu__Options--${theme} BurgerMenu__Options--${
          hidden ? 'Hidden' : 'Visible'
        }`}
      >
        <Topbar
          title={{ enabled: false }}
          close={{ enabled: true, onclick: hideMenu }}
        />
        {options.map((opt, i) => (
          <Item
            key={`${i}-${opt.name}`}
            name={opt.name}
            to={opt.to}
          />
        ))}
      </Card>
    </>
  )
}

Menu.Burger.displayName = 'BurgerMenu'

export default Menu
