import './Projects.css'
import Project from './Project/Project'

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
                <div className="Projects-TitleIcon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-code-slash"
                        viewBox="0 0 16 16"
                    >
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg>
                </div>
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
