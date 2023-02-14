import './Nav.css'
import logo from './skull.png'
import Item from './Item/Item'

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
        <div className="Nav">
            <div className="Logo">
                <img src={logo} className="Nav-logo" alt="logo" />
                <h1>
                    <a
                        href="https://github.com/sstefanofm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        sstefanofm
                    </a>
                </h1>
            </div>

            <ul className="Nav-items">
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
