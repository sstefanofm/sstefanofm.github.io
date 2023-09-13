import './NotFound.css'
import MainContent from '../MainContent'
import ContentHeader from '../MainContent/ContentHeader'
import ContentBody from '../MainContent/ContentBody'
import { Question } from '../Icons/Question'
import { NavLink } from 'react-router-dom'
import HomeIcon from '../Icons/Home'

const NotFound = () => {
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
          <NavLink
            className='GoHomeLink'
            to='/'
          >
            <HomeIcon
              width={20}
              height={20}
            />
            <span>Go home</span>
          </NavLink>
        </div>
      </ContentBody>
    </MainContent>
  )
}

export default NotFound
