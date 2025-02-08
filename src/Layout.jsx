import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from './Loading'


export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-[#242424] dark:bg-[#c04b4b] transition-colors duration-500 bg-[radial-gradient(circle,_#000_0.5px,_transparent_0.1px)] bg-[size:10px_10px]">

            <header>
                <Nav />
            </header>

            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>

            <footer className='mt-auto'>
                <Footer />
            </footer>

        </div>

    )
}
