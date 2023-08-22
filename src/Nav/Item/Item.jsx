import './Item.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// const setIcon = to => {
//     const endpoint = window.location.href.slice(
//         window.location.href.lastIndexOf('/')
//     )
//     if (to === endpoint)
//         return (
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 className="bi bi-check"
//                 viewBox="0 0 16 16"
//             >
//                 <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
//             </svg>
//         )
// }

const Item = ({ name, to }) => {
  return (
    <li className='Item'>
      <Link to={to}>
        <span>{name}</span>
      </Link>
    </li>
  )
}

Item.propTypes = {
  name: PropTypes.string,
  to: PropTypes.string,
}

export default Item
