import './Project.css'

const Project = ({ name, description, src, href }) => {
    return (
        <a className="Project" href={href} target="_blank">
            <div className="Project-ImgContainer">
                <img src={src} />
            </div>
            <div className="Project-TextContent">
                <div>/* {name} */</div>
                <div>{description}</div>
            </div>
        </a>
    )
}

export default Project
