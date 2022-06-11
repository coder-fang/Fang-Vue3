import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'
const Login = () => import('../views/Login/Login.vue')

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: Login,
        name: 'Login',
        meta: {
            title: '登录页'
        }
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
// 前置路由
router.beforeEach((to, from, next) => {
    
})