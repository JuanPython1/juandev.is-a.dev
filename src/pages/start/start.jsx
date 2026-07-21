import { useTranslation } from "react-i18next";
import FrameworksCube from "@/pages/start/components/FrameworksCube.jsx";
import RecentProyectsContainer from "@/pages/start/components/RecentProjectsContainer";
import Trajectory from "@/pages/start/components/Trajectory.jsx";
import './styles/start.css';

export default function Start() {
    const { t } = useTranslation();

    return (
        <main className="flex-grow space-y-40">

            <section className="relative flex flex-col gap-16 min-w-3 max-w-2xl h-full p-10 mx-auto overflow-hidden">

                <div className="absolute flex justify-center items-center w-full h-full top-0 left-0">
                    <h1 className="font_juan_tittle_SrJuan title-animation">
                        {t('start.greeting')}
                    </h1>
                </div>

                <div className=" flex flex-col gap-28 mt-16 md:h-[500px] items-center content-animation">
                    <p className="font_juan_intro">
                        {`"${t('start.intro')}"`}
                    </p>
                    <FrameworksCube />
                </div>
            </section>

            <section className="section-blur animationBlurIn max-w-[500px]">
                <RecentProyectsContainer />
            </section>

            <section className="section-blur animationBlurIn max-w-[1000px]">
                <h1 className="text-center md:text-3xl font_juan_tittle">{t('start.trajectoryTitle')}</h1>
                <Trajectory />
            </section>


        </main>
    );
}
