import './MeWhenCoding.css'
import working from '../../assets/working.gif'
import ContentCard from '../ContentCard'

const MeWhenCoding = () => {
  return (
    <ContentCard>
      <ContentCard.Cover>
        <div className='MeWhenCoding__CoverContainer'>
          <img
            src={working}
            alt="work in progress"
          />
          <span>This is me while i&apos;m coding</span>
        </div>
      </ContentCard.Cover>
      <ContentCard.Content>
        <p>Hi! JavaScript is the language that I&apos;ve spent most of my development career learning.</p>
        <p>
          Many things can be done with one-liners to look like a pro.
          And OOP in JS is a joke, and I love non object oriented languages.
        </p>
        <p>This section of my webpage is to show cool things made with this awesome language.</p>
      </ContentCard.Content>
    </ContentCard>
  )
}

export default MeWhenCoding
