import axios from "axios"

const $api = axios.create({
    withCredentials: true,
    baseURL: "https://sensor-rest-api.herokuapp.com"
})

$api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use(config => {
    return config;
}, async error => {
    const request = error.config;
    if (error.response.status === 401) {
        const response = await axios.get('https://sensor-rest-api.herokuapp.com/user/refresh?refreshToken=' + localStorage.getItem("refresh"), {withCredentials: true})
        localStorage.setItem('token', response.data.accessToken)
        return $api.request(request)
    }
    throw error
})

export default $api;