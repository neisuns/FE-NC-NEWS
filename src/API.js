import axios from "axios"

const myApi = axios.create({
    baseURL: "https://ncnews.onrender.com/api"
});

export const fetchAPI = () => {
    return myApi.get("/").then((response) => {
        return response.data
    })
}

export const fetchArticles = () => {
    return myApi.get('https://ncnews.onrender.com/api/articles')
    .then((response) => {
        return response.data
    })
}