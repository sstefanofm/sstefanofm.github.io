import './ThemeSwitcher.css'
import Button from '../Button'
import { Sun, Moon } from '../Icon'
import ThemeContext from '../../context/ThemeContext'
import Theme from '../../context/theme'

import { useContext } from 'react'

const ThemeSwitcher = ({ classes }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  const body = document.querySelector('body')

  body.classList.add(`Body--${theme}`)

  const changeBackground = () => {
    body.classList.toggle(`Body--${Theme.LIGHT}`)
    body.classList.toggle(`Body--${Theme.DARK}`)
  }

  return (
    <Button
      onclick={() => {
        setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
        changeBackground()
      }}
      classes={classes}
    >
      {theme === Theme.LIGHT ? (
        <Sun
          width={30}
          height={30}
          classes={[]}
        />
      ) : (
        <Moon
          width={30}
          height={30}
          classes={[]}
        />
      )}
    </Button>
  )
}

export default ThemeSwitcher
