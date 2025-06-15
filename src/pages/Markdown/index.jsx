import './Markdown.css'
import Md from './Md'
import Content from '../../components/Content'
import ContentCard from '../../components/ContentCard'
import { Button } from '../../components/Button'
import { Brilliance } from '../../components/Icon'
import { getProjectByRepoName } from '../../data/projects'
import ThemeContext from '../../context/ThemeContext'

import { useParams } from 'react-router-dom'
import { useContext } from 'react'

const Markdown = () => {
  const { theme } = useContext(ThemeContext)
  let { repoName } = useParams()
  const project = getProjectByRepoName(repoName)

  return (
    <Content>
      <Content.Header
        title={repoName}
        extension='md'
      >
        <Brilliance
          width={23}
          height={23}
          classes={['GrimRotation']}
        />
      </Content.Header>
      <Content.Body>

        <ContentCard>
          <ContentCard.Cover
            widthPerc={15}
            imgBorders={false}
            minWidth={70}
          >
            <img
              src={`/img/${project.imgsrc}`}
              alt={`${project.name} repo image`}
            />
          </ContentCard.Cover>
          <ContentCard.Content>
            {project.description}
            <div className='Markdown__GoToRepo'>
              <Button>
                <a
                  className={`GoToRepo GoToRepo--${theme}`}
                  href={`https://github.com/sstefanofm/${repoName}`}
                  target='_blank'
                  rel='noreferrer'
                >Go to repository</a>
              </Button>
            </div>
          </ContentCard.Content>
        </ContentCard>

        <Md repoName={repoName} />

      </Content.Body>
    </Content>
  )
}

export default Markdown
