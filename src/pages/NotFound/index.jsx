import './NotFound.css'
import Content from '../../components/Content'
import Button from '../../components/Button'
import { Home, Question } from '../../components/Icon'
import ThemeContext from '../../context/ThemeContext'

import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Content>
      <Content.Header title='404'>
        <Question
          width={23}
          height={23}
          classes={['GrimRotation']}
        />
      </Content.Header>
      <Content.Body>
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
                classes={[]}
              />
              <span>Go home</span>
            </NavLink>
          </Button>
        </div>
      </Content.Body>
    </Content>
  )
}

export default NotFound
