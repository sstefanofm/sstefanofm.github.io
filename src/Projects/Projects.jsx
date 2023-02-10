import './Projects.css'
import Project from './Project/Project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Projects = ({ imgpath }) => {
    let counter = 0
    const projects = [
        {
            src: 'yetid_logo.png',
            name: 'Yetid.',
            description:
                "This is a website I'm currently coding for a university final subject test. Its code majority is written in vanilla PHP.",
            href: 'https://github.com/sstefanofm/yetid',
        },
    ]
    projects.map(
        p => (p.src = `${imgpath}${p.src}`)
    ) /* adds full src image path */

    return (
        <div className="Projects">
            <h2>
                <FontAwesomeIcon
                    className="Projects-TitleIcon"
                    icon={solid('code')}
                    size="xs"
                    pulse
                />{' '}
                projects.txt
            </h2>
            {projects.map(p => (
                <Project
                    key={++counter}
                    src={p.src}
                    name={p.name}
                    description={p.description}
                    href={p.href}
                />
            ))}
        </div>
    )
}

export default Projects
