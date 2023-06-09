import { PrivateRoute } from '@/router'
import { Outlet } from 'react-router-dom'

const Entry: React.FC = () => {
    return (
        <PrivateRoute>
            <div className="M-entry">
                <div className="main-container">
                    <Outlet />
                </div>
            </div>
        </PrivateRoute>
    )
}

export default Entry
