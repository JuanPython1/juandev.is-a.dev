import FrameworksCube from "@/pages/start/components/FrameworksCube.jsx";
import Trajectory from "@/pages/start/components/Trajectory.jsx";

export default function Start() {

    return (
        <main className="mt-16 flex-grow space-y-20">

            <section className={`flex flex-col gap-32 justify-center items-center min-w-3 max-w-2xl p-10 mx-auto rounded-e-3xl animationBlurIn`}>
                <p className="font_juan_intro">
                    {
                        `"I am a Systems Engineering student, currently in my tenth semester. I specialize in web and mobile development with React with the Next.js framework and React Native with the Expo framework. Recently, I have been exploring the integration of artificial intelligence in my projects, leveraging AI technologies to improve user experiences and streamline development processes."`
                    }
                </p>
                <FrameworksCube />
            </section>

            <section className="flex flex-col md:flex-row flex-grow gap-4 md:gap-32 justify-center items-center min-w-3 max-w-full p-10 mx-20 animationBlurIn">

                <h1 className="text-2xl font_juan_tittle">Learning Trajectory</h1>

                <Trajectory />


            </section>

        </main>
    );
}
