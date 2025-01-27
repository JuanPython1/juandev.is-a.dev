import { BookUser, TentTree, UserSearch } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
    { to: '/', label: 'Sr. Juan', icon: <TentTree /> },
    { to: '/about', label: 'About', icon: <BookUser /> },
    { to: '/contact', label: 'Contact', icon: <UserSearch /> },
];

export default function Nav() {
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const currentLinkIndex = links.findIndex(link => link.to === location.pathname);
        setActiveIndex(currentLinkIndex);
    }, [location]);

    return (
        //Componente de Navegacion
        <nav className="flex flex-col gap-3 fixed bottom-[5%] left-1/2 transform -translate-x-1/2 justify-center rounded-md p-3 items-center text-lg h-auto bg-[#242424] shadow-md z-10 border border-zinc-700">

            {/* Indicador rojo de la pagina activa*/}
            <div
                className="absolute left-[6%] top-[11%] transition-all duration-300 ease-in-out bg-zinc-700 rounded-lg z-10"
                style={{
                    width: '49px',
                    height: '49px',
                    transform: `translateX(${activeIndex === -1 ? 0 : activeIndex * 63}px)`,
                }}
            ></div>

            {/* Links */}
            <div className="relative flex flex-row items-center space-x-4 font_juan ">

                {links.map(({ to, icon }) => (
                    <Link
                        key={to}
                        to={to}
                        className={`flex flex-row p-3 relative z-10  rounded-lg hover:text-red-300 hover:underline ${location.pathname === to ? 'text-red-300 underline ' : 'text-[#ffebcd] '}`}
                    >
                        {icon}
                    </Link>
                ))}
            </div>

            {/* Nombre de la pagina activa */}
            <div>
                <h3 className="text-2xl font_juan_name">{links[activeIndex]?.label ? links[activeIndex]?.label : '???'}</h3>
            </div>
        </nav>
    );
}
