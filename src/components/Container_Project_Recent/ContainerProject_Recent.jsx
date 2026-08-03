import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoGitBranchOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { cn } from "@/lib/utils";
import ButtonProject from "@components/buttonProject/ButtonProject";

const AUTO_ADVANCE_MS = 8000;

const ContainerProject_Recent = ({ Projects }) => {
    const { t } = useTranslation();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [theme, setTheme] = useState(document.documentElement.classList.contains("dark") ? "dark" : "light");
    const [fade, setFade] = useState(false);
    const [autoPlay, setAutoPlay] = useState(true);

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
        if (!autoPlay || Projects.length <= 1) return;

        const timer = setTimeout(() => {
            setFade(true);
            setTimeout(() => {
                setSelectedIndex((prev) => (prev + 1) % Projects.length);
                setFade(false);
            }, 150);
        }, AUTO_ADVANCE_MS);

        return () => clearTimeout(timer);
    }, [autoPlay, selectedIndex, Projects.length]);

    const handleSelect = (index) => {
        setAutoPlay(false);
        if (index === selectedIndex) return;
        setFade(true);
        setTimeout(() => {
            setSelectedIndex(index);
            setFade(false);
        }, 150);
    };

    return (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-0">
            {/* Recuadro del Proyecto */}
            <div className="flex sm:flex-row flex-col justify-center gap-[1.5em] items-center sm:w-[42em] sm:h-[30em] w-full h-auto frame-red rounded-[0.5em] p-[1em]">
                {/* Imagen del Proyecto con Transición */}
                <div className="flex justify-center items-center sm:w-[35.625em] sm:h-[31.25em] w-full h-[18.75em]  frame-red rounded-[0.375em] overflow-hidden">
                    <img
                        src={imageSrc}
                        alt={t(`projects.items.${activeProject.id}.title`)}
                        className={cn("w-full h-full object-cover transition-opacity duration-300", fade ? "opacity-0" : "opacity-100")}
                    />
                </div>

                {/* Contenido del Proyecto */}
                <div
                    className={cn(
                        "flex flex-col justify-center gap-[1em] sm:gap-[3em] items-center sm:items-start sm:w-[12.5em] sm:h-auto w-full h-auto transition-opacity duration-300",
                        fade ? "opacity-0" : "opacity-100"
                    )}
                >
                    {/* Título */}
                    <div className="flex flex-col justify-center items-center sm:items-start h-[3.125em]">
                        <h2 className="font_juan_title_projects">{t(`projects.items.${activeProject.id}.title`)}</h2>
                    </div>
                    {/* Descripción */}
                    <div className="flex flex-col justify-center items-center text-justify sm:text-start sm:items-center h-auto w-[80%] sm:w-full sm:h-[6.25em] mt-[0.5em] mb-[1em]">
                        <p className="text-red-400 dark:text-red-200 text-[0.875em]">{t(`projects.items.${activeProject.id}.description`)}</p>
                    </div>
                    {/* Botones */}
                    <div className="flex flex-row gap-[0.5em] justify-center sm:justify-start items-last w-[11.25em] h-[4.375em] sm:w-full mt-[0.375em] sm:mt-[0.5em]">
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
            {Projects.length > 1 && (
                <div className="flex sm:flex-col flex-row gap-[0.5em] sm:gap-[0.375em]">
                    {Projects.map((project, index) => (
                        <button
                            key={project.id}
                            type="button"
                            onClick={() => handleSelect(index)}
                            aria-current={index === selectedIndex}
                            className={cn(
                                "relative overflow-hidden flex items-center justify-center sm:justify-start px-[0.625em] py-[0.375em] w-[7em] sm:w-[10em] min-h-[2em] sm:min-h-[3em] text-center sm:text-start break-words rounded-[0.375em] sm:rounded-l-none sm:rounded-r-[0.5em] border-[0.0625em] sm:border-l-0 border-red-300 dark:border-red-200 font_juan_title_projects leading-snug transition-colors duration-300",
                                index === selectedIndex
                                    ? "bg-brick dark:bg-red-300"
                                    : "bg-transparent hover:bg-red-300/20 dark:hover:bg-red-400/20"
                            )}
                        >
                            <h2>{t(`projects.items.${project.id}.title`)}</h2>
                            {index === selectedIndex && autoPlay && (
                                <span
                                    aria-hidden="true"
                                    className="absolute left-0 bottom-0 h-[0.1875em] bg-cream/80 dark:bg-white/80 animate-project-selector-progress"
                                    style={{ animationDuration: `${AUTO_ADVANCE_MS}ms` }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ContainerProject_Recent;
