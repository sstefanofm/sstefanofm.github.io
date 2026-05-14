export const PokemonType = Object.freeze({
  NORMAL:   'normal',
  FIRE:     'fire',
  WATER:    'water',
  ELECTRIC: 'electric',
  GRASS:    'grass',
  ICE:      'ice',
  FIGHTING: 'fighting',
  POISON:   'poison',
  GROUND:   'ground',
  FLYING:   'flying',
  PSYCHIC:  'psychic',
  BUG:      'bug',
  ROCK:     'rock',
  GHOST:    'ghost',
  DRAGON:   'dragon',
  DARK:     'dark',
  STEEL:    'steel',
  FAIRY:    'fairy',
})

const isPokemonType = (type = '') => Object.values(PokemonType)
  .includes(type)

export const parsePokemonTypes = (types = []) => types
  .map(({ type }) => type.name)
  .filter(isPokemonType)
  

