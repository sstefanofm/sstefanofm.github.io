import './Markdown.css'
import Md from './Md'
import Content from '../../components/Content'
import ContentCard from '../../components/ContentCard'
import { Button } from '../../components/Button'
import { Brilliance } from '../../components/Icon'
import { getProjectByRepoName } from '../../data/projects'

import { useParams } from 'react-router-dom'

const Markdown = () => {
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
            <Button>Go to repository</Button>
          </ContentCard.Content>
        </ContentCard>

        <Md repoName={repoName} />

      </Content.Body>
    </Content>
  )
}

export default Markdown
