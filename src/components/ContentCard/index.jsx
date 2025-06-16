import './ContentCard.css'
import { ThemeContext } from '../../context/ThemeProvider'

import { useContext } from 'react'

/* use this Card inside ContentBody */
const ContentCard = ({ children }) => {
  return (
    <div className='ContentCard'>
      {children}
    </div>
  )
}

ContentCard.Cover = ({ children, height, widthPerc, imgBorders = true, minWidth = 'unset' }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className={`ContentCard__Cover ContentCard__Cover--${theme} ${imgBorders ? '' : 'ContentCard__Cover--NoBorderImg'}`}
      style={{ height, width: widthPerc + '%', minWidth: minWidth + 'px' }}
    >
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
