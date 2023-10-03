import './Card.css'
import ThemeContext from '../../context/ThemeContext'
import Button from '../Button'

import { useContext } from 'react'

const Card = ({ row = true, border = true, topbar = false, bind, classes = '', children }) => {
  const { theme } = useContext(ThemeContext)

  let style = {
    flexDirection: row ? 'row' : 'column',
    border: border ? '2px solid' : 'none',
  }

  return (
    <div
      className={`Card Card--${theme} ${classes}`}
      style={style}
    >
      {topbar ? (
        <div className={`Card__TopBar Card__TopBar--${theme}`}>
          <Button
            onclick={() => bind.setHidden(true)}
            classes={`TopBar__Item TopBar__Item--${theme}`}
          >
            ×
          </Button>
        </div>
      ) : undefined}
      {children}
    </div>
  )
}

export default Card
