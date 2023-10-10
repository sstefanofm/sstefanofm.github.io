import './Button.css'
import ThemeContext from '../../context/ThemeContext'

import { useContext } from 'react'

const Button = ({ onclick, classes = '', isDisabled = false, children, ...props }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <button
      onClick={onclick}
      className={`Button Button--${theme} ${classes} ${isDisabled ? 'Button--Disabled' : ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
