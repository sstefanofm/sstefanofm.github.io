import './PokemonType.css'
import { PokemonType as PokemonTypeEnum } from '../../utils/pokemon'
import Theme from '../../context/theme'
import { ThemeContext } from '../../context/ThemeProvider'

import { useContext } from 'react'

const pokemonStyle = (
  color = '#000',
  borderColor = '#000',
  background = '#fff',
) => ({ color, borderColor, background })

const getTypeStyle = (
  type = PokemonTypeEnum.PSYCHIC,
  currentTheme = Theme.LIGHT,
) => {
  const textColor = currentTheme === Theme.LIGHT ? '#222' : '#fff'

  switch (type) {
    case PokemonTypeEnum.NORMAL:
      return pokemonStyle(
        textColor,
        '#888',
        'linear-gradient(135deg, #ccbba3 0%, #aaaa99 50%, #8f7e6d 100%)'
      )

    case PokemonTypeEnum.FIRE:
      return pokemonStyle(
        textColor,
        '#c43e00',
        'linear-gradient(135deg, #ffb347 0%, #f08030 50%, #c43e00 100%)'
      )

    case PokemonTypeEnum.WATER:
      return pokemonStyle(
        textColor,
        '#2a6fbe',
        'linear-gradient(135deg, #7ec8ff 0%, #6890f0 50%, #2a6fbe 100%)'
      )

    case PokemonTypeEnum.ELECTRIC:
      return pokemonStyle(
        textColor,
        '#c9a400',
        'linear-gradient(135deg, #fff799 0%, #f8d030 50%, #c9a400 100%)'
      )

    case PokemonTypeEnum.GRASS:
      return pokemonStyle(
        textColor,
        '#4e8234',
        'linear-gradient(135deg, #a8e063 0%, #78c850 50%, #4e8234 100%)'
      )

    case PokemonTypeEnum.ICE:
      return pokemonStyle(
        textColor,
        '#6bb7c7',
        'linear-gradient(135deg, #d8ffff 0%, #98d8d8 50%, #6bb7c7 100%)'
      )

    case PokemonTypeEnum.FIGHTING:
      return pokemonStyle(
        '#fff',
        '#7d1f1a',
        'linear-gradient(135deg, #d56723 0%, #c03028 50%, #7d1f1a 100%)'
      )

    case PokemonTypeEnum.POISON:
      return pokemonStyle(
        textColor,
        '#682a68',
        'linear-gradient(135deg, #c183c1 0%, #a040a0 50%, #682a68 100%)'
      )

    case PokemonTypeEnum.GROUND:
      return pokemonStyle(
        textColor,
        '#927d44',
        'linear-gradient(135deg, #f0d18c 0%, #e0c068 50%, #927d44 100%)'
      )

    case PokemonTypeEnum.FLYING:
      return pokemonStyle(
        textColor,
        '#6d5e9c',
        'linear-gradient(135deg, #c6b7f5 0%, #a890f0 50%, #6d5e9c 100%)'
      )

    case PokemonTypeEnum.PSYCHIC:
      return pokemonStyle(
        textColor,
        '#a13959',
        'linear-gradient(135deg, #ff92b2 0%, #f85888 50%, #a13959 100%)'
      )

    case PokemonTypeEnum.BUG:
      return pokemonStyle(
        textColor,
        '#6d7815',
        'linear-gradient(135deg, #c6d16e 0%, #a8b820 50%, #6d7815 100%)'
      )

    case PokemonTypeEnum.ROCK:
      return pokemonStyle(
        textColor,
        '#786824',
        'linear-gradient(135deg, #d1c17d 0%, #b8a038 50%, #786824 100%)'
      )

    case PokemonTypeEnum.GHOST:
      return pokemonStyle(
        '#fff',
        '#493963',
        'linear-gradient(135deg, #9b8ac7 0%, #705898 50%, #493963 100%)'
      )

    case PokemonTypeEnum.DRAGON:
      return pokemonStyle(
        '#fff',
        '#4924a1',
        'linear-gradient(135deg, #8d7dff 0%, #7038f8 50%, #4924a1 100%)'
      )

    case PokemonTypeEnum.DARK:
      return pokemonStyle(
        '#fff',
        '#3d2f28',
        'linear-gradient(135deg, #705848 0%, #4f3f36 50%, #2d221c 100%)'
      )

    case PokemonTypeEnum.STEEL:
      return pokemonStyle(
        textColor,
        '#787887',
        'linear-gradient(135deg, #d9d9e8 0%, #b8b8d0 50%, #787887 100%)'
      )

    case PokemonTypeEnum.FAIRY:
      return pokemonStyle(
        textColor,
        '#b96fa1',
        'linear-gradient(135deg, #ffd6f5 0%, #ee99ac 50%, #b96fa1 100%)'
      )

    default:
      return pokemonStyle(
        textColor,
        '#888',
        'linear-gradient(135deg, #ddd 0%, #bbb 50%, #888 100%)'
      )
  }
}

const PokemonType = ({ type }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <li
      className={`PokemonType PokemonType--${type}`}
      title={type}
      style={getTypeStyle(type, theme)}
    >
      {type}
    </li>
  )
}

export default PokemonType

