import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'
import localforage from 'localforage'
import { globalConfig } from '@/globalConfig'
import Login from '@/pages/login'
import Entry from '@/pages/entry'
import Notebooks from '@/pages/notebooks'
import Note from '@/pages/note'
import Trash from '@/pages/trash'

const routes: RouteObject[] = [
    // 对精确匹配"/login"，跳转Login页面
    {
        path: '/login',
        element: <Login />,
    },
    {
        // 未匹配"/login"，全部进入到entry路由
        path: '/',
        element: <Entry />,
        // 定义entry二级路由
        children: [
            {
                // 默认跳转notebooks页面
                path: '/',
                element: <Navigate to="/notebooks" />,
            },
            {
                path: '/notebooks',
                element: <Notebooks />,
            },
            {
                path: '/note',
                element: <Note />,
            },
            {
                path: '/trash',
                element: <Trash />,
            },
            {
                // 未匹配，跳转404页面
                path: '*',
                element: <h1>404</h1>,
            },
        ],
    },
]

// 全局路由
export const router = createBrowserRouter(routes)

// 路由守卫
export const PrivateRoute = async (props: React.PropsWithChildren) => {
    //  判断localforage是否有登录用户信息，如果没有则跳转登录页
    const token = await localforage.getItem(globalConfig.STROGE_KEY_TOKEN)

    if (!token) {
        return <Navigate to="/login" />
    }

    return <>{props.children}</>
}
