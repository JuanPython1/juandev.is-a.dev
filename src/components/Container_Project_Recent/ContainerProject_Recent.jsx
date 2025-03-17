import { IoGitBranchOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";

import ButtonProject from "@components/buttonProject/ButtonProject";

const ContainerProject_Recent = ({ Tittle, Description, Image, Github, Deploy }) => {
    return (
        <div className="flex flex-row justify-center gap-6 items-center text-center w-[672px] h-[480px] border border-red-300 rounded-lg">
        <div className='flex justify-center items-center w-[400px] h-[500px] bg-slate-500 rounded-md overflow-hidden'>
            <img src={Image} alt={Tittle} className="w-full h-full object-cover" />
        </div>

            <div className="flex flex-col justify-center gap-4 items-center w-[180px] h-[190px]">
                <div className="flex flex-col justify-center items-center h-[50px] ">
                    <h2 className="font_juan_title_projects">{Tittle}</h2>
                </div>
                <div className="flex flex-col justify-center items-center h-auto">
                    <p className="text-red-400 dark:text-red-300">{Description}</p>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center w-[180px] h-[70px] ">
                    <ButtonProject url={Github}>
                        <IoGitBranchOutline width={10} height={10} />
                    </ButtonProject>

                    <ButtonProject url={Deploy}>
                        <MdOutlineArrowOutward width={10} height={10} rotate={90} />
                    </ButtonProject>
                </div>
            </div>
        </div>
    )
}

export default ContainerProject_Recent
