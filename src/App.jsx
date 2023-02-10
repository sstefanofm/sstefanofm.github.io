import './App.css'
import Nav from './Nav/Nav'
import Projects from './Projects/Projects'

const App = () => {
    const imgPath = `/img/`

    return (
        <>
            <Nav />
            <Projects imgpath={imgPath} />
        </>
    )
}

export default App
