import './ThemeSwitcher.css'
import Theme from './theme'
import Button from '../Button'
import { Sun, Moon } from '../Icon'
import ThemeContext from '../../context/ThemeContext'
import { useContext } from 'react'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  if (theme === Theme.LIGHT)
    return (
      <Button onclick={() => setTheme(Theme.DARK)}>
        <Moon
          width={30}
          height={30}
        />
      </Button>
    )
  return (
    <Button onclick={() => setTheme(Theme.LIGHT)}>
      <Sun
        width={30}
        height={30}
      />
    </Button>
  )
}

export default ThemeSwitcher
