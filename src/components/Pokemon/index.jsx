import './Pokemon.css'
import ContentCard from '../ContentCard'
import { Button } from '../Button'
import { ThemeContext } from '../../context/ThemeProvider'
import { useCounter } from '../../hooks/useCounter'
import { usePokemon } from '../../hooks/usePokemon'

import { useContext } from 'react'

const START_POKEMON = 63 /* Abra 63 */
const MAX_POKEMON = 1025

const Pokemon = () => {
  const { theme } = useContext(ThemeContext)
  const { counter, incrementCounter, decrementCounter } = useCounter(
    START_POKEMON,
    true,
    MAX_POKEMON,
  )
  const { pokemon, isLoading, isAbra } = usePokemon(counter)

  const pokemonPickerButtonClasses = `Pokemon__Picker__Button Pokemon__Picker__Button--${theme} ${isLoading ? 'Pokemon__Picker__Button--Disabled' : ''}`

  return (
    <ContentCard>
      <ContentCard.Content>
        <h3>{pokemon.name}</h3>
        {isAbra && (
          <>
            <p>My favourite Pokémon is Abra.</p>
            <p>
              It is very hard to catch and level-up but the reward when it evolves is worth the effort.
            </p>
            <p>Abra is the Pokémon #63.</p>
          </>
        )}
        <div className='Pokemon__Picker'>
          <div className='Pokemon__Picker__Buttons'>
            <Button
              onclick={decrementCounter}
              classes={pokemonPickerButtonClasses}
              disabled={isLoading}
            >&lt;~</Button>
            <span>&nbsp;&nbsp;{pokemon.id}&nbsp;&nbsp;</span>
            <Button
              onclick={incrementCounter}
              classes={pokemonPickerButtonClasses}
              disabled={isLoading}
            >~&gt;</Button>
          </div>
        </div>
      </ContentCard.Content>
      <ContentCard.Cover imgBorders={false}>
        <img
          className='Pokemon__SplashArt'
          src={pokemon.imageUrl}
          alt={`Displaying Pokémon #${counter}`}
        />
      </ContentCard.Cover>
    </ContentCard>
  )
}

export default Pokemon

