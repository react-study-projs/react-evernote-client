import React, { useState } from 'react'
import { Button, Space, Typography } from 'antd'
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons'
import MarkdownEditor from '@/components/markdown-editor'
import style from './note-detail.module.scss'

const { Title, Text } = Typography

interface NoteDetailProps {
    createTime: string
    updateTime: string
    status: string
    title: string
    onDelete: () => void
}

const NoteDetail: React.FC<NoteDetailProps> = ({ createTime, updateTime, status, title, onDelete }) => {
    const [isEditMode, setIsEditMode] = useState(false)
    console.log('is', isEditMode)

    const handleEditPreviewToggle = () => {
        setIsEditMode((prevMode) => !prevMode)
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.left}>
                    <Space direction="vertical">
                        <Text>{`Created: ${createTime}`}</Text>
                        <Text>{`Updated: ${updateTime}`}</Text>
                        <Text>{`Status: ${status}`}</Text>
                    </Space>
                </div>
                <div className={style.right}>
                    <Space>
                        <Button
                            icon={isEditMode ? <EyeOutlined /> : <EditOutlined />}
                            onClick={handleEditPreviewToggle}
                        >
                            {isEditMode ? 'Preview' : 'Edit'}
                        </Button>
                        <Button icon={<DeleteOutlined />} onClick={onDelete} danger>
                            Delete
                        </Button>
                    </Space>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.title}>
                    <Title level={4}>{title}</Title>
                </div>
                <div className={style.textarea}>
                    <MarkdownEditor isEditMode={isEditMode} />
                </div>
            </div>
        </div>
    )
}

export default NoteDetail
