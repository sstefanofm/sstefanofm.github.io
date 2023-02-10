import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const showIcon = name => {
    const endpoint = window.location.href.slice(
        window.location.href.lastIndexOf('/') + 1
    )
    if (endpoint === name || (name === 'home' && endpoint === ''))
        return <FontAwesomeIcon icon={solid('check')} size="xs" />
}

const Item = ({ name }) => {
    return (
        <li className="Item">
            <a href={name}>
                {showIcon(name)} <span>{name}</span>
            </a>
        </li>
    )
}

export default Item
