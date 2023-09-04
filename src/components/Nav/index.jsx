import './Nav.css'
import logo from './skull.png'
import Item from './Item'

const Nav = () => {
  const listItems = [
    {
      name: 'home',
      to: '/',
    },
    {
      name: 'about',
      to: '/about',
    },
  ]

  return (
    <div className='Nav'>
      <div className='Nav__Logo'>
        <img
          src={logo}
          className='Nav__Img'
          alt='logo'
        />
        <h1 className='Nav__Title'>
          <a
            className='Nav__Title__Link'
            href='https://github.com/sstefanofm'
            target='_blank'
            rel='noreferrer'
          >
            sstefanofm
          </a>
        </h1>
      </div>

      <ul className='Nav__Items'>
        {listItems.map((item, i) => (
          <Item
            key={`${i}${item.name}`}
            name={item.name}
            to={item.to}
          />
        ))}
      </ul>
    </div>
  )
}

export default Nav
