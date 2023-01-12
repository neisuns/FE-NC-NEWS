import {useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { fetchArticleID } from "../API";
import { fetchCommentsViaArticleID } from "../API";
import CommentCard from "./CommentCard";

const SingleArticle = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetchArticleID(article_id).then((articleInfo) => {
            setArticle(articleInfo.article);
            setIsLoading(false);
        });
        fetchCommentsViaArticleID(article_id).then((commentInfo) => {
            setComments(commentInfo.comments)
            setIsLoading(false)
        })
        .catch((error) => {
            setIsError(true);
            setIsLoading(false)
        })
    }, [article_id])
    
    const {author, created_at, title, topic, body, comments_count } = article;

    if (isLoading) {
        return <p>Loading... Please wait</p>;
    } 
    return (
        <main className='Article'>
            <h2>{title}</h2>
            <p>Author: <span>{author}</span></p>
            <p>Date: {created_at}</p>
            <p>Topic: {topic.charAt(0).toUpperCase() + topic.slice(1)}</p>
            <p> Comments: {comments_count}</p>
            <main>{body}</main>
            
            <section className="CommentCard">
                <h3>Comments</h3>
                  {comments.map(comment => {
                    return (
                    <li key={`comment${comment.comments_count}`}>
                        <CommentCard comment={comment}/>
                    </li>
                    );
                  })
                }
            </section>
        </main>
)}

export default SingleArticle