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
            <IoLanguageOutline className="icon-brick-toggle" size="1.25em" />

            {/* Puente invisible: mantiene el hover activo en el espacio entre el ícono y el tooltip */}
            <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 w-[2.5em] h-[0.75em]"></div>

            <div className="absolute z-20 bottom-full left-1/2 transform -translate-x-1/2 mb-[0.75em] hidden group-hover:flex group-focus-within:flex flex-row gap-[0.25em] bg-zinc-700 text-cream font_tooltip rounded-[0.25em] py-[0.25em] px-[0.5em] transition-all opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 animate-tooltip">
                <span className="absolute -bottom-[0.25em] left-1/2 -translate-x-1/2 w-[0.5em] h-[0.5em] bg-zinc-700 rotate-45"></span>
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
                            'px-[0.5em] py-[0.25em] rounded-[0.25em] uppercase transition-colors',
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
