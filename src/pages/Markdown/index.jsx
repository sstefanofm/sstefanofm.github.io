import './Markdown.css'
import Md from './Md'
import Content from '../../components/Content'
import { Brilliance } from '../../components/Icon'

import { useParams } from 'react-router-dom'

const Markdown = () => {
  let { repoName } = useParams()

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
        <Md repoName={repoName} />
      </Content.Body>
    </Content>
  )
}

export default Markdown
