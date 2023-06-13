import React from 'react'
import style from './avatar.module.scss'

interface AvatarProps {
    username: string
}

const Avatar: React.FC<AvatarProps> = ({ username }) => {
    // 展示username的首字母
    const slug = username.charAt(0)
    return (
        <span title={username} className={style.avatar}>
            {slug}
        </span>
    )
}

export default Avatar
