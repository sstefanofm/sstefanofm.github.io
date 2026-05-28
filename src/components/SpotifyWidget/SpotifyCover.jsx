import './SpotifyCover.css'
import { Music } from '../Icon'
import Theme from '../../context/theme'
import { ThemeContext } from '../../context/ThemeProvider'

import { useContext } from 'react'

const IMG_SIZE = 46.8

const SpotifyCover = ({ album = {}, isPlaying = false }) => {
  const { theme } = useContext(ThemeContext)

  const coverClasses = isPlaying
    ? 'SpotifyCover--Album'
    : `SpotifyCover--NoAlbum ${theme === Theme.LIGHT ? 'SpotifyCover--NoAlbum--Light' : 'SpotifyCover--NoAlbum--Dark'}`

  return (
    <div className={`SpotifyCover ${coverClasses}`}>
      {!isPlaying ? (
        <Music
          width={24}
          height={24}
        />
      ) : (
        <img
          src={album.cover.small.url}
          alt={album.name}
          title={album.name}
          width={IMG_SIZE}
          height={IMG_SIZE}
        />
      )}
    </div>
  )
}

export default SpotifyCover
