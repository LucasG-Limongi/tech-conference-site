import { Outlet } from 'react-router'
export default function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-96 border border-white/20 rounded-lg p-8">
                <Outlet />
            </div>
        </div>
    )
}