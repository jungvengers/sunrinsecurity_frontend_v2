import axios from 'axios'

const getAPI = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: true
})