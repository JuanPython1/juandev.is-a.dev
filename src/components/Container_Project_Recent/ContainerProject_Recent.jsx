import { IoGitBranchOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import ButtonProject from "@components/buttonProject/ButtonProject";

const ContainerProject_Recent = ({ Tittle, Description, Image, Github, Deploy }) => {
    return (
        <div className="flex sm:flex-row flex-col justify-center gap-6 items-center sm:w-[672px] sm:h-[480px] w-full h-auto border border-red-300 dark:border-red-200 rounded-lg p-4">
            {/* Imagen del Proyecto */}
            <div className="flex justify-center items-center sm:w-[570px] sm:h-[500px] w-full h-[300px] bg-slate-500 border border-red-300 dark:border-red-200 rounded-md overflow-hidden">
                <img src={Image} alt={Tittle} className="w-full h-full object-cover" />
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
