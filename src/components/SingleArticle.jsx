import {useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { fetchArticleID } from "../API";

const SingleArticle = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        fetchArticleID(article_id).then((articleInfo) => {
            setArticle(articleInfo.article);
            setIsLoading(false);
        });
    }, [article_id])
    
    const {author, created_at, title, topic, body } = article;

    if (isLoading) {
        return <p>Loading... Please wait</p>;
    } 
    return (
        <article className='Article'>
            <h2>{article.title}</h2>
            <p>Author: <span>{article.author}</span></p>
            <p>Date: {article.created_at}</p>
            <p>Topic: {article.topic.charAt(0).toUpperCase() + topic.slice(1)}</p>
            <main>{article.body}</main>
        </article>
    )
}

export default SingleArticle