import { useTranslation } from "react-i18next";
import { IoLanguageOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import './buttonlanguage.css';

const LANGUAGES = ['en', 'es'];

export default function ButtonLanguage() {
    const { i18n, t } = useTranslation();
    const currentLanguage = LANGUAGES.includes(i18n.resolvedLanguage) ? i18n.resolvedLanguage : 'en';

    return (
        <div className="relative group" aria-label={t('language.toggle')}>
            <IoLanguageOutline className="icon-brick-toggle" size={20} />

            {/* Puente invisible: mantiene el hover activo en el espacio entre el ícono y el tooltip */}
            <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 w-10 h-3"></div>

            <div className="absolute z-20 bottom-full left-1/2 transform -translate-x-1/2 mb-3 hidden group-hover:flex group-focus-within:flex flex-row gap-1 bg-zinc-700 text-cream font_tooltip text-xs rounded py-1 px-2 transition-all opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 animate-tooltip">
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-700 rotate-45"></span>
                {LANGUAGES.map((lang) => (
                    <button
                        key={lang}
                        type="button"
                        aria-pressed={lang === currentLanguage}
                        onClick={(event) => {
                            i18n.changeLanguage(lang);
                            event.currentTarget.blur();
                        }}
                        className={cn(
                            'px-2 py-1 rounded uppercase transition-colors',
                            lang === currentLanguage ? 'bg-red-300 text-zinc-900' : 'hover:bg-zinc-600'
                        )}
                    >
                        {lang}
                    </button>
                ))}
            </div>
        </div>
    );
}
