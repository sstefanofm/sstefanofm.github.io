import './Button.css'

import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'

const Button = ({ onclick, classes, children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <button
      onClick={onclick}
      className={`Button Button--${theme} ${classes}`}
    >
      {children}
    </button>
  )
}

export default Button
