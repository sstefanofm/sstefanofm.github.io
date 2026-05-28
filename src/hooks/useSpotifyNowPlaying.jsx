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

  useEffect(() => {
    try {
      setSpotifyNowPlaying(baseSpotifyNowPlaying)
    } catch (err) {
      setSpotifyNowPlaying(baseSpotifyNowPlaying)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    isLoading,
    spotifyNowPlaying,
  }
}
