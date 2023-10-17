import './Button.css'
import ThemeContext from '../../context/ThemeContext'

import { useContext } from 'react'

export const Button = ({ onclick = () => {}, classes = '', disabled = false, children, ...props }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <button
      onClick={onclick}
      className={`Button Button--${theme} ${classes} ${disabled ? 'Button--Disabled' : ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

export const AnchorButton = ({ href = 'https://example.com', classes = '', disabled = false, children, ...props }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className={`Button Button--${theme} ${classes} ${disabled ? 'Button--Disabled' : ''}`}
      {...props}
    >
      {children}
    </a>
  )
}
