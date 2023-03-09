import Home from "@/component/page/Home"
import Login from "@/component/page/Login"
import Register from "@/component/page/Register"
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/profile",
        name: "Profile",
        component: Register
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router