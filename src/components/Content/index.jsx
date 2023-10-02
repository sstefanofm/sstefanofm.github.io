import './Content.css'
import Card from '../Card'

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

Content.Header = ({ title = 'header', children }) => (
  <Card
    row={true}
    border={false}
    classes='ContentHeader'
  >
    <h2 className='ContentHeader__Title'>/{title.toLowerCase()}.txt</h2>
    {children}
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
