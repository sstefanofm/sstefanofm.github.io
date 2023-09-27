import './NotFound.css'
import MainContent from '../MainContent'
import ContentHeader from '../MainContent/ContentHeader'
import ContentBody from '../MainContent/ContentBody'
import { Question, Home } from '../Icon'
import Button from '../Button'
import ThemeContext from '../../context/ThemeContext'

import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <MainContent>
      <ContentHeader title='404'>
        <Question
          width={23}
          height={23}
          modifiers={['GrimRotation', 'LightTheme']}
        />
      </ContentHeader>
      <ContentBody>
        <div className='NotFound'>
          <p>
            The requested URL <code>{location.pathname}</code> does not exist.
          </p>
          <Button onclick={() => {}}>
            <NavLink
              className={`GoHomeLink GoHomeLink--${theme}`}
              to='/'
            >
              <Home
                width={20}
                height={20}
              />
              <span>Go home</span>
            </NavLink>
          </Button>
        </div>
      </ContentBody>
    </MainContent>
  )
}

export default NotFound
