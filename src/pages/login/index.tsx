import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Form } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import imgLogo from './logo.png'
import style from './login.module.scss'

const Login: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate()

    const handleToggleMode = () => {
        setIsLogin(!isLogin)
    }

    const handleLogin = (userName: string, password: string) => {
        // 处理登录逻辑
        console.log('login')
        navigate('/notebooks')
    }

    const handleRegister = (userName: string, password: string) => {
        // 处理注册逻辑
        console.log('register')
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
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(userName, password)
    }

    const validateUsername = (_: any, value: string) => {
        const regex = /^[a-zA-Z0-9_\u4e00-\u9fa5]{3,15}$/
        if (!regex.test(value)) {
            return Promise.reject('用户名必须为3~15个字符,仅限于字母数字下划线中文')
        }
        return Promise.resolve()
    }

    const validatePassword = (_: any, value: string) => {
        if (value && (value.length < 6 || value.length > 16)) {
            return Promise.reject('密码长度必须为6~16个字符')
        }
        return Promise.resolve()
    }

    return (
        <Form name="normal_login" onFinish={handleSubmit}>
            <img src={imgLogo} alt="" className={style.logo} />
            <Form.Item
                name="username"
                className={style['ipt-con']}
                rules={[{ required: true, message: '请输入用户名!' }, { validator: validateUsername }]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="用户名"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
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
                <Button type="primary" block={true} htmlType="submit">
                    {isLogin ? '登录' : '注册'}
                </Button>
            </Form.Item>
        </Form>
    )
}
