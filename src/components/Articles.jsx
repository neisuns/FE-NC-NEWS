import { useState, useEffect } from "react";
import {fetchArticles} from "../API"
import ArticleCard from "./ArticleCard"


export const Articles = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        fetchArticles()
        .then((articleList) => {
            setArticles(articleList.articles)
            setIsLoading(false)
        })
        .catch((error) => {
            setIsError(true);
            setIsLoading(false);
        })
    }, [])

    if (isLoading) {
        return <p>Loading... Please wait</p>;
    } 
    return (
        <div>
            <h2>Articles</h2>
            <ul>
            {articles.map(article => (
                <li key={article.article_id}>
                <ArticleCard article =  {article}/>
                </li>)
            )
        }
            </ul>
        </div>
    )
    }

export default Articles