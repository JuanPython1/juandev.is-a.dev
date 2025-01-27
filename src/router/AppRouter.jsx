import Layout from "@/Layout";
import About from "@/pages/about/about";
import Contact from "@/pages/contact/contact";
import Start from "@/pages/start/start";
import { createHashRouter, RouterProvider } from "react-router-dom";


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