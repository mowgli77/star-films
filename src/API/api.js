import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

export const getFilmsAPI = () => {
    return instance.get('films/')
}
export const getSomethingAPI = (url) => {
    return axios.get(url)
}