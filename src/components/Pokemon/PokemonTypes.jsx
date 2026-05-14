import './PokemonTypes.css'
import PokemonType from './PokemonType'

const PokemonTypes = ({ types = [] }) => {
  return (
    <ul className='PokemonTypes'>
      {types.map(type => (
        <PokemonType
          key={type}
          type={type}
        />
      ))}
    </ul>
  )
}

export default PokemonTypes

