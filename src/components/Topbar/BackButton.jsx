import TopbarButton from './TopbarButton'

import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const BackNavigation = Object.freeze({
  /* from: to */
    MD:    '/',
    JS:    '/',
    ABOUT: '/',
})

const BackButton = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    setCurrentPath(location.pathname.split('/').filter(Boolean)[0])
  }, [location])

  const goBackTo = () => {
    navigate(BackNavigation[currentPath.toUpperCase()])
  }

  return (
    <TopbarButton
      visible={!!currentPath}
      onclick={goBackTo}
    >
      &lt;~
    </TopbarButton>
  )
}

export default BackButton
