import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'
import sassDts from 'vite-plugin-sass-dts'
import path from 'path'

export default defineConfig({
    server: {
        // 支持IP访问
        host: true,
        // 指定dev sever的端口号，默认为5173
        port: 3000,
        // 自动打开浏览器运行以下页面
        open: '/login',
        // 设置反向代理
        proxy: {
            // 以下示例表示：请求URL中含有"/api"，则反向代理到http://localhost
            // 例如: http://localhost:3000/api/login -> http://localhost/api/login
            '/api': {
                target: 'http://localhost/',
                changeOrigin: true,
            },
        },
    },
    plugins: [
        react(),
        sassDts({
            enabledMode: ['production', 'development'],
            global: {
                generate: true,
                outFile: path.resolve(__dirname, './src/types/style.d.ts'),
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        postcss: {
            plugins: [autoprefixer()],
        },
        preprocessorOptions: {
            scss: {},
        },

        modules: {
            /* [name]: scss所在文件名,如login.module.scss,则[name]为login-module
             * [local]: scss中的类名
             * [hash:5]: 5位hash值
             *
             * 示例 login-module_login_d9c11
             */
            generateScopedName: '[name]_[local]_[hash:5]',
        },
    },
})
