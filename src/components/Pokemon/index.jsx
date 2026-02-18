import './Pokemon.css'
import ContentCard from '../ContentCard'

const Pokemon = () => {
  return (
    <ContentCard>
      <ContentCard.Content>
        <p>My favourite Pokémon is Abra.</p>
        <p>
          It is very hard to catch and level-up but the reward when it evolves is worth the effort.
        </p>
      </ContentCard.Content>
      <ContentCard.Cover
        widthPerc={40}
        minWidth={100}
        height={200}
        imgBorders={false}
      >
        <img className='Pokemon__SplashArt' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${63}.png`} />
      </ContentCard.Cover>
    </ContentCard>
  )
}

export default Pokemon

