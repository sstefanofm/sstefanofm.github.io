import './Project.css'

const Project = ({ name, description, src, href }) => {
    return (
        <a className="Project" href={href} target="_blank" rel="noreferrer">
            <div className="Project-Header">
                <div className="Project-ImgContainer">
                    <img src={src} alt={src} />
                </div>
                <div className="Project-Name">
                    /{''}* {name} */
                </div>
            </div>
            <div className="Project-Description">{description}</div>
        </a>
    )
}

export default Project
