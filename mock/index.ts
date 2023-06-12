import Mock from 'mockjs'

/*
 * todo 这里的baseURL需要和api中的baseURL保持一致
   但是import外部变量会 打包报错 只能先写死
 */
const baseURL = 'http://localhost:8080'
const URL = {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
}
const MOCK_URL = {
    LOGIN: baseURL + URL.LOGIN,
    REGISTER: baseURL + URL.REGISTER,
}

// 模拟login接口
Mock.mock(MOCK_URL.LOGIN, 'post', function () {
    let result = {
        createdAt: '2023-06-12T02:45:51.0073672Z',
        id: '648686df003bd9b11409543d',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODY2Mjc5NTEsInVzZXJfaWQiOiJPYmplY3RJRChcIjY0ODY4NmRmMDAzYmQ5YjExNDA5NTQzZFwiKSIsInVzZXJfbmFtZSI6ImFkbWluMjIyIn0.DQhXWZatstFayAMTcHC5A20s_8j3EfNARJhweM00h20',
        updatedAt: '2023-06-12T02:45:51.0073673Z',
        username: 'admin1111222',
    }
    return result
})

export default Mock
