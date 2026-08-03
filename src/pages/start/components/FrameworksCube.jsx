import { FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiNuxtdotjs } from "react-icons/si";
// import { SiAstro } from "react-icons/si";
import SvgExpo from '@components/icons/Expo';
import '@pages/start/styles/FrameworksCube.css';
import Tooltip3D from './Tooltip3D';

export default function FrameworksCuber() {
    return (

        <div className="cube">
            <div className="face front relative group ">
                <div className="face front flex justify-center items-center">
                    <FaReact className="cube-icon react-icon-color" />
                </div>
                <Tooltip3D label="React" />
            </div>
            <div className="face back relative group">
                <div className="face front flex justify-center items-center">
                    <SiNextdotjs className="cube-icon next-icon-color" />
                </div>
                <Tooltip3D label="Next.js" />
            </div>
            <div className="face left relative group">
                <div className="face front flex justify-center items-center pointer-events-none">
                    <SiNuxtdotjs className="cube-icon nuxt-icon-color" />
                </div>
                <Tooltip3D label="Nuxt.js" />
            </div>
            <div className="face right relative group">
                <div className="face front flex justify-center items-center">
                    <SvgExpo className="cube-icon expo-icon-color " />
                </div>
                <Tooltip3D label="Expo" />
            </div>
            <div className="face top relative group">
                <div className="face front flex justify-center items-center">
                    <FaJs className="cube-icon js-icon-color" />
                </div>
                <Tooltip3D label="JavaScript" />
            </div>


            <div className="face bottom"></div>
        </div>

    )
}
