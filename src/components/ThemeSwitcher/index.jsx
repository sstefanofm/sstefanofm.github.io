import './ThemeSwitcher.css'
import { Button } from '../Button'
import { Sun, Moon } from '../Icon'
import { ThemeContext } from '../../context/ThemeProvider'
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

  const saveTheme = (theme) =>
    localStorage.setItem('theme', theme)

  return (
    <Button
      onclick={() => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT 
        setTheme(newTheme)
        saveTheme(newTheme)
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
