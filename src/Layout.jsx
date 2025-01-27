import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { Outlet } from 'react-router-dom'


export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-[#242424] dark:bg-[#c04b4b] transition-colors duration-500">
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
