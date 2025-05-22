import './ContentCard.css'
import ThemeContext from '../../context/ThemeContext'

import { useContext } from 'react'

/* use this Card inside ContentBody */
const ContentCard = ({ children }) => {
  return (
    <div className='ContentCard'>
      {children}
    </div>
  )
}

ContentCard.Cover = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`ContentCard__Cover ContentCard__Cover--${theme}`}>
      {children}
    </div>
  )
}

ContentCard.Content = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`ContentCard__Content ContentCard__Content--${theme}`}>
      {children}
    </div>
  )
}

ContentCard.Cover.displayName = 'ContentCardCover'
ContentCard.Content.displayName = 'ContentCardContent'

export default ContentCard
