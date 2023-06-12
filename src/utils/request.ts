import axios, { InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse } from 'axios'
import { globalConfig } from '@/globalConfig'
import { message } from 'antd'
import router from '@/router'

const baseURL = import.meta.env.VITE_BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.baseURL = baseURL

axios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem(globalConfig.STROGE_KEY_TOKEN) || 'token'

        config.headers.Authorization = 'Bearer ' + token
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 统一的错误处理函数
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleRequestError = (error: any) => {
    console.error('请求错误:', error)
    message.error('网络异常')
    throw new Error('网络异常')
}

export default function sendRequest<T>(
    url: string,
    type: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any = {}
): Promise<T> {
    return new Promise((resolve, reject) => {
        const options: AxiosRequestConfig = {
            url,
            method: type,
            validateStatus(status) {
                return (status >= 200 && status < 300) || status === 400 || status === 401
            },
        }

        if (type.toLowerCase() === 'get') {
            options.params = data
        } else {
            options.data = data
        }

        axios(options)
            .then((res: AxiosResponse<T>) => {
                if (res.status >= 200 && res.status < 400) {
                    resolve(res.data)
                } else {
                    reject(res.data)
                }

                if (res.status === 401) {
                    message.error('请重新登陆')
                    router.navigate('/login')
                }
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .catch((error: any) => {
                handleRequestError(error)
            })
    })
}
