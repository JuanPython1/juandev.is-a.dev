import { useTranslation } from "react-i18next";
import { MdOutlineMail, MdLocationOn } from "react-icons/md";
import { SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
import { cn } from "@/lib/utils";

const CONTACT_CHANNELS = [
    { key: "whatsapp", href: "https://wa.me/573185731148", Icon: SiWhatsapp, full: true },
    { key: "email", href: "mailto:rodriguezjuanwork1@gmail.com", Icon: MdOutlineMail },
    { key: "linkedin", href: "https://www.linkedin.com/in/juan-rodriguez-4ba554226", Icon: SiLinkedin },
    { key: "github", href: "https://github.com/JuanPython1", Icon: SiGithub },
    { key: "location", Icon: MdLocationOn },
];

export default function Contact() {
    const { t } = useTranslation();

    return (
        <main className="flex-grow">

            <section className="flex flex-col gap-[1.25em] justify-center items-center p-[1.5em] mx-auto max-w-[50em] animationBlurIn zoom-scale-root mt-14 md:mt-20">
                <h1 className="about-name text-center text-cream font-bold text-[2em] md:text-[2.5em] leading-tight tracking-tight">
                    {t('contact.greeting')}
                </h1>
                <p className="font_juan_intro">{t('contact.intro')}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[0.75em] w-full">
                    {CONTACT_CHANNELS.map(({ key, href, Icon, full }) => {
                        const isExternal = href && !href.startsWith("mailto:");
                        const Tag = href ? "a" : "div";

                        return (
                            <Tag
                                key={key}
                                href={href}
                                {...(href
                                    ? {
                                        target: isExternal ? "_blank" : undefined,
                                        rel: isExternal ? "noopener noreferrer" : undefined,
                                    }
                                    : {})}
                                className={cn(
                                    "group flex flex-col gap-[0.375em] surface-panel frame-red rounded-[0.375em] p-[0.875em] transition-colors duration-300 hover:border-red-400 dark:hover:border-red-300",
                                    full && "sm:col-span-2 sm:flex-row sm:items-center sm:justify-center sm:gap-[0.75em]"
                                )}
                            >
                                <header className="flex items-center gap-[0.5em]">
                                    <span className="flex shrink-0 items-center justify-center w-[1.75em] h-[1.75em] rounded-[0.25em] bg-brick dark:bg-red-300 text-cream transition-transform duration-300 group-hover:scale-110">
                                        <Icon size="1em" />
                                    </span>
                                    <h3 className="font_juan_title_projects">{t(`contact.${key}.label`)}</h3>
                                </header>
                                <p className="flex items-center gap-[0.375em] text-red-400 dark:text-red-200 text-[0.75em] break-all">
                                    {full && <span className="w-[0.5em] h-[0.5em] rounded-full bg-red-400 animate-pulse" />}
                                    {t(`contact.${key}.value`)}
                                </p>
                            </Tag>
                        );
                    })}
                </div>
            </section>

        </main>
    );
}