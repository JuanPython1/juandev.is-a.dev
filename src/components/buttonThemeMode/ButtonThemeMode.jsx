
import { useEffect, useState } from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import "./iconThemeMode.css";

const THEME_KEY = 'theme';

export default function ButtonThemeMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);


    useEffect(() => {
        const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const initialTheme = savedTheme === 'dark' || (savedTheme === 'auto' && prefersDark);
        document.documentElement.classList.toggle('dark', initialTheme);
        setIsDarkMode(initialTheme);

    }, []);


    const toggleTheme = () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1000);

        const newTheme = isDarkMode ? 'light' : 'dark';
        localStorage.setItem(THEME_KEY, newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        setIsDarkMode(newTheme === 'dark');
    };

    return (
        <button
            aria-label='toggle theme'
            onClick={toggleTheme}
        >
            <MdOutlineLightMode className={`${isAnimating ? 'animate-spin' : ''} text-[#c04b4b] dark:text-[#622f2f]  hover:text-red-300 dark:hover:text-red-400`} />
        </button>
    );
}
