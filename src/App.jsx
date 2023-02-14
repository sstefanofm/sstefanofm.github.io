import './App.css'
import Nav from './Nav/Nav'
import Projects from './Projects/Projects'
import { Routes, Route } from 'react-router-dom'

const App = () => {
    const imgPath = `/img/`

    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Projects imgpath={imgPath} />} />
                <Route path="/about" element={<> </>} />
            </Routes>
        </>
    )
}

export default App
