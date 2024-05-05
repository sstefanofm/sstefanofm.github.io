import ThemeContext from '../../context/ThemeContext'
import Content from '../../components/Content'
import { Brilliance } from '../../components/Icon'

import { useContext } from 'react'
import BinaryTime from '../../components/BinaryTime'

const Js = () => {
  const { theme } = useContext(ThemeContext)

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
