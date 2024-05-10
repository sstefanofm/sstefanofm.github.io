import BinaryTime from '../../components/BinaryTime'
import Content from '../../components/Content'
import { JavaScript } from '../../components/Icon'

const Js = () => {
  return (
    <Content>
      <Content.Header
        title='Js'
        extension='js'
      >
        <JavaScript
          width={23}
          height={23}
          classes={['GrimRotation', 'Bordered']}
        />
      </Content.Header>
      <Content.Body>
        <BinaryTime />
      </Content.Body>
    </Content>
  )
}

export default Js
