import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div className='w-full flex justify-center h-56 mt-20 font_juan_footer'>
            <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
    )
}
