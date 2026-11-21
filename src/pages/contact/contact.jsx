import { useState } from "react";
import { useTranslation } from "react-i18next";

const CONTACT_CHANNELS = [
    { key: "whatsapp", href: "https://wa.me/573185731148", jp: "一" },
    { key: "email", href: "mailto:rodriguezjuanwork1@gmail.com", jp: "二" },
    { key: "linkedin", href: "https://www.linkedin.com/in/juan-rodriguez-4ba554226", jp: "三" },
    { key: "github", href: "https://github.com/JuanPython1", jp: "四" },
    { key: "location", jp: "五" },
];

export default function Contact() {
    const { t } = useTranslation();
    const [copied, setCopied] = useState(null);

    const copyValue = async (key) => {
        const text = t(`contact.${key}.value`);
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            const ta = document.createElement("textarea");
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
        }
        setCopied(key);
        setTimeout(() => setCopied((c) => (c === key ? null : c)), 1200);
    };

    return (
        <main className="flex-grow">
            <section className="mx-auto max-w-[38em] px-[1.5em] py-[2em] zoom-scale-root mt-[2em] md:mt-[3em] mb-[3em] flex flex-col gap-[1.25em]">
                <h1 className="text-cream font-bold text-[1.5em] md:text-[1.75em] leading-tight tracking-tight">
                    {t("contact.greeting")}
                </h1>

                <p className="text-red-100 dark:text-red-100 text-[0.9em] leading-relaxed">
                    {t("contact.intro")}
                </p>

                <hr className="border-red-300/40 dark:border-red-200/40" />

                <p className="text-red-300 dark:text-red-200 text-[0.7em] tracking-[0.3em] uppercase">
                    連絡 <span className="opacity-60 tracking-[0.2em]">— links</span>
                </p>

                <ul className="flex flex-col">
                    {CONTACT_CHANNELS.map(({ key, href, jp }, i) => (
                        <li
                            key={key}
                            className={
                                "group flex items-center justify-between gap-[1em] border-t border-red-300/40 dark:border-red-200/40 px-[0.25em] py-[0.6em] transition-colors hover:bg-red-300/[0.07] dark:hover:bg-red-200/[0.07]" +
                                (i === CONTACT_CHANNELS.length - 1 ? " border-b" : "")
                            }
                        >
                            {href ? (
                                <a
                                    href={href}
                                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                                    rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                                    className="flex items-baseline gap-[0.7em] min-w-0 flex-1"
                                >
                                    <span className="text-red-300/70 dark:text-red-200/70 text-[0.75em] w-[1.5em] shrink-0">{jp}</span>
                                    <span className="uppercase tracking-[0.18em] text-[0.75em] text-cream truncate">
                                        {t(`contact.${key}.label`)}
                                    </span>
                                    <span className="text-[0.8em] text-red-100/80 dark:text-red-100/80 truncate group-hover:text-cream transition-colors ml-auto">
                                        {t(`contact.${key}.value`)}
                                    </span>
                                </a>
                            ) : (
                                <div className="flex items-baseline gap-[0.7em] min-w-0 flex-1">
                                    <span className="text-red-300/70 dark:text-red-200/70 text-[0.75em] w-[1.5em] shrink-0">{jp}</span>
                                    <span className="uppercase tracking-[0.18em] text-[0.75em] text-cream truncate">
                                        {t(`contact.${key}.label`)}
                                    </span>
                                    <span className="text-[0.8em] text-red-100/80 dark:text-red-100/80 truncate ml-auto">
                                        {t(`contact.${key}.value`)}
                                    </span>
                                </div>
                            )}
                            <button
                                type="button"
                                onClick={() => copyValue(key)}
                                title="copy"
                                aria-label={`copy ${t(`contact.${key}.label`)}`}
                                className="shrink-0 border border-red-300/40 dark:border-red-200/40 rounded-[0.2em] px-[0.5em] py-[0.1em] text-[0.7em] tracking-[0.15em] uppercase text-red-100/70 dark:text-red-100/70 hover:text-cream hover:border-cream/70 transition-colors"
                            >
                                {copied === key ? "✓" : "⧉"}
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
