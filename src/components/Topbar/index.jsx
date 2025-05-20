import './Topbar.css'
import ThemeContext from '../../context/ThemeContext'
import TopbarButton from './TopbarButton'
import BackButton from './BackButton'

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
  back = { enabled: false },
  close = { enabled: false, onclick: () => {} },
  children,
}) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`Topbar Topbar--${theme}`}>
      <div className='Topbar__Buttons__Left'>
        <BackButton visible={back.enabled} />
      </div>
      <div className='Topbar__Info'>
        {children /* typically an icon */}
        {renderTitle(title)}
      </div>
      <div className='Topbar__Buttons__Right'>
        <TopbarButton visible={false}>_</TopbarButton>
        <TopbarButton visible={false}>▢</TopbarButton>
        <TopbarButton
          visible={close.enabled}
          onclick={close.onclick}
        >
          ×
        </TopbarButton>
      </div>
    </div>
  )
}

export default Topbar
