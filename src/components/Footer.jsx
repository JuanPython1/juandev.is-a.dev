import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div className='w-full flex justify-center h-[14em] mt-[5em] font_juan_footer zoom-scale-root'>
            <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
    )
}
