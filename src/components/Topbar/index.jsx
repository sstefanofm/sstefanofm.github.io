import './Topbar.css'
import ThemeContext from '../../context/ThemeContext'
import Button from '../Button'

import { useContext } from 'react'

const renderTitle = title => {
  if (title.enabled)
    return (
      <h2 className='Topbar__Title'>
        /{title.text}.{title.extension}
      </h2>
    )
}

const Topbar = ({
  title = { enabled: false, text: 'topbar', extension: 'txt' },
  close = {
    enabled: false,
    setState: () => {},
  },
  children,
}) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`Topbar Topbar--${theme}`}>
      <div className='Topbar__Info'>
        {children /* typically an icon */}
        {renderTitle(title)}
      </div>
      <div className='Topbar__Buttons'>
        <Button
          onclick={() => close.setState(true)}
          isDisabled={!close.enabled}
        >
          ×
        </Button>
      </div>
    </div>
  )
}

export default Topbar
