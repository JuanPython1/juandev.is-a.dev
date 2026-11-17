
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineLightMode } from "react-icons/md";
import { cn } from '@/lib/utils';
import "./iconThemeMode.css";

const THEME_KEY = 'theme';

export default function ButtonThemeMode() {
    const { t } = useTranslation();
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
            type="button"
            aria-label={t('theme.toggle')}
            aria-pressed={isDarkMode}
            title={t('theme.toggle')}
            onClick={toggleTheme}
            className="transition-transform duration-200 active:scale-90"
        >
            <MdOutlineLightMode className={cn(isAnimating && 'animate-spin', 'icon-brick-toggle')} />
        </button>
    );
}
