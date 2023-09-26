import './Button.css'

import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'

const Button = ({ onclick, children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <button
      className={`Button Button--${theme}`}
      onClick={onclick}
    >
      {children}
    </button>
  )
}

export default Button
