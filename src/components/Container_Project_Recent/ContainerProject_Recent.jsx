import { useState, useEffect } from "react";
import { IoGitBranchOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { cn } from "@/lib/utils";
import ButtonProject from "@components/buttonProject/ButtonProject";

const ContainerProject_Recent = ({ Tittle, Description, Image, ImageLight, Github, Deploy }) => {
    const [theme, setTheme] = useState(document.documentElement.classList.contains("dark") ? "dark" : "light");
    const [imageSrc, setImageSrc] = useState(theme === "dark" ? ImageLight : Image);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setFade(true);
            setTimeout(() => {
                setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
                setImageSrc(document.documentElement.classList.contains("dark") ? ImageLight : Image);
                setFade(false); 
            }, 70); 
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, [Image, ImageLight]);

    return (
        <div className="flex sm:flex-row flex-col justify-center gap-[1.5em] items-center sm:w-[42em] sm:h-[30em] w-full h-auto frame-red rounded-[0.5em] p-[1em]">
            {/* Imagen del Proyecto con Transición */}
            <div className="flex justify-center items-center sm:w-[35.625em] sm:h-[31.25em] w-full h-[18.75em]  frame-red rounded-[0.375em] overflow-hidden">
                <img
                    src={imageSrc}
                    alt={Tittle}
                    className={cn("w-full h-full object-cover transition-opacity duration-300", fade ? "opacity-0" : "opacity-100")}
                />
            </div>

            {/* Contenido del Proyecto */}
            <div className="flex flex-col justify-center gap-[1em] sm:gap-[3em] items-center sm:items-start sm:w-[12.5em] sm:h-auto w-full h-auto">
                {/* Título */}
                <div className="flex flex-col justify-center items-center sm:items-start h-[3.125em]">
                    <h2 className="font_juan_title_projects">{Tittle}</h2>
                </div>
                {/* Descripción */}
                <div className="flex flex-col justify-center items-center text-justify sm:text-start sm:items-center h-auto w-[80%] sm:w-full sm:h-[6.25em] mt-[0.5em] mb-[1em]">
                    <p className="text-red-400 dark:text-red-200 text-[0.875em]">{Description}</p>
                </div>
                {/* Botones */}
                <div className="flex flex-row gap-[0.5em] justify-center sm:justify-start items-last w-[11.25em] h-[4.375em] sm:w-full">
                    <ButtonProject url={Github}>
                        <IoGitBranchOutline size="1.125em" />
                    </ButtonProject>
                    <ButtonProject url={Deploy}>
                        <MdOutlineArrowOutward size="1.125em" />
                    </ButtonProject>
                </div>
            </div>
        </div>
    );
};

export default ContainerProject_Recent;
