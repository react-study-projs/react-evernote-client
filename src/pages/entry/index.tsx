import React from 'react'
import PrivateRoute from '@/components/privateRoute'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import SideMenu from '@/components/side-menu'
import style from './entry.module.scss'

const { Content } = Layout

const Entry: React.FC = () => {
    return (
        <PrivateRoute>
            <Layout className={style.layout}>
                <SideMenu />
                <Layout>
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </PrivateRoute>
    )
}

export default Entry
