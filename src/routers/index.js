import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/win',
            children: [
                {
                    path: '/win',
                    component: () => import('@/views/WinPage.vue'),
                    meta: {
                        title: 'Win软件'
                    }
                }, {
                    path: '/mac',
                    component: () => import('@/views/MacPage.vue'),
                    meta: {
                        title: 'Mac软件'
                    }
                }
            ]
        }
    ]
})

// router.beforeEach((to) => {
//     // 如果没有token, 且访问的是非登录页，拦截到登录，其他情况正常放行return '/login'
//     if (to.meta.title) {
//         document.title = to.meta.title + ' | 实验室预约系统'
//     }
//     const useStore = useUserStore()
//     if (!useStore.token && to.path !== '/login') return '/login'
// })

export default router
