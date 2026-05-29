import './SpotifyProgressBar.css'
import Theme from '../../context/theme'
import { ThemeContext } from '../../context/ThemeProvider'

import { useContext, useEffect, useState } from 'react'

const SpotifyProgressBar = ({ currentTimeMs = 0, totalTimeMs = 10000 }) => {
  const { theme } = useContext(ThemeContext)
  const [elapsed, setElapsed] = useState(currentTimeMs)

  /* reset if track changes */
  useEffect(() => {
    setElapsed(currentTimeMs)
  }, [currentTimeMs])

  useEffect(() => {
    if (elapsed >= totalTimeMs)
      return

    const updateElapsedTimeout = setTimeout(() => {
      setElapsed(e => e + 1000)
    }, 1000)

    return () => clearTimeout(updateElapsedTimeout)
  }, [elapsed, totalTimeMs])

  const percent = totalTimeMs > 0 ? (elapsed / totalTimeMs) * 100 : 0

  return (
    <div className={`SpotifyProgressBar ${theme === Theme.LIGHT ? 'SpotifyProgressBar--Light' : 'SpotifyProgressBar--Dark'}`}>
      <div
        className={`SpotifyProgressBar__Fill ${theme === Theme.LIGHT ? 'SpotifyProgressBar__Fill--Light' : 'SpotifyProgressBar__Fill--Dark'}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  )
}

export default SpotifyProgressBar
