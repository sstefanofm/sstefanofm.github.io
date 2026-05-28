import { useEffect, useState } from 'react'

const BASE_URL = 'https://sstefanofm-spotify-now-playing.vercel.app/api/now-playing'

const baseSpotifyNowPlaying = {
  isPlaying: false,
  data: {
    paused: true,
    duration: {},
    album: {},
    artists: [],
    song: {},
  },
}

export const useSpotifyNowPlaying = () => {
  const [spotifyNowPlaying, setSpotifyNowPlaying] = useState(baseSpotifyNowPlaying)
  const [isLoading, setIsLoading] = useState(true)

  const getSpotifyNowPlaying = async () => {
    setIsLoading(true)

    try {
      const response = await fetch(BASE_URL)
      const snp = await response.json()

      setSpotifyNowPlaying(prev => ({
        ...prev,
        ...snp,
      }))
    } catch (err) {
      setSpotifyNowPlaying(baseSpotifyNowPlaying)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getSpotifyNowPlaying()
  }, [])

  return {
    isLoading,
    spotifyNowPlaying,
  }
}
