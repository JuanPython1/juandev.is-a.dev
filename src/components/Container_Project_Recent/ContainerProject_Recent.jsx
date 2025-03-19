import { useState, useEffect } from "react";
import { IoGitBranchOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
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
        <div className="flex sm:flex-row flex-col justify-center gap-6 items-center sm:w-[672px] sm:h-[480px] w-full h-auto border border-red-300 dark:border-red-200 rounded-lg p-4">
            {/* Imagen del Proyecto con Transición */}
            <div className="flex justify-center items-center sm:w-[570px] sm:h-[500px] w-full h-[300px]  border border-red-300 dark:border-red-200 rounded-md overflow-hidden">
                <img
                    src={imageSrc}
                    alt={Tittle}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}
                />
            </div>

            {/* Contenido del Proyecto */}
            <div className="flex flex-col justify-center gap-4 sm:gap-12 items-center sm:items-start sm:w-[200px] sm:h-auto w-full h-auto">
                {/* Título */}
                <div className="flex flex-col justify-center items-center sm:items-start h-[50px]">
                    <h2 className="font_juan_title_projects">{Tittle}</h2>
                </div>
                {/* Descripción */}
                <div className="flex flex-col justify-center items-center text-justify sm:text-start sm:items-center h-auto w-[80%] sm:w-full sm:h-[100px] mt-2 mb-4">
                    <p className="text-red-400 dark:text-red-200 text-sm">{Description}</p>
                </div>
                {/* Botones */}
                <div className="flex flex-row gap-2 justify-center sm:justify-start items-last w-[180px] h-[70px] sm:w-full">
                    <ButtonProject url={Github}>
                        <IoGitBranchOutline size={18} />
                    </ButtonProject>
                    <ButtonProject url={Deploy}>
                        <MdOutlineArrowOutward size={18} />
                    </ButtonProject>
                </div>
            </div>
        </div>
    );
};

export default ContainerProject_Recent;
