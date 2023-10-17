import './Footer.css'
import Card from '../Card'
import { AnchorButton } from '../Button/index'
import { LinkedIn, Github } from '../Icon'

const Footer = () => {
  return (
    <Card
      row={true}
      border={true}
      wrap={true}
      classes='Footer'
    >
      <div></div>
      <div>
        <AnchorButton href='https://linkedin.com/in/stefano-federici-marsegani'>
          <LinkedIn
            width={30}
            height={30}
          />
        </AnchorButton>
        <AnchorButton href='https://github.com/sstefanofm'>
          <Github
            width={30}
            height={30}
          />
        </AnchorButton>
      </div>
    </Card>
  )
}

export default Footer
