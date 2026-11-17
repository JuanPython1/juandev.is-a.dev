import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdWork, MdSchool, MdClose } from "react-icons/md";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import experienceData from "@data/WorkExperience.json";

const TYPE_ICON = {
    work: MdWork,
    academic: MdSchool,
};

export default function WorkExperience() {
    const { t } = useTranslation();
    const experiences = experienceData.experiences;
    const dialogRef = useRef(null);
    const [selectedId, setSelectedId] = useState(null);
    const selected = experiences.find((exp) => exp.id === selectedId) ?? null;

    useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog && selected && !dialog.open) dialog.showModal();
    }, [selected]);

    // Fallback de light-dismiss para navegadores sin `closedby` (Safari):
    // cierra solo si la presión y la suelta ocurren fuera del contenido.
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog || "closedBy" in HTMLDialogElement.prototype) return;

        let pressedOutside = false;
        const outside = (e) => {
            const rect = dialog.getBoundingClientRect();
            return e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom;
        };
        const onDown = (e) => {
            pressedOutside = outside(e);
        };
        const onUp = (e) => {
            if (pressedOutside && outside(e)) dialog.close();
        };

        dialog.addEventListener("pointerdown", onDown);
        dialog.addEventListener("pointerup", onUp);
        return () => {
            dialog.removeEventListener("pointerdown", onDown);
            dialog.removeEventListener("pointerup", onUp);
        };
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.25em] w-full items-stretch">
                {experiences.map((exp) => {
                    const Icon = TYPE_ICON[exp.type] ?? MdWork;

                    return (
                        <article
                            key={exp.id}
                            className="spotlight relative flex flex-col surface-panel frame-red rounded-[0.5em] p-[1.25em]"
                        >
                            {exp.current && (
                                <span className="absolute -top-[0.75em] right-[1.5em] flex items-center gap-[0.375em] px-[0.75em] py-[0.25em] rounded-full surface-panel frame-red text-cream text-[0.75em]">
                                    <span className="w-[0.5em] h-[0.5em] rounded-full bg-red-400 animate-pulse" />
                                    {t("experience.current")}
                                </span>
                            )}

                            <header className="flex items-center gap-[0.75em]">
                                <span className="flex shrink-0 items-center justify-center w-[2.5em] h-[2.5em] rounded-[0.5em] bg-brick dark:bg-red-300 text-cream">
                                    <Icon size="1.25em" />
                                </span>
                                <div className="flex flex-col justify-center gap-[0.125em] min-w-0 min-h-[2.75em]">
                                    <h3 className="font_juan_title_projects leading-snug">
                                        {t(`experience.items.${exp.id}.role`)}
                                    </h3>
                                    <p className="text-red-400 dark:text-red-200 text-[0.875em] font-semibold truncate">
                                        {t(`experience.items.${exp.id}.company`)}
                                    </p>
                                </div>
                            </header>

                            <div className="flex flex-col gap-[0.25em] mt-[0.625em] text-red-400 dark:text-red-200 text-[0.8em]">
                                <p className="flex items-center gap-[0.5em]">
                                    <IoCalendarOutline size="1em" className="shrink-0 text-cream" />
                                    <span className="truncate">{exp.period}</span>
                                </p>
                                <p className="flex items-center gap-[0.5em]">
                                    <IoLocationOutline size="1em" className="shrink-0 text-cream" />
                                    <span className="truncate">{t(`experience.items.${exp.id}.location`)}</span>
                                </p>
                            </div>

                            <div className="mt-auto pt-[0.875em]">
                                <button
                                    type="button"
                                    onClick={() => setSelectedId(exp.id)}
                                    aria-haspopup="dialog"
                                    className="flex w-full items-center justify-center gap-[0.375em] rounded-[0.375em] border-[0.0625em] border-red-300 dark:border-red-200 px-[0.75em] py-[0.375em] text-cream text-[0.8em] transition-colors duration-300 hover:bg-red-300 hover:text-zinc-900 dark:hover:bg-red-400 dark:hover:text-zinc-900"
                                >
                                    {t("experience.showMore")}
                                </button>
                            </div>
                        </article>
                    );
                })}
            </div>

            <dialog
                ref={dialogRef}
                closedby="any"
                aria-labelledby="exp-dialog-title"
                className="exp-dialog"
                onClose={() => setSelectedId(null)}
            >
                {selected && (
                    <div className="surface-panel frame-red rounded-[0.5em] p-[1.5em] flex flex-col gap-[1em] w-[min(94vw,46rem)] max-h-[min(96dvh,60rem)] overflow-y-auto">
                        <div className="flex items-start gap-[0.75em]">
                            <span className="flex shrink-0 items-center justify-center w-[2.5em] h-[2.5em] rounded-[0.5em] bg-brick dark:bg-red-300 text-cream">
                                {(() => {
                                    const SelectedIcon = TYPE_ICON[selected.type] ?? MdWork;
                                    return <SelectedIcon size="1.25em" />;
                                })()}
                            </span>
                            <div className="flex flex-col gap-[0.125em] min-w-0 flex-1">
                                <h2 id="exp-dialog-title" className="font_juan_title_projects leading-snug">
                                    {t(`experience.items.${selected.id}.role`)}
                                </h2>
                                <p className="text-red-400 dark:text-red-200 text-[0.875em] font-semibold">
                                    {t(`experience.items.${selected.id}.company`)}
                                </p>
                            </div>
                            <form method="dialog">
                                <button
                                    type="submit"
                                    autoFocus
                                    aria-label={t("experience.close")}
                                    title={t("experience.close")}
                                    className="flex items-center justify-center w-[2em] h-[2em] rounded-[0.375em] border-[0.0625em] border-red-300 dark:border-red-200 text-cream transition-colors duration-300 hover:bg-red-300 hover:text-zinc-900 dark:hover:bg-red-400 dark:hover:text-zinc-900"
                                >
                                    <MdClose size="1em" aria-hidden="true" />
                                </button>
                            </form>
                        </div>

                        <div className="flex flex-col gap-[0.25em] text-red-400 dark:text-red-200 text-[0.8em]">
                            <p className="flex items-center gap-[0.5em]">
                                <IoCalendarOutline size="1em" className="shrink-0 text-cream" />
                                {selected.period}
                            </p>
                            <p className="flex items-center gap-[0.5em]">
                                <IoLocationOutline size="1em" className="shrink-0 text-cream" />
                                {t(`experience.items.${selected.id}.location`)}
                            </p>
                        </div>

                        <ul className="flex flex-col gap-[0.5em] text-red-400 dark:text-red-200 text-[0.875em] text-left">
                            {t(`experience.items.${selected.id}.bullets`, { returnObjects: true }).map((bullet, index) => (
                                <li key={index} className="flex gap-[0.5em]">
                                    <span className="text-cream mt-[0.15em]">▹</span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-[0.375em]">
                            {selected.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-[0.625em] py-[0.1875em] rounded-full border-[0.0625em] border-red-300 dark:border-red-200 text-red-400 dark:text-red-200 text-[0.75em]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </dialog>
        </>
    );
}
