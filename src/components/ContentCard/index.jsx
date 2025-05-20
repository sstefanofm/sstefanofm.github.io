import './ContentCard.css'
import working from '../../assets/working.gif'

/* use this Card inside ContentBody */
const ContentCard = ({ children }) => {
  return (
    <div className='ContentCard'>
      {children}
    </div>
  )
}

ContentCard.Cover = () => {
  return (
    <div className='ContentCard__Cover'>
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
  return (
    <div className='ContentCard__Content'>
      <p>This is text bro</p>
    </div>
  )
}

ContentCard.Cover.displayName = 'ContentCardCover'
ContentCard.Content.displayName = 'ContentCardContent'

export default ContentCard
