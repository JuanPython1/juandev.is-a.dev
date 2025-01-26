import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { Outlet } from 'react-router-dom'


export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Nav />
            </header>

            <Outlet />

            <footer className='mt-auto'>
                <Footer />
            </footer>

        </div>

    )
}
