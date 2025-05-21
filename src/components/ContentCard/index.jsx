import './ContentCard.css'
import working from '../../assets/working.gif'
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

ContentCard.Cover = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`ContentCard__Cover ContentCard__Cover--${theme}`}>
      <img
        className="WorkInProgress"
        src={working}
        alt="work in progress"
      />
      <span>This is me while i&apos;m coding</span>
    </div>
  )
}

ContentCard.Content = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`ContentCard__Content ContentCard__Content--${theme}`}>
      <p>This is text bro</p>
    </div>
  )
}

ContentCard.Cover.displayName = 'ContentCardCover'
ContentCard.Content.displayName = 'ContentCardContent'

export default ContentCard
