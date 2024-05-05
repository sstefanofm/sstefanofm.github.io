import BinaryTime from '../../components/BinaryTime'
import Content from '../../components/Content'
import { Brilliance } from '../../components/Icon'


const Js = () => {
  return (
    <Content>
      <Content.Header
        title='Js'
        extension='js'
      >
        <Brilliance
          width={23}
          height={23}
          classes={['GrimRotation']}
        />
      </Content.Header>
      <Content.Body>
        <BinaryTime />
      </Content.Body>
    </Content>
  )
}

export default Js
