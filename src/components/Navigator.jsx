import { Link, BrowserRouter } from "react-router-dom"

const Navigator = () => {
    return (
        <BrowserRouter>
        <nav id="navigator">
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/articles">Articles</Link>
        </nav>
        </BrowserRouter>
    )
}

export default Navigator