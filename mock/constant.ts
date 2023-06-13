/*
 * todo 这里的baseURL需要和api中的baseURL保持一致
   但是import外部变量会 打包报错 只能先写死
 */
const baseURL = 'http://localhost:8080'

function dateToISOString(date: string): string {
    return new Date(date).toISOString()
}

export { baseURL, dateToISOString }
