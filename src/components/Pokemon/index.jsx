import './Pokemon.css'
import pokeball from '../../assets/pokeball.png'
import ContentCard from '../ContentCard'
import Input from '../Input'
import { Button } from '../Button'
import { ThemeContext } from '../../context/ThemeProvider'
import { useCounter } from '../../hooks/useCounter'
import { usePokemon } from '../../hooks/usePokemon'

import { useContext } from 'react'

const START_POKEMON = 63 /* Abra 63 */
const MIN_POKEMON = 1
const MAX_POKEMON = 1025

const Pokemon = () => {
  const { theme } = useContext(ThemeContext)
  const { counter, setCounter, incrementCounter, decrementCounter } = useCounter(
    START_POKEMON,
    true,
    MAX_POKEMON,
  )
  const { pokemon, isLoading, isAbra } = usePokemon(counter)

  const pokemonPickerButtonClasses = `Pokemon__Picker__Button Pokemon__Picker__Button--${theme} ${isLoading ? 'Pokemon__Picker__Button--Disabled' : ''}`

  return (
    <ContentCard>
      <ContentCard.Content>
        <h3 className='Pokemon__Name'>{pokemon.name}</h3>
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
              disabled={isLoading || counter <= MIN_POKEMON}
            >&lt;~</Button>
            <Input
              classes='Pokemon__Picker__Input'
              type='number'
              min={MIN_POKEMON}
              max={MAX_POKEMON}
              step={1}
              value={counter}
              onChange={(e) => setCounter(e.target.value)}
            />
            <Button
              onclick={incrementCounter}
              classes={pokemonPickerButtonClasses}
              disabled={isLoading || counter >= MAX_POKEMON}
            >~&gt;</Button>
          </div>
        </div>
      </ContentCard.Content>
      <ContentCard.Cover imgBorders={false}>
        {isLoading ?
          <img
            src={pokeball}
            className='Pokemon__LoadingPokeball'
            alt={`Loading Pokémon #${counter}`}
          />
          :
          <img
            className='Pokemon__SplashArt'
            src={pokemon.imageUrl}
            alt={`Displaying Pokémon #${counter}`}
          />
        }
      </ContentCard.Cover>
    </ContentCard>
  )
}

export default Pokemon

