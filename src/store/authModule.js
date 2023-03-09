import { createStore } from 'vuex'
import { authService } from "@/service/authService"
import $api from "@/http/axios"
import axios from "axios";

export const authModule = createStore({
    namespaced: true,
    state() {
        return {
            credentials: {
                token: localStorage.getItem('token') || null,
                refresh: localStorage.getItem('refresh') || null,
                userRole: localStorage.getItem('userRole') || null,
                user: null,
                isAuth: false,
                isLoading: false
            }
        }
    },
    getters: {
        userRole: (state) => state.credentials.userRole,
        user: (user) => user,
        isAuth: (isAuth) => isAuth,
        isLoading: (isLoading) => isLoading
    },
    mutations: {
        setToken(state, token) {
            state.credentials.token = token
            localStorage.setItem('token', token)
        },
        setRefresh(state, refresh) {
            state.credentials.refresh = refresh
            localStorage.setItem('refresh', refresh)
        },
        setUserRole(state, userRole) {
            state.credentials.userRole = userRole
            localStorage.setItem('userRole', userRole)
        },
        setUser(state, user) {
            state.credentials.user = user
        },
        setIsAuth(state, isAuth) {
            state.credentials.isAuth = isAuth
        },
        setIsLoading(state, isLoading) {
            state.credentials.isLoading = isLoading
        },
        deleteToken(state) {
            state.credentials.token = null
            localStorage.removeItem('token')
        },
        deleteRefresh(state) {
            state.credentials.token = null
            localStorage.removeItem('refresh')
        },
        deleteUserRole(state) {
            state.credentials.userRole = null
            localStorage.removeItem('userRole')
        },
        deleteUser(state) {
            state.credentials.user = null
        }
    },
    actions: {
        onLogin({ commit }, { login, password }) {
            commit('setIsLoading', true)
            authService.login(login, password).then((res) => {
                commit('setToken', res.data.accessToken)
                commit('setRefresh', res.data.refreshToken)
                commit('setUserRole', res.data.user.userRole)
                commit('setUser', res.data.user)
                commit('setIsAuth', true)
            })
            commit('setIsLoading', false)
        },
        onLogout({ commit }) {
            commit('deleteToken')
            commit('deleteRefresh')
            commit('deleteUserRole')
            commit('deleteUser')
            commit('setIsAuth', false)
            delete $api.defaults.headers['authorization']
        },
        async checkAuth({ commit }) {
            commit('setIsLoading', true)
            await axios.get('https://sensor-rest-api.herokuapp.com/user/refresh?refreshToken=' + localStorage.getItem("refresh"), {withCredentials: true})
                .then((res => {
                    commit('setToken', res.data.token)
                    commit('setUserRole', res.data.user.userRole)
                    commit('setUser', res.data.user)
                    commit('setIsAuth', true)
                }))
                .catch((reason) => console.log(reason))
            commit('setIsLoading', false)
        }
    }
})