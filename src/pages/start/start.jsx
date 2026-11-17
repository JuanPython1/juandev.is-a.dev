import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import FrameworksCube from "@/pages/start/components/FrameworksCube.jsx";
import RecentProyectsContainer from "@/pages/start/components/RecentProjectsContainer";
import WorkExperience from "@/pages/start/components/WorkExperience.jsx";
import Trajectory from "@/pages/start/components/Trajectory.jsx";
import './styles/start.css';

export default function Start() {
    const { t } = useTranslation();
    const greetingWords = t('start.greeting').split(' ');

    return (
        <main className="flex-grow">

            <section className="relative flex flex-col gap-[1.5em] min-w-3 max-w-[32em] py-[2em] px-[3em] md:px-[2em] mx-auto overflow-hidden zoom-scale-root">

                <div className="absolute flex justify-center items-center w-full h-full top-0 left-0">
                    <h1 className="font_juan_tittle_SrJuan title-animation">
                        {greetingWords.map((word, index) => (
                            <Fragment key={index}>
                                {index > 0 && ' '}
                                <span className="title-word" style={{ '--i': index }}>{word}</span>
                            </Fragment>
                        ))}
                    </h1>
                </div>

                <div className="flex flex-col gap-[5.3em] mt-[4em] md:min-h-[27em] items-center justify-center content-animation">
                    <p className="font_juan_intro philosophy-block py-[1.25em] px-[0.5em]">
                        {`"${t('start.intro')}"`}
                    </p>
                    <FrameworksCube />
                </div>
            </section>

            <section className="reveal section-blur max-w-[31.25em] zoom-scale-root mt-[2.75em] md:mt-[6em]">
                <RecentProyectsContainer />
            </section>

            <section className="reveal section-blur max-w-[50em] zoom-scale-root mt-[2.75em] md:mt-[6.75em]">
                <h2 className="text-center font_juan_tittle">{t('experience.sectionTitle')}</h2>
                <WorkExperience />
            </section>

            <section className="reveal section-blur max-w-[62.5em] zoom-scale-root mt-[2.75em] md:mt-[6.75em]">
                <h2 className="text-center font_juan_tittle">{t('start.trajectoryTitle')}</h2>
                <Trajectory />
            </section>


        </main>
    );
}
