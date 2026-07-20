import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from './Loading'


export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen surface-panel bg-dot-grid">

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
