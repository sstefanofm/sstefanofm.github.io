import './Button.css'
import ThemeContext from '../../context/ThemeContext'

import { useContext } from 'react'

const Button = ({ onclick, classes = '', children }) => {
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
