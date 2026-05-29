import './SpotifyInfo.css'
import { ThemeContext } from '../../context/ThemeProvider'
import Theme from '../../context/theme'
import SpotifyProgressBar from './SpotifyProgressBar'

import { Fragment, useContext } from 'react'

const SpotifyInfo = ({ info = {} }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className='SpotifyInfo'>
      <a
        className={`SpotifyInfo__Song ${theme === Theme.LIGHT ? 'SpotifyInfo__Song--Light' : 'SpotifyInfo__Song--Dark'}`}
        href={info.song.url}
        target='_blank'
        rel='noreferrer'
        title={info.song.name}
      >
        {info.song.name}
      </a>

      <div className='SpotifyInfo__Artists'>
        {info.artists.map((artist, i) => (
          <Fragment key={artist.url}>
            <a
              href={artist.url}
              className={`SpotifyInfo__Artists__Artist ${theme === Theme.LIGHT ? 'SpotifyInfo__Artists__Artist--Light' : 'SpotifyInfo__Artists__Artist--Dark'}`}
              target='_blank'
              rel='noreferrer'
              title={artist.name}
            >
              {artist.name}
            </a>
            {i < info.artists.length - 1 ? (<span>,&nbsp;</span>) : (<></>)}
          </Fragment>
        ))}
      </div>

      <SpotifyProgressBar
        currentTimeMs={info.duration.progressMs}
        totalTimeMs={info.duration.totalMs}
      />
    </div>
  )
}

export default SpotifyInfo
