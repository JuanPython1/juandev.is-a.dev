import { BookUser, TentTree, UserSearch } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ButtonLanguage from './buttonLanguage/ButtonLanguage';
import ButtonThemeMode from './buttonThemeMode/ButtonThemeMode';

const links = [
    { to: '/', alt: 'Home', label: 'Sr. Juan', icon: <TentTree /> },
    { to: '/about', alt: 'About', label: 'About', icon: <BookUser /> },
    { to: '/contact', alt: 'Contact', label: 'Contact', icon: <UserSearch /> },
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
        //background modo claro: bg-[#c04b4b]
        <nav className="flex flex-col gap-3 fixed bottom-[5%] left-1/2 transform -translate-x-1/2  transition-colors duration-500 justify-center rounded-md p-3 items-center text-lg h-auto bg-[#242424] dark:bg-[#c04b4b] shadow-md z-10 ">

            {/* Indicador rojo de la pagina activa*/}
            <div
                //backgroud modo claro: bg-red-500
                className="absolute left-[6%] top-[11%] transition-all duration-300 ease-in-out bg-zinc-700 dark:bg-red-300 rounded-lg z-10"
                style={{
                    width: '49px',
                    height: '49px',
                    transform: `translateX(${activeIndex === -1 ? 0 : activeIndex * 63}px)`,
                }}
            ></div>

            {/* Links */}
            <div className="relative flex flex-row items-center space-x-4 font_juan ">

                {links.map(({ to, alt, icon }) => (
                    <Link
                        key={to}
                        to={to}
                        aria-label={alt}
                        className={`flex flex-row p-3 relative z-10  rounded-lg dark:hover:text-red-500 hover:text-red-300 hover:underline ${location.pathname === to ? 'text-red-300 dark:text-red-500 underline ' : 'text-[#ffebcd] '}`}
                    >
                        {icon}
                    </Link>
                ))}
            </div>

            {/* Nombre de la pagina activa */}
            <div className='flex flex-row items-center justify-center space-x-3'>
                <ButtonLanguage />
                <div className='flex items-center justify-center w-[60px]'>
                    <h3 className="text-2xl font_juan_name">{links[activeIndex]?.label ? links[activeIndex]?.label : '???'}</h3>
                </div>
                <ButtonThemeMode />
            </div>
        </nav>
    );
}
