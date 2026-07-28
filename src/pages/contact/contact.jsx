import { useTranslation } from "react-i18next";

export default function contact() {
    const { t } = useTranslation();

    return (
        <section className="flex w-max h-max my-[14em] mx-auto animationBlurIn zoom-scale-root">
            <h1 className="text-[1.5em] md:text-[2.25em] text-red-300 font-iosevka">{t('contact.comingSoon')}</h1>
        </section>
    )
}
