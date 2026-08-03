import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { IoGitBranchOutline } from "react-icons/io5";
import { MdOutlineArrowOutward, MdOutlineOpenInFull, MdClose } from "react-icons/md";
import { cn } from "@/lib/utils";
import ButtonProject from "@components/buttonProject/ButtonProject";

const AUTO_ADVANCE_MS = 8000;

const ContainerProject_Recent = ({ Projects }) => {
    const { t } = useTranslation();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [theme, setTheme] = useState(document.documentElement.classList.contains("dark") ? "dark" : "light");
    const [fade, setFade] = useState(false);
    const [autoPlay, setAutoPlay] = useState(true);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const activeProject = Projects[selectedIndex];
    const imageSrc = theme === "dark" ? activeProject.imgLight : activeProject.img;

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setFade(true);
            setTimeout(() => {
                setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
                setFade(false);
            }, 70);
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!autoPlay || isLightboxOpen || Projects.length <= 1) return;

        const timer = setTimeout(() => {
            setFade(true);
            setTimeout(() => {
                setSelectedIndex((prev) => (prev + 1) % Projects.length);
                setFade(false);
            }, 150);
        }, AUTO_ADVANCE_MS);

        return () => clearTimeout(timer);
    }, [autoPlay, isLightboxOpen, selectedIndex, Projects.length]);

    useEffect(() => {
        if (!isLightboxOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") setIsLightboxOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isLightboxOpen]);

    useEffect(() => {
        if (!isLightboxOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isLightboxOpen]);

    const handleSelect = (index) => {
        setAutoPlay(false);
        if (index === selectedIndex) return;
        setFade(true);
        setTimeout(() => {
            setSelectedIndex(index);
            setFade(false);
        }, 150);
    };

    const renderProjectSelector = (containerClassName, { attached = true } = {}) => Projects.length > 1 && (
        <div className={containerClassName}>
            {Projects.map((project, index) => (
                <button
                    key={project.id}
                    type="button"
                    onClick={() => handleSelect(index)}
                    aria-current={index === selectedIndex}
                    className={cn(
                        "relative overflow-hidden flex items-center justify-center px-[0.625em] py-[0.375em] w-[7em] sm:w-[10em] min-h-[2em] text-center break-words rounded-[0.375em] border-[0.09375em] border-red-300 dark:border-red-200 font_juan_title_projects leading-snug transition-colors duration-300",
                        attached && "sm:justify-start sm:min-h-[3em] sm:text-start sm:rounded-l-none sm:rounded-r-[0.5em] sm:border-l-0",
                        index === selectedIndex
                            ? "bg-brick dark:bg-red-300"
                            : "bg-charcoal dark:bg-brick hover:bg-red-300 dark:hover:bg-red-400"
                    )}
                >
                    <h2>{t(`projects.items.${project.id}.title`)}</h2>
                    {index === selectedIndex && autoPlay && !isLightboxOpen && (
                        <span
                            aria-hidden="true"
                            className="absolute left-0 bottom-0 h-[0.1875em] bg-cream/80 dark:bg-white/80 animate-project-selector-progress"
                            style={{ animationDuration: `${AUTO_ADVANCE_MS}ms` }}
                        />
                    )}
                </button>
            ))}
        </div>
    );

    return (
        <>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-[1em] sm:gap-0">
            {/* Recuadro del Proyecto */}
            <div className="flex sm:flex-row flex-col justify-center gap-[1.5em] items-center sm:w-[42em] sm:h-[26.5em] w-full h-auto frame-red surface-panel rounded-[0.5em] p-[1em]">
                {/* Imagen del Proyecto con Transición */}
                <div className="relative flex justify-center items-center sm:w-[35.625em] w-full aspect-[1.62] frame-red rounded-[0.375em] overflow-hidden">
                    <img
                        src={imageSrc}
                        alt={t(`projects.items.${activeProject.id}.title`)}
                        className={cn(
                            "w-full h-full object-cover transition-opacity duration-300",
                            fade ? "opacity-0" : "opacity-100"
                        )}
                    />
                    <button
                        type="button"
                        onClick={() => setIsLightboxOpen(true)}
                        aria-label={t("projects.viewFullscreen")}
                        title={t("projects.viewFullscreen")}
                        className="absolute top-[0.5em] right-[0.5em] flex items-center justify-center w-[1.75em] h-[1.75em] rounded-[0.375em] bg-brick/80 hover:bg-red-400 dark:bg-red-300/80 dark:hover:bg-red-400 text-cream backdrop-blur-sm transition-colors duration-200"
                    >
                        <MdOutlineOpenInFull size="1em" />
                    </button>
                </div>

                {/* Contenido del Proyecto */}
                <div
                    className={cn(
                        "flex flex-col justify-center gap-[1em] sm:gap-0 items-center sm:items-start sm:w-[12.5em] sm:h-auto w-full h-auto transition-opacity duration-300",
                        fade ? "opacity-0" : "opacity-100"
                    )}
                >
                    {/* Título */}
                    <div className="flex flex-col justify-center items-center sm:items-start h-[3.125em] sm:h-auto sm:mb-[0.25em]">
                        <h2 className="font_juan_title_projects">{t(`projects.items.${activeProject.id}.title`)}</h2>
                    </div>
                    {/* Descripción */}
                    <div className="flex flex-col justify-start items-center text-justify sm:text-start sm:items-center h-auto w-[80%] sm:w-full sm:h-[15.75em] mt-0 mb-0 sm:mb-[0.5em] overflow-y-auto pr-[0.5em]">
                        <p className="text-red-400 dark:text-red-200 text-[0.875em]">{t(`projects.items.${activeProject.id}.description`)}</p>
                    </div>
                    {/* Botones */}
                    <div className="flex flex-row gap-[0.5em] justify-center sm:justify-start items-last w-[11.25em] h-[4.375em] sm:h-auto sm:w-full mt-[0.375em] sm:mt-0">
                        <ButtonProject url={activeProject.github}>
                            <IoGitBranchOutline size="1.125em" />
                        </ButtonProject>
                        {activeProject.deploy && (
                            <ButtonProject url={activeProject.deploy}>
                                <MdOutlineArrowOutward size="1.125em" />
                            </ButtonProject>
                        )}
                    </div>
                </div>
            </div>

            {/* Selector de Proyectos */}
            {renderProjectSelector("flex sm:flex-col flex-row gap-[1em] sm:gap-[0.375em]")}
        </div>

        {isLightboxOpen &&
            createPortal(
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-sm p-[1.5em] overflow-y-auto"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <button
                        type="button"
                        onClick={() => setIsLightboxOpen(false)}
                        aria-label={t("projects.closeFullscreen")}
                        title={t("projects.closeFullscreen")}
                        className="fixed top-[1.5em] right-[1.5em] flex items-center justify-center w-[2.5em] h-[2.5em] rounded-[0.5em] bg-brick hover:bg-red-400 dark:bg-red-300 dark:hover:bg-red-400 text-cream"
                    >
                        <MdClose size="1.25em" />
                    </button>

                    <div
                        className="flex flex-col items-center gap-[1.5em] w-full max-w-[min(90vw,81vh,90em)] my-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Imagen grande */}
                        <div className="w-full aspect-[1.62] frame-red rounded-[0.5em] overflow-hidden">
                            <img
                                src={imageSrc}
                                alt={t(`projects.items.${activeProject.id}.title`)}
                                className={cn(
                                    "w-full h-full object-cover transition-opacity duration-300",
                                    fade ? "opacity-0" : "opacity-100"
                                )}
                            />
                        </div>

                        {/* Título, descripción y botones */}
                        <div
                            className={cn(
                                "flex flex-col items-center text-center gap-[1em] transition-opacity duration-300",
                                fade ? "opacity-0" : "opacity-100"
                            )}
                        >
                            <h2 className="font_juan_title_projects text-[1.5em]">{t(`projects.items.${activeProject.id}.title`)}</h2>
                            <p className="text-red-400 dark:text-red-200 text-[1em] max-w-[35em]">{t(`projects.items.${activeProject.id}.description`)}</p>
                            <div className="flex flex-row gap-[0.5em]">
                                <ButtonProject url={activeProject.github}>
                                    <IoGitBranchOutline size="1.125em" />
                                </ButtonProject>
                                {activeProject.deploy && (
                                    <ButtonProject url={activeProject.deploy}>
                                        <MdOutlineArrowOutward size="1.125em" />
                                    </ButtonProject>
                                )}
                            </div>
                        </div>

                        {/* Selector de Proyectos */}
                        {renderProjectSelector("flex flex-row flex-wrap gap-[0.5em] justify-center", { attached: false })}
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default ContainerProject_Recent;
