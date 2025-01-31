import { lazy } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

const Layout = lazy(() => import("@/Layout"));
const About = lazy(() => import('@pages/about/about'));
const Contact = lazy(() => import('@pages/contact/contact'));
const Start = lazy(() => import('@pages/start/start'));

const router = createHashRouter([
    {
        path: '/', element: <Layout />,
        children: [
            { path: '/', element: <Start /> },
            { path: '/about', element: <About /> },
            { path: '/contact', element: <Contact /> },
            { path: '*', element: <> Page not found </> },
        ]
    }
])
export default function AppRouter() {
    return <RouterProvider router={router} />;
}