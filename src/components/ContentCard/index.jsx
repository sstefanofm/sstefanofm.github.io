import './ContentCard.css'
import working from '../../assets/working.gif'

/* use this Card inside ContentBody */
const ContentCard = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

ContentCard.Cover = () => {
  return (
    <img
      className="WorkInProgress"
      src={working}
      alt="work in progress"
    />
  )
}

ContentCard.Content = () => {
  return (
    <div>
      <p>This is text bro</p>
    </div>
  )
}

ContentCard.Cover.displayName = 'ContentCardCover'
ContentCard.Content.displayName = 'ContentCardContent'

export default ContentCard
