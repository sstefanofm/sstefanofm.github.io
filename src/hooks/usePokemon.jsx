import { capitalize } from '../utils/capitalize'

import { useEffect, useState } from 'react'

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

export const usePokemon = (pokemonId = 63 /* 63 abra */) => {
  const [pokemon, setPokemon] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const getPokemon = async () => {
    setIsLoading(true)

    const response = await fetch(baseUrl + pokemonId)
    const apiPokemon = await response.json()

    setPokemon({
      id: apiPokemon.id,
      name: capitalize(apiPokemon.name),
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${apiPokemon.id}.png`,
    })
    setIsLoading(false)
  }

  useEffect(() => {
    getPokemon(pokemonId)
  }, [pokemonId])

  return {
    pokemon,
    isLoading,
    isAbra: pokemon.id === 63
  }
}

