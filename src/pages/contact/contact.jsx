import { useTranslation } from "react-i18next";

export default function contact() {
    const { t } = useTranslation();

    return (
        <section className="flex w-max h-max my-56 mx-auto animationBlurIn">
            <h1 className="text-2xl md:text-4xl text-red-300 font-iosevka">{t('contact.comingSoon')}</h1>
        </section>
    )
}
