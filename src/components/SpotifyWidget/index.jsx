import './SpotifyWidget.css'
import SpotifyCover from './SpotifyCover'
import { useSpotifyNowPlaying } from '../../hooks/useSpotifyNowPlaying'

const SpotifyWidget = () => {
  const { isLoading, spotifyNowPlaying } = useSpotifyNowPlaying()

  console.log({ isLoading, spotifyNowPlaying })

  return (
    <aside className='SpotifyWidget'>
      <SpotifyCover
        album={spotifyNowPlaying.data.album}
        isPlaying={spotifyNowPlaying.isPlaying}
      />
    </aside>
  )
}

export default SpotifyWidget
