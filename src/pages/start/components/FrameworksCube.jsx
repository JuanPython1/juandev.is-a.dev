import { BiLogoTypescript } from "react-icons/bi";
import { FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
// import { SiAstro } from "react-icons/si";
import SvgExpo from '@components/icons/Expo';
import '@pages/start/styles/FrameworksCube.css';

export default function FrameworksCuber() {
    return (

        <div className="cube">
            <div className="face front relative group">
                <div className="face front flex justify-center items-center">
                    <FaReact className="w-20 h-20 react-icon-color" />
                </div>
                <div className="tooltip absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 rotateX-90 group-hover:opacity-100 group-hover:rotateX-0 transition-all duration-500 pointer-events-none">
                    <div className="bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg">
                        React
                    </div>
                </div>
            </div>
            <div className="face back relative group">
                <div className="face front flex justify-center items-center">
                    <SiNextdotjs className="w-20 h-20 next-icon-color" />
                </div>
                <div className="tooltip absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 rotateX-90 group-hover:opacity-100 group-hover:rotateX-0 transition-all duration-500 pointer-events-none">
                    <div className="bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg">
                        Next.js
                    </div>
                </div>
            </div>
            <div className="face left relative group">
                <div className="face front flex justify-center items-center pointer-events-none">
                    <BiLogoTypescript className="w-40 h-40 typescript-icon-color" />
                </div>
                <div className="tooltip absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 rotateX-90 group-hover:opacity-100 group-hover:rotateX-0 transition-all duration-500 pointer-events-none">
                    <div className="bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg">
                        Typescript
                    </div>
                </div>
            </div>
            <div className="face right relative group">
                <div className="face front flex justify-center items-center">
                    <SvgExpo className="w-20 h-20 expo-icon-color " />
                </div>
                <div className="tooltip absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 rotateX-90 group-hover:opacity-100 group-hover:rotateX-0 transition-all duration-500 pointer-events-none">
                    <div className="bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg">
                        Expo
                    </div>
                </div>
            </div>
            <div className="face top relative group">
                <div className="face front flex justify-center items-center">
                    <FaJs className="w-20 h-20 js-icon-color" />
                </div>
                <div className="tooltip absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 rotateX-90 group-hover:opacity-100 group-hover:rotateX-0 transition-all duration-500 pointer-events-none">
                    <div className="bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg">
                        JavaScript
                    </div>
                </div>
            </div>


            <div className="face bottom"></div>
        </div>

    )
}
