import { Outlet } from 'react-router'

export default function CenteredLayout() {
    return (
        <div className="min-h-dvh flex items-center justify-center">
            <div className='w-96 border border-gray-500 rounded-4xl px-8 py-6 bg-cyan-900'>
                <Outlet />
            </div>
        </div>
    )
}