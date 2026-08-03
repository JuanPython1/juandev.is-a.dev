import { useTranslation } from "react-i18next";
import FrameworksCube from "@/pages/start/components/FrameworksCube.jsx";
import RecentProyectsContainer from "@/pages/start/components/RecentProjectsContainer";
import WorkExperience from "@/pages/start/components/WorkExperience.jsx";
import Trajectory from "@/pages/start/components/Trajectory.jsx";
import './styles/start.css';

export default function Start() {
    const { t } = useTranslation();

    return (
        <main className="flex-grow">

            <section className="relative flex flex-col gap-[3em] min-w-3 max-w-[32em] sm:min-h-screen p-[2em] mx-auto overflow-hidden zoom-scale-root">

                <div className="absolute flex justify-center items-center w-full h-full top-0 left-0">
                    <h1 className="font_juan_tittle_SrJuan title-animation">
                        {t('start.greeting')}
                    </h1>
                </div>

                <div className=" flex flex-col gap-[5.3em] mt-[3em] md:h-[24em] items-center content-animation">
                    <p className="font_juan_intro">
                        {`"${t('start.intro')}"`}
                    </p>
                    <FrameworksCube />
                </div>
            </section>

            <section className="section-blur animationBlurIn max-w-[31.25em] zoom-scale-root mt-10 md:mt-24">
                <RecentProyectsContainer />
            </section>

            <section className="section-blur animationBlurIn max-w-[50em] zoom-scale-root mt-16 md:mt-40">
                <h1 className="text-center font_juan_tittle">{t('experience.sectionTitle')}</h1>
                <WorkExperience />
            </section>

            <section className="section-blur animationBlurIn max-w-[62.5em] zoom-scale-root mt-16 md:mt-40">
                <h1 className="text-center font_juan_tittle">{t('start.trajectoryTitle')}</h1>
                <Trajectory />
            </section>


        </main>
    );
}
