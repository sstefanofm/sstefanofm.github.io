import Content from '../../components/Content'
import { JavaScript } from '../../components/Icon'

import MeWhenCoding from '../../components/MeWhenCoding'
import BinaryTime from '../../components/BinaryTime'

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
        <MeWhenCoding />
        <BinaryTime />
      </Content.Body>
    </Content>
  )
}

export default Js
