import { BookUser, TentTree, UserSearch } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import ButtonLanguage from './buttonLanguage/ButtonLanguage';
import ButtonThemeMode from './buttonThemeMode/ButtonThemeMode';

const links = [
    { to: '/', altKey: 'nav.home', labelKey: null, label: 'Sr. Juan', icon: <TentTree size="1.5em" /> },
    { to: '/about', altKey: 'nav.about', labelKey: 'nav.about', icon: <BookUser size="1.5em" /> },
    { to: '/contact', altKey: 'nav.contact', labelKey: 'nav.contact', icon: <UserSearch size="1.5em" /> },
];

export default function Nav() {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const navRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const lastNavigate = useRef(0);

    useEffect(() => {
        const currentLinkIndex = links.findIndex(link => link.to === location.pathname);
        setActiveIndex(currentLinkIndex);
    }, [location]);

    const handleWheel = useCallback((e) => {
        if (Math.abs(e.deltaX) < Math.abs(e.deltaY) * 1.5) return;

        e.preventDefault();

        const now = Date.now();
        if (now - lastNavigate.current < 1000) return;

        const direction = e.deltaX > 0 ? 1 : -1;
        const currentIndex = links.findIndex(link => link.to === location.pathname);
        const nextIndex = Math.max(0, Math.min(links.length - 1, currentIndex + direction));

        if (nextIndex !== currentIndex) {
            lastNavigate.current = now;
            navigate(links[nextIndex].to);
        }
    }, [location.pathname, navigate]);

    useEffect(() => {
        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [handleWheel]);

    return (
        //Componente de Navegacion
        <nav
            ref={navRef}
            className="flex flex-col gap-[0.75em] fixed bottom-[5%] left-1/2 transform -translate-x-1/2 justify-center rounded-[0.375em] p-[0.75em] items-center h-auto surface-panel nav-shadow z-10"
            style={{ fontSize: 'var(--zoom-scale)' }}
        >

            {/* Indicador rojo de la pagina activa*/}
            <div
                //backgroud modo claro: bg-red-500
                className="absolute left-[6%] top-[11%] transition-all duration-300 ease-in-out bg-zinc-700 dark:bg-red-300 rounded-[0.5em] z-10"
                style={{
                    width: '3.0625em',
                    height: '3.0625em',
                    transform: `translateX(${activeIndex === -1 ? 0 : activeIndex * 3.9375}em)`,
                }}
            ></div>

            {/* Links */}
            <div className="relative flex flex-row items-center gap-[1em] font_juan ">

                {links.map(({ to, altKey, icon }) => (
                    <Link
                        key={to}
                        to={to}
                        aria-label={t(altKey)}
                        className={cn(
                            'flex flex-row p-[0.75em] relative z-10 rounded-[0.5em] dark:hover:text-red-500 hover:text-red-300 hover:underline',
                            location.pathname === to ? 'text-red-300 dark:text-red-500 underline' : 'text-cream'
                        )}
                    >
                        {icon}
                    </Link>
                ))}
            </div>

            {/* Nombre de la pagina activa */}
            <div className='flex flex-row items-center justify-center gap-[0.75em]'>
                <ButtonLanguage />
                <div className='flex items-center justify-center min-w-[3.75em]'>
                    <h3 className="font_juan_name whitespace-nowrap">
                    {links[activeIndex] ? (links[activeIndex].labelKey ? t(links[activeIndex].labelKey) : links[activeIndex].label) : '???'}
                </h3>
                </div>
                <ButtonThemeMode />
            </div>
        </nav>
    );
}
