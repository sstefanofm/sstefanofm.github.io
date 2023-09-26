import Theme from '../components/ThemeSwitcher/theme'
import { createContext } from 'react'

const ThemeContext = createContext(Theme.LIGHT)

export default ThemeContext
