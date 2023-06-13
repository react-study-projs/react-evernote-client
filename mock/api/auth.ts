import Mock from 'mockjs'
import { baseURL, dateToISOString } from '../constant'

interface Payload {
    id: string
    username: string
}

const generateToken = (id: string, username: string): string => {
    const header = {
        alg: 'HS256',
        typ: 'JWT',
    }

    const payload: Payload = {
        id,
        username,
    }

    const secretKey = 'key-1' // 替换为你自己的密钥

    // 生成 header 和 payload 的 base64 字符串
    const encodedHeader = btoa(JSON.stringify(header))
    const encodedPayload = btoa(JSON.stringify(payload))

    // 拼接 header 和 payload，并以密钥进行签名
    const signature = btoa(encodedHeader + '.' + encodedPayload + '.' + secretKey)

    // 构建最终的 JWT token
    const token = `${encodedHeader}.${encodedPayload}.${signature}`

    return token
}

const MOCK_URL = {
    LOGIN: baseURL + '/auth/login',
    REGISTER: baseURL + '/auth/register',
}

export function mockAuth() {
    Mock.mock(MOCK_URL.LOGIN, 'post', function () {
        const userId = Mock.mock('@id')
        const username = Mock.mock('@name')
        const token = generateToken(userId, username)

        const result = {
            createdAt: dateToISOString(Mock.mock('@datetime')),
            id: userId,
            token,
            updatedAt: dateToISOString(Mock.mock('@datetime')),
            username,
        }
        return result
    })

    Mock.mock(MOCK_URL.REGISTER, 'post', function () {
        const userId = Mock.mock('@id')
        const username = Mock.mock('@name')
        const token = generateToken(userId, username)

        const result = {
            createdAt: dateToISOString(Mock.mock('@datetime')),
            id: userId,
            token,
            updatedAt: dateToISOString(Mock.mock('@datetime')),
            username,
        }
        return result
    })
}
