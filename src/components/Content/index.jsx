import './Content.css'
import Card from '../Card'
import Topbar from '../Topbar'

const Content = ({ children }) => {
  return (
    <Card
      row={false}
      border={true}
      classes='Content'
    >
      {children}
    </Card>
  )
}

Content.Header = ({ title = 'header', extension = 'txt', children }) => (
  <Card
    row={true}
    border={false}
    classes='ContentHeader'
  >
    <Topbar title={{ enabled: true, text: title.toLowerCase(), extension: extension }}>{children}</Topbar>
  </Card>
)

Content.Body = ({ children }) => (
  <Card
    row={true}
    border={false}
    classes='ContentBody'
  >
    {children}
  </Card>
)

Content.Header.displayName = 'ContentHeader'
Content.Body.displayName = 'ContentBody'

export default Content
