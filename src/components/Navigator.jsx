import { Link, BrowserRouter } from "react-router-dom"

const Navigator = () => {
    return (
   
        <nav id="navigator">
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/articles">Articles</Link>
        </nav>

    )
}

export default Navigator