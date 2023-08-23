import './About.css'

const About = () => {
  return (
    <div className='About'>
      <h2 className='About__Title'>
        <div className='About__TitleIcon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='26'
            height='26'
            fill='currentColor'
            className='bi bi-code-slash'
            viewBox='0 0 16 16'
          >
            <path d='M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z' />
          </svg>
        </div>
        about.txt
      </h2>
      <div className='About__ContentWrapper'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius amet debitis saepe dicta atque eaque, aliquid
        vero veritatis? Fugiat perferendis vero possimus voluptate minus corrupti eum, sint culpa dolor!
      </div>
    </div>
  )
}

export default About
