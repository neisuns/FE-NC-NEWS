import {Link} from "react-router-dom"
import { useState } from "react"
import patchVotes from "../API"

const ArticleCard = ({ article }) => {
    const {author, created_at, title, topic, article_id } = article;
    const myDate = created_at.substring(0, 10);
    const myTopic = topic.charAt(0).toUpperCase() + topic.slice(1);

    return (
        <section className="ArticleCard">
            <Link to={`/articles/${article_id}`}>
                <h3>{title}</h3>
            </Link>
            <div className="Article">
                <p>Topic: {myTopic}</p>
                <p>Author: <span>{author}</span></p>
                <p>Date: {myDate}</p>
            </div>
        </section>
    )
}
export default ArticleCard