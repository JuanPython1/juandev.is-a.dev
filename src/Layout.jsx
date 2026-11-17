import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import SideRays from '@/components/reactbits/SideRays/SideRays'
import { Suspense } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Loading from './Loading'


export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen surface-panel bg-dot-grid">

            <SideRays
                className="side-rays-bg"
                rayColor1="#fca5a5"
                rayColor2="#ffebcd"
                intensity={1.5}
                opacity={0.5}
            />

            <div className="page-content flex flex-col flex-grow min-h-screen">
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

            <ScrollRestoration />

        </div>

    )
}
