import './About.css'

const About = () => {
  return (
    <div className='About'>
      <h2 className='About__Title'>
        <div className='About__TitleIcon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='23'
            height='23'
            fill='currentColor'
            className='bi bi-activity'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z'
            />
          </svg>
        </div>
        about.txt
      </h2>
      <div className='About__ContentWrapper'>
        <div>
          <b>Self-taught software developer.</b>
          <br />
          Computers obsessed me since I was a kid. The first language I started learning was C (using Code::Blocks IDE)
          when I was 15yo. At that moment, programming didn&apos;t catch my attention. Many years later, I started again
          from scratch, learning Java from youtube tutorials and solving basic code problems, writing the source code in
          a .txt file with Windows&apos; Notepad, to later compile it with javac, using cmd.exe.
          <br />
          Since then, CLIs made me feel like a hacker. So a few months later, and after hopping from language to
          language, I started using GNU/Linux in VMs. Now, GNU/Linux is my preferred OS for daily usage and I want to
          keep learning as much as I can. One goal I have is to write a kernel from source.
          <br />
          Javascript is my preferred language to code and work with, and it&apos;s the one I&apos;ve spent most of the
          time learning and practicing. C is the language I use when I want to learn algorithms in depth.
          <br />
          <i>If you really want to understand, make it with C</i>
          <br />
          The 3 most important coding principles: KISS, DRY, and Clean Code At All Costs.
        </div>
        <div>
          <b>FAQ</b>
          <div>website font</div>
          <div>preferred distro</div>
        </div>
      </div>
    </div>
  )
}

export default About
