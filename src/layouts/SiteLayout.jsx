import { Outlet } from 'react-router'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function SiteLayout() {
    return (
        <div className="max-w-3xl mx-auto py-8">
            <Header />

            <Outlet />
            
            <Footer />
        </div>
    )
}