import { Navigate } from 'react-router-dom'
import { globalConfig } from '@/globalConfig'

// 路由守卫
const PrivateRoute = (props: React.PropsWithChildren) => {
    //  判断是否有登录用户信息，如果没有则跳转登录页
    const token = localStorage.getItem(globalConfig.STROGE_KEY_TOKEN)

    if (!token) {
        return <Navigate to="/login" />
    }

    return <>{props.children}</>
}

export default PrivateRoute
