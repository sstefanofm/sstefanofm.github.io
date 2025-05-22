import TopbarButton from './TopbarButton'

import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const BackNavigation = Object.freeze({
  /* from: to */
    MD:    '/',
    JS:    '/',
    ABOUT: '/',
})

const BackButton = ({ visible = false }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    setCurrentPath(location.pathname.split('/').filter(Boolean)[0])
  }, [location])

  const goBackTo = () => {
    navigate(BackNavigation[currentPath.toUpperCase()])
  }

  const translateNav = (path) => {
    switch (BackNavigation[currentPath.toUpperCase()]) {
      case '/':
        return 'home'
    }
  }

  if (!currentPath)
    return <></>
  return (
    <TopbarButton
      visible={visible}
      onclick={goBackTo}
    >
      &lt;~ {translateNav(currentPath)}
    </TopbarButton>
  )
}

export default BackButton
