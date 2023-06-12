import sendRequest from '@/utils/request'

const URL = {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
}

/**
 * 用户数据类型
 */
interface UserData {
    createdAt: string
    id: string
    token: string
    updatedAt: string
    username: string
}
export default {
    async register({ username, password }: { username: string; password: string }): Promise<UserData> {
        return await sendRequest<UserData>(URL.REGISTER, 'POST', { username, password })
    },

    async login({ username, password }: { username: string; password: string }): Promise<UserData> {
        return await sendRequest<UserData>(URL.LOGIN, 'POST', { username, password })
    },
}
