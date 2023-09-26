import './Button.css'

const Button = ({ onclick, children }) => {
  return (
    <button
      className='Button'
      onClick={onclick}
    >
      {children}
    </button>
  )
}

export default Button
