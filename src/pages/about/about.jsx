import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function About() {
    const { t } = useTranslation();
    const outside = t("about.outside", { returnObjects: true });

    return (
        <main className="flex-grow">
            <section className="mx-auto max-w-[38em] px-[1.5em] py-[2em] zoom-scale-root mt-[2em] md:mt-[3em] mb-[3em] flex flex-col gap-[1.25em]">
                <h1 className="text-cream font-bold text-[1.5em] md:text-[1.75em] leading-tight tracking-tight">
                    {t("about.name")}
                </h1>

                <p className="text-red-100 dark:text-red-100 text-[0.9em] leading-relaxed">
                    {t("about.bio")}
                </p>

                <hr className="border-red-300/40 dark:border-red-200/40" />

                <div className="flex flex-col gap-[0.35em]">
                    <h2 className="text-cream text-[1em] font-bold">{t("about.nowTitle")}</h2>
                    <p className="text-red-100 dark:text-red-100 text-[0.85em] leading-relaxed">
                        {t("about.now")}
                    </p>
                </div>

                <div className="flex flex-col gap-[0.35em]">
                    <h2 className="text-cream text-[1em] font-bold">{t("about.stackTitle")}</h2>
                    <p className="text-red-100 dark:text-red-100 text-[0.85em] leading-relaxed">
                        {t("about.stack")}
                    </p>
                </div>

                <div className="flex flex-col gap-[0.35em]">
                    <h2 className="text-cream text-[1em] font-bold">{t("about.outsideTitle")}</h2>
                    <ul className="flex flex-col gap-[0.25em]">
                        {Array.isArray(outside) && outside.map((item, i) => (
                            <li key={i} className="text-red-100 dark:text-red-100 text-[0.85em]">
                                <span className="text-red-300 dark:text-red-200 mr-[0.5em]">-</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="text-[0.85em] text-red-100 dark:text-red-100">
                    {t("about.cta")}{" "}
                    <Link to="/contact" className="underline underline-offset-4 text-cream hover:text-red-200 transition-colors">
                        {t("about.ctaLink")}
                    </Link>
                </p>
            </section>
        </main>
    );
}
