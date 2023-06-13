import React from 'react'
import { Layout, Menu } from 'antd'
import { NotebookOutlined, NoteOutlined, TrashOutlined, LogOutOutlined } from '@/common/icons'
import Avatar from '@/components/avatar'
import classNames from 'classnames'
import style from './side-menu.module.scss'

const { Sider } = Layout

const menuGroups = {
    top: [{ key: 'avatar', label: <Avatar username="John Doe" /> }],
    middle: [
        { key: 'notebooks', icon: <NotebookOutlined />, title: '笔记本' },
        { key: 'notes', icon: <NoteOutlined />, title: '笔记' },
        { key: 'trash', icon: <TrashOutlined />, title: '回收站' },
    ],
    bottom: [{ key: 'log-out', icon: <LogOutOutlined />, title: '退出' }],
}

const SideMenu: React.FC = () => {
    return (
        <Sider width={80} theme="dark">
            <div className={style['group-ct']}>
                <div className={classNames(style.group, style.top)}>
                    <Menu theme="dark" mode="inline" selectedKeys={[]} items={menuGroups.top} />
                </div>
                <div className={classNames(style.group, style.middle)}>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['notebooks']} items={menuGroups.middle} />
                </div>
                <div className={style.group}>
                    <Menu theme="dark" mode="inline" selectedKeys={[]} items={menuGroups.bottom} />
                </div>
            </div>
        </Sider>
    )
}

export default SideMenu
