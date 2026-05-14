import './Input.css'
import { ThemeContext } from '../../context/ThemeProvider'

import { useContext } from 'react'

const Input = ({ classes = '', ...props }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <input
      className={`Input Input--${theme} ${classes}`}
      {...props}
    />
  )
}

export default Input

