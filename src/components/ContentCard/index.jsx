import './ContentCard.css'
import working from '../../assets/working.gif'

/* use this Card inside ContentBody */
const ContentCard = () => {
  return (<div className='ContentCard'>
    <img
      className="WorkInProgress"
      src={working}
      alt="work in progress"
    />
  </div>)
}

export default ContentCard
