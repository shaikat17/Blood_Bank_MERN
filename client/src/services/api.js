import axios from 'axios'

const api = axios.create({baseURL: import.meta.env.VITE_APP_BASEURL})

api.interceptors.request.use((req) => {
    if(localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return req
})

export default api