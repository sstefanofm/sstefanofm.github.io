import './SpotifyWidget.css'
import SpotifyCover from './SpotifyCover'
import SpotifyInfo from './SpotifyInfo'
import { useSpotifyNowPlaying } from '../../hooks/useSpotifyNowPlaying'

const SpotifyWidget = () => {
  const { isLoading, spotifyNowPlaying } = useSpotifyNowPlaying()

  return (
    <aside className='SpotifyWidget'>
      <SpotifyCover
        album={spotifyNowPlaying.data.album}
        isPlaying={spotifyNowPlaying.isPlaying}
      />
      {spotifyNowPlaying.isPlaying
        ? (<SpotifyInfo info={spotifyNowPlaying.data} />)
        : (<span className='SpotifyWidget__NotPlaying'>not playing anything</span>)
      }
    </aside>
  )
}

export default SpotifyWidget
