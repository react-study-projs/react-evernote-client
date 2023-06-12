import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Form } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import localforage from 'localforage'
import authRequest from '@/api/auth'
import { globalConfig } from '@/globalConfig'
import imgLogo from './logo.png'
import style from './login.module.scss'

const Login: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate()

    const handleToggleMode = () => {
        setIsLogin(!isLogin)
    }

    const handleLogin = async (username: string, password: string) => {
        const data = await authRequest.login({ username, password })
        await localforage.setItem(globalConfig.STROGE_KEY_TOKEN, data.token)
        navigate('/notebooks')
    }

    const handleRegister = async (username: string, password: string) => {
        const data = await authRequest.register({ username, password })
        await localforage.setItem(globalConfig.STROGE_KEY_TOKEN, data.token)
        navigate('/notebooks')
    }

    const handleSubmit = isLogin ? handleLogin : handleRegister

    return (
        <div className={style['login-ct']}>
            <LoginForm isLogin={isLogin} onSubmit={handleSubmit} />
            <div>
                {isLogin ? '没有账户?' : '已有账户?'}
                <button className={style.toggleButton} onClick={handleToggleMode}>
                    {isLogin ? '注册' : '登录'}
                </button>
            </div>
        </div>
    )
}

export default Login

interface LoginFormProps {
    isLogin: boolean
    onSubmit: (userName: string, password: string) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ isLogin, onSubmit }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(username, password)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validateUsername = (_: any, value: string) => {
        const regex = /^[a-zA-Z0-9_\u4e00-\u9fa5]{3,15}$/
        if (!regex.test(value)) {
            return Promise.reject('用户名必须为3~15个字符,仅限于字母数字下划线中文')
        }
        return Promise.resolve()
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validatePassword = (_: any, value: string) => {
        if (value && (value.length < 6 || value.length > 16)) {
            return Promise.reject('密码长度必须为6~16个字符')
        }
        return Promise.resolve()
    }

    return (
        <Form name="normal_login">
            <img src={imgLogo} alt="" className={style.logo} />
            <Form.Item
                name="username"
                className={style['ipt-con']}
                rules={[{ required: true, message: '请输入用户名!' }, { validator: validateUsername }]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="用户名"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                name="password"
                className={style['ipt-con']}
                rules={[{ required: true, message: '请输入密码!' }, { validator: validatePassword }]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Item>
            <Form.Item className={style['ipt-con']}>
                <Button type="primary" block={true} htmlType="submit" onClick={handleSubmit}>
                    {isLogin ? '登录' : '注册'}
                </Button>
            </Form.Item>
        </Form>
    )
}
