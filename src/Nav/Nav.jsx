import './Nav.css'
import logo from './skull.png'
import Item from './Item/Item'

const Nav = () => {
    let counter = 0;
    const listItems = [
        {
            name: 'home',
        },
        {
            name: 'about',
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
                {listItems.map(item => (
                    <Item
                        key={++counter}
                        name={item.name}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Nav
