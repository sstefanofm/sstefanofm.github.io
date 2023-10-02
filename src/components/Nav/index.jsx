import './Nav.css'
import logo from '../../assets/logo_256.png'
import Item from './Item'
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

      <ThemeSwitcher classes='Nav__ThemeSwitcher' />

      <nav className='Nav__Links'>
        <ul className='Nav__Items'>
          {listItems.map((li, i) => (
            <Item
              key={`${i}-${li.name}`}
              name={li.name}
              to={li.to}
            />
          ))}
        </ul>
      </nav>
    </Card>
  )

  // return (
  //   <div className={`Nav Nav--${theme}`}>
  //     <div className='Nav__Logo'>
  //       <img
  //         src={logo}
  //         className='Nav__Img'
  //         alt='logo'
  //       />
  //       <h1 className={`Nav__Title Nav__Title--${theme}`}>
  //         <a
  //           className='Nav__Title__Link'
  //           href='https://github.com/sstefanofm'
  //           target='_blank'
  //           rel='noreferrer'
  //         >
  //           sstefanofm
  //         </a>
  //       </h1>
  //     </div>

  //     <ThemeSwitcher />

  //     <ul className='Nav__Items'>
  //       {listItems.map((item, i) => (
  //         <Item
  //           key={`${i}${item.name}`}
  //           name={item.name}
  //           to={item.to}
  //         />
  //       ))}
  //     </ul>
  //   </div>
  // )
}

export default Nav
