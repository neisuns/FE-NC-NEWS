import {Link, BrowserRouter} from "react-router-dom"

const ArticleCard = ({ article }) => {
    const {author, created_at, title, topic } = article;
    const myTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
    const myDate = created_at.substring(0, 10);

    return (<BrowserRouter>
        <section className="ArticleCard">
            <Link to={`/articles/${article.article_id}`}>
                <h1>{article.title}</h1>
            </Link>
            <div className="Article">
                <p>Topic: {myTopic}</p>
                <p>Author: <span>{author}</span></p>
                <p>Date: {myDate}</p>
            </div>
        </section>
        </BrowserRouter>
    )
}
export default ArticleCard