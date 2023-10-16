import './Card.css'
import ThemeContext from '../../context/ThemeContext'

import { useContext } from 'react'

const Card = ({ row = true, border = true, wrap = true, classes = '', children }) => {
  const { theme } = useContext(ThemeContext)

  let style = {
    flexDirection: row ? 'row' : 'column',
    border: border ? '2px solid' : 'none',
    flexWrap: wrap ? 'wrap' : 'nowrap',
  }

  return (
    <div
      className={`Card Card--${theme} ${classes}`}
      style={style}
    >
      {children}
    </div>
  )
}

export default Card
