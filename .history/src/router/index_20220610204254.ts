import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'
const Login = () => import('../views/Login/Login.vue')

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: Login,
        name: 'Login',
        meta: {

        }
    }
]