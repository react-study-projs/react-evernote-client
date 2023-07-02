import React, { useState } from 'react'
import { Select, Button } from 'antd'
import NoteList from '@/components/note-list'
import NoteDetail from '@/components/note-detail'
import styles from './note.module.scss'

const { Option } = Select

const notes = [
    { id: '1', title: 'Note 1', updatedAt: '2022-01-01' },
    { id: '2', title: 'Note 2', updatedAt: '2022-01-02' },
    { id: '3', title: 'Note 3', updatedAt: '2022-01-03' },
]

const noteDetail = {
    createTime: '2022-01-01',
    updateTime: '2022-01-03',
    status: '已保存',
    title: 'Note Title',
    onDelete: () => {},
}

const Note: React.FC = () => {
    const [selectedNotebook, setSelectedNotebook] = useState('')

    const handleNotebookChange = (value: string) => {
        setSelectedNotebook(value)
    }

    const handleAddNote = () => {
        // 处理添加笔记逻辑
    }

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: '0 0 300px', padding: '20px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <Select defaultValue="all" style={{ width: '100%' }}>
                        <Option value="all">All Notebooks</Option>
                        <Option value="notebook1">Notebook 1</Option>
                        <Option value="notebook2">Notebook 2</Option>
                    </Select>
                </div>
                <Button type="primary" block>
                    Add Note
                </Button>
                <NoteList notes={notes} />
            </div>
            <div style={{ flex: 1, padding: '20px' }}>
                <NoteDetail {...noteDetail} />
            </div>
        </div>
    )
}

export default Note
