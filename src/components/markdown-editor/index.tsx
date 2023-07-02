import React, { useState } from 'react'
import MarkdownIt from 'markdown-it'
import { debounce } from 'lodash'

const md = new MarkdownIt()

interface MarkdownEditorProps {
    isEditMode: boolean
}

const onUpdteNote = debounce((content: string) => {
    console.log('mock update note', content)
}, 300)

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ isEditMode }) => {
    const [markdown, setMarkdown] = useState('')

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdown(() => event.target.value)
        onUpdteNote(event.target.value)
    }

    return (
        <div>
            {isEditMode ? (
                <textarea value={markdown} onChange={handleInputChange} />
            ) : (
                <div dangerouslySetInnerHTML={{ __html: md.render(markdown) }} />
            )}
        </div>
    )
}

export default MarkdownEditor
