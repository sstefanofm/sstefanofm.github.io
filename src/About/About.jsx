import './About.css'
import MainContent from '../MainContent/MainContent'
import ContentHeader from '../MainContent/ContentHeader/ContentHeader'
import ActivityIcon from '../Icons/ActivityIcon'
import ContentBody from '../MainContent/ContentBody/ContentBody'

const About = () => {
  return (
    <MainContent>
      <ContentHeader title='About_me'>
        <ActivityIcon
          width={23}
          height={23}
          modifiers={['GrimRotation', 'LightTheme']}
        />
      </ContentHeader>
      <ContentBody>
        <div className='About'>
          <aside className='AsideMeCard'>
            <section>
              <h3 className='AsideMeCard__Title'>Stefano Federici Marsegani</h3>
              <p className='AsideMeCard__Description'>Self taught software developer</p>
            </section>
            <div>
              <img
                className='AsideMeCard__Img'
                src='/img/me.jpg'
                alt='Me'
              />
            </div>
          </aside>
          <section className='SectionAboutMe'>
            <h3 className='SectionAboutMe__Title'>Some things about me</h3>
            <p>
              My interest in computers started since my parents bought one when I was ~6y/o. At that time, I used to
              play <code>Kirby</code>, <code>Counter Strike 1.6</code>, and <code>Need For Speed</code> games. I always
              wondered how videogames were made, so when I was 15y/o I started learning <code>C</code> (using{' '}
              <code>Code::Blocks</code> IDE). After studying diverse university careers, I realised my true passion was
              programming.
            </p>
            <p>
              I started coding again from scratch learning <code>Java</code> from video tutorials and solving basic code
              problems, writing them with <code>Notepad</code> and compiling the code manually with <code>javac</code>{' '}
              using <code>Windows</code> <code>cmd</code>. Since then, CLIs made me feel like a hacker. A few months
              later, I started using <code>GNU/Linux</code> in <code>virtual machines</code>. Now, I always use some
              distro as my preferred OS for daily usage and I want to keep learning as much as I can. One goal I have is
              to write a <code>kernel</code> from source.
            </p>
            <p>
              <code>Javascript</code> is my preferred language to work with, and it&apos;s the one I&apos;ve spent most
              of the time learning and practicing. <code>C</code> is the language I use when I want to learn algorithms
              in depth.
            </p>
            <p>
              <i className='SectionAboutMe__Quote'>If you really want to understand, make it with C.</i>
            </p>
            <p>The 3 most important coding principles: KISS, DRY, and Clean Code At All Costs.</p>
          </section>
        </div>
      </ContentBody>
    </MainContent>
  )
}

export default About
