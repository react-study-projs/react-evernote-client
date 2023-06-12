import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'
import '@/common/styles/frame.scss'

function shouldUseMockData(): boolean {
    const env = import.meta.env
    return env.MODE === 'development' && JSON.parse(env.CUSTOMIZE_MOCK)
}

if (shouldUseMockData()) {
    import('@/../mock').then(() => {
        console.log('mock start')
    })
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />)
