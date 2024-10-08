import './TopbarButton.css'
import { Button } from '../Button'
import ThemeContext from '../../context/ThemeContext'

import { useContext } from 'react'

const TopbarButton = ({ visible = true, onclick = () => {}, children }) => {
  if (!visible)
    return <></>

  const { theme } = useContext(ThemeContext)

  return (
    <Button
      onclick={onclick}
      classes={`TopbarButton TopbarButton--${theme}`}
    >
      {children}
    </Button>
  )
}

export default TopbarButton
