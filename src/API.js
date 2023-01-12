import axios from "axios"

const myApi = axios.create({
    baseURL: "https://ncnews.onrender.com/api"
});

export const fetchArticles = () => {
    return myApi.get('https://ncnews.onrender.com/api/articles')
    .then((response) => {
        return response.data
    })
}

export const fetchArticleID = (article_id) => {
    return myApi.get(`/articles/${article_id}`)
    .then((response) => {
        return response.data
    })
}

export const patchVotes = (article_id) => {
    return myApi.get(`/articles/${article_id}`, {inc_vote: 1})
    .then((response) => {
        return response.data
    })
}