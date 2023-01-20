import './Nav.css'
// import logo from './binary.svg'
import logo from './skull.png'

const Nav = () => {
    return (
        <div>
            <div className="Nav">
                <img src={ logo } className="Nav-logo" alt="logo" />
                <h1><a href="https://github.com/sstefanofm" target="_blank">sstefanofm</a></h1>

                <ul className="Nav-items">
                    <li><a>home</a></li>
                    <li><a>about</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
