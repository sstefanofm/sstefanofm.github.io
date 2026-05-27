import './SpotifyCover.css'

import { Music } from '../Icon'
import Theme from '../../context/theme'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider'

const SpotifyCover = ({ album = {} }) => {
  const { theme } = useContext(ThemeContext)

  const hasAlbum = Object.keys(album).length > 0
  const coverClasses = hasAlbum
    ? ''
    : `SpotifyCover--NoAlbum ${theme === Theme.LIGHT ? 'SpotifyCover--NoAlbum--Light' : 'SpotifyCover--NoAlbum--Dark'}`

  return (
    <div className={`SpotifyCover ${coverClasses}`}>
      {!hasAlbum ? (
        <Music
          width={24}
          height={24}
        />
      ) : (
<></>
      )}
    </div>
  )
}

export default SpotifyCover
