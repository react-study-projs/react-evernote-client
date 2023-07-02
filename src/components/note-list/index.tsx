import React from 'react'
import { List } from 'antd'

interface Note {
    id: string
    title: string
    updatedAt: string
}

interface NoteListProps {
    notes: Note[]
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
    return (
        <div>
            {/* 标题栏 */}
            <div className="title-bar">
                <div className="title">标题</div>
                <div className="updated-at">更新时间</div>
            </div>

            {/* 笔记列表 */}
            <List
                className="note-list"
                dataSource={notes}
                renderItem={(note) => (
                    <List.Item className="note-item">
                        <div className="title">{note.title}</div>
                        <div className="updated-at">{note.updatedAt}</div>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default NoteList
