import { useTranslation } from "react-i18next";
import { MdWork, MdSchool } from "react-icons/md";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import experienceData from "@data/WorkExperience.json";

const TYPE_ICON = {
    work: MdWork,
    academic: MdSchool,
};

export default function WorkExperience() {
    const { t } = useTranslation();
    const experiences = experienceData.experiences;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.25em] w-full items-stretch">
            {experiences.map((exp) => {
                const Icon = TYPE_ICON[exp.type] ?? MdWork;
                const bullets = t(`experience.items.${exp.id}.bullets`, { returnObjects: true });

                return (
                    <article
                        key={exp.id}
                        className="relative flex flex-col gap-[0.875em] surface-panel frame-red rounded-[0.5em] p-[1.25em]"
                    >
                        {exp.current && (
                            <span className="absolute -top-[0.75em] right-[1.5em] flex items-center gap-[0.375em] px-[0.75em] py-[0.25em] rounded-full surface-panel frame-red text-cream text-[0.75em]">
                                <span className="w-[0.5em] h-[0.5em] rounded-full bg-red-400 animate-pulse" />
                                {t("experience.current")}
                            </span>
                        )}

                        <header className="flex items-start gap-[0.75em]">
                            <span className="flex shrink-0 items-center justify-center w-[2.5em] h-[2.5em] rounded-[0.5em] bg-brick dark:bg-red-300 text-cream">
                                <Icon size="1.25em" />
                            </span>
                            <div className="flex flex-col gap-[0.125em]">
                                <h3 className="font_juan_title_projects leading-snug">
                                    {t(`experience.items.${exp.id}.role`)}
                                </h3>
                                <p className="text-red-400 dark:text-red-200 text-[0.875em] font-semibold">
                                    {t(`experience.items.${exp.id}.company`)}
                                </p>
                            </div>
                        </header>

                        <div className="flex flex-col gap-[0.25em] text-red-400 dark:text-red-200 text-[0.8em]">
                            <span className="flex items-center gap-[0.5em]">
                                <IoCalendarOutline size="1em" className="shrink-0 text-cream" />
                                {exp.period}
                            </span>
                            <span className="flex items-center gap-[0.5em]">
                                <IoLocationOutline size="1em" className="shrink-0 text-cream" />
                                {t(`experience.items.${exp.id}.location`)}
                            </span>
                        </div>

                        <ul className="flex flex-col gap-[0.5em] text-red-400 dark:text-red-200 text-[0.875em] text-justify">
                            {bullets.map((bullet, index) => (
                                <li key={index} className="flex gap-[0.5em]">
                                    <span className="text-cream mt-[0.15em]">▹</span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-[0.375em] mt-auto pt-[0.25em]">
                            {exp.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-[0.625em] py-[0.1875em] rounded-full border-[0.0625em] border-red-300 dark:border-red-200 text-red-400 dark:text-red-200 text-[0.75em]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </article>
                );
            })}
        </div>
    );
}
