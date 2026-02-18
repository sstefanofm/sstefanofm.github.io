import './Pokemon.css'
import ContentCard from '../ContentCard'
import { Button } from '../Button'
import { ThemeContext } from '../../context/ThemeProvider'
import { useCounter } from '../../hooks/useCounter'

import { useContext } from 'react'

const Pokemon = () => {
  const { theme } = useContext(ThemeContext)
  const { counter, incrementCounter, decrementCounter } = useCounter(63 /* Abra 63 */)

  return (
    <ContentCard>
      <ContentCard.Content>
        <p>My favourite Pokémon is Abra.</p>
        <p>
          It is very hard to catch and level-up but the reward when it evolves is worth the effort.
        </p>
        <p>Abra is the Pokémon #63</p>
        <div className='Pokemon__Picker'>
          <div className='Pokemon__Picker__Buttons'>
            <Button
              onclick={decrementCounter}
              classes={`Pokemon__Picker__Button--${theme}`}
            >&lt;~</Button>
            <span>&nbsp;&nbsp;{counter}&nbsp;&nbsp;</span>
            <Button
              onclick={incrementCounter}
              classes={`Pokemon__Picker__Button--${theme}`}
            >~&gt;</Button>
          </div>
        </div>
      </ContentCard.Content>
      <ContentCard.Cover imgBorders={false}>
        <img
          className='Pokemon__SplashArt'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter}.png`}
          alt={`Displaying Pokémon #${counter}`}
        />
      </ContentCard.Cover>
    </ContentCard>
  )
}

export default Pokemon

