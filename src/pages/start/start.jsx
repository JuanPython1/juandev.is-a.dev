import FrameworksCube from "@/pages/start/components/FrameworksCube.jsx";
import Trajectory from "@/pages/start/components/Trajectory.jsx";
import './styles/start.css';

export default function Start() {

    return (
        <main className="flex-grow space-y-40">

            <section className="relative flex flex-col gap-16 min-w-3 max-w-2xl h-full p-10 mx-auto overflow-hidden">

                <div className="absolute flex justify-center items-center w-full h-full top-0 left-0">
                    <h1 className="font_juan_tittle_SrJuan title-animation">
                        {`Hi, it's Juan's website 🐋`}
                    </h1>
                </div>

                <div className=" flex flex-col gap-28 mt-16 md:h-[500px] items-center content-animation">
                    <p className="font_juan_intro">
                        {
                            `"I am a Systems Engineering student, currently in my tenth semester. I specialize in web and mobile development with React with the Next.js framework and React Native with the Expo framework. Recently, I have been exploring the integration of artificial intelligence in my projects, leveraging AI technologies to improve user experiences and streamline development processes."`
                        }
                    </p>
                    <FrameworksCube />
                </div>
            </section>

            <section className="flex flex-col gap-16 md:gap-24 justify-center items-center max-w-[1000px] p-10 mx-auto animationBlurIn">
                <h1 className="text-center md:text-3xl font_juan_tittle">Learning Trajectory</h1>
                <Trajectory />
            </section>


        </main>
    );
}
