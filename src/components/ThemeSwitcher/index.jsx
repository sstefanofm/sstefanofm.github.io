import './ThemeSwitcher.css'
import Theme from './theme'
import Button from '../Button'
import { Sun, Moon } from '../Icon'
import ThemeContext from '../../context/ThemeContext'

import { useContext } from 'react'

const ThemeSwitcher = ({ classes }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  if (theme === Theme.LIGHT) {
    document.querySelector('body').classList.add('Body--Light')
  } else {
    document.querySelector('body').classList.add('Body--Dark')
  }

  const changeBackground = () => {
    document.querySelector('body').classList.toggle('Body--Dark')
    document.querySelector('body').classList.toggle('Body--Light')
  }

  if (theme === Theme.LIGHT)
    return (
      <Button
        onclick={() => {
          setTheme(Theme.DARK)
          changeBackground()
        }}
        classes={classes}
      >
        <Moon
          width={30}
          height={30}
        />
      </Button>
    )
  return (
    <Button
      onclick={() => {
        setTheme(Theme.LIGHT)
        changeBackground()
      }}
      classes={classes}
    >
      <Sun
        width={30}
        height={30}
      />
    </Button>
  )
}

export default ThemeSwitcher
