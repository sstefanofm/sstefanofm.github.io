import './Content.css'
import Card from '../Card'
import Topbar from '../Topbar'

const Content = ({ children }) => {
  return (
    <Card
      row={false}
      border={true}
      wrap={false}
      classes='Content'
    >
      {children}
    </Card>
  )
}

Content.Header = ({ title = 'header', extension = 'txt', children }) => {
  return (
    <Card
      row={true}
      border={false}
      wrap={true}
      classes='ContentHeader'
    >
      <Topbar title={{ enabled: true, text: title.toLowerCase(), extension }}>
        {children}
      </Topbar>
    </Card>
  )
}

Content.Body = ({ children, row = true }) => (
  <Card
    row={row}
    border={false}
    wrap={true}
    classes='ContentBody'
  >
    {children}
  </Card>
)

Content.Header.displayName = 'ContentHeader'
Content.Body.displayName = 'ContentBody'

export default Content
