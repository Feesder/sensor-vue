import $api from "@/http/axios";

export const authService = {
    register(body) {
        const url = '/api/v1/auth/registration'
        return $api.post(url, body)
    },
    login(user, password) {
        const url = '/api/v1/auth/login'
        const body = {
            user, password
        }
        return $api.post(url, body)
    },
    logout() {
        const url = '/api/v1/auth/logout'
        return $api.post(url)
    },
    refresh() {
        const url = '/user/refresh'
        return $api.get(url)
    }
}