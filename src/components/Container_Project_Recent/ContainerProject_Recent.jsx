import { IoGitBranchOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";

import ButtonProject from "@components/buttonProject/ButtonProject";

const ContainerProject_Recent = ({ Tittle, Description }) => {
    return (
        <div className="flex flex-col items-center text-center w-[200px] h-[380px] border border-red-300 rounded-lg">
            <div className="flex flex-col justify-center items-center h-[100px] ">
                <h2 className="font_juan_tittle_projects">{Tittle}</h2>
            </div>
            <div className='flex justify-center items-center w-[180px] h-[190px] bg-slate-500'>
                <p> {Description} </p>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center w-[180px] h-[70px] ">
                <ButtonProject>
                    <IoGitBranchOutline width={10} height={10} />
                </ButtonProject>

                <ButtonProject>
                    <MdOutlineArrowOutward width={10} height={10} rotate={90} />
                </ButtonProject>
            </div>
        </div>
    )
}

export default ContainerProject_Recent
