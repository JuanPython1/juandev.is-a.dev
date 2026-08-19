import { useTranslation } from "react-i18next";
import { SiNuxtdotjs, SiReact, SiExpress, SiMongodb, SiTypescript, SiNextdotjs, SiGit, SiOpenai, SiVuedotjs, SiTailwindcss, SiExpo, SiNodedotjs, SiDocker, SiGithub } from "react-icons/si";
import { MdWeb, MdPhoneIphone, MdAccountTree, MdAutoAwesome, MdLocationOn, MdSchool, MdLocalDrink, MdGridOn } from "react-icons/md";
import { SiRiotgames } from "react-icons/si";
import skillsData from "@data/Skills.json";

const SKILL_ICONS = {
    "Nuxt": SiNuxtdotjs,
    "Vue": SiVuedotjs,
    "Next.js": SiNextdotjs,
    "React": SiReact,
    "TypeScript": SiTypescript,
    "Tailwind CSS": SiTailwindcss,
    "HTML/CSS": SiNodedotjs,
    "React Native": SiReact,
    "Expo": SiExpo,
    "JavaScript": SiNodedotjs,
    "Express.js": SiExpress,
    "Node.js": SiNodedotjs,
    "MongoDB": SiMongodb,
    "REST APIs": SiExpress,
    "Google OAuth": SiNodedotjs,
    "Git": SiGit,
    "GitHub": SiGithub,
    "CI/CD": SiGit,
    "Notion": SiNodedotjs,
    "Scrum": SiNodedotjs,
    "Docker": SiDocker,
    "OpenAI API": SiOpenai,
    "Claude": SiOpenai,
    "AI Integration": SiOpenai,
    "Automation": SiNodedotjs,
};

const CATEGORY_ICONS = {
    "frontend": SiNuxtdotjs,
    "mobile": SiReact,
    "backend": SiNodedotjs,
    "tools": SiGit,
    "ai": SiOpenai,
};

const WHATIDO_ICONS = [MdWeb, MdPhoneIphone, MdAccountTree, MdAutoAwesome];

const INTRO_ICONS = [MdLocationOn, MdSchool, SiRiotgames, MdGridOn, MdLocalDrink];

export default function About() {
    const { t } = useTranslation();
    const categories = skillsData.categories;

    return (
        <main className="flex-grow">

            {/* Sección 1: Intro */}
            <section className="flex flex-col gap-[1.5em] justify-center items-center p-[1.5em] mx-auto max-w-[50em] animationBlurIn zoom-scale-root mt-14 md:mt-20">

                {/* Nombre grande */}
                <h1 className="about-name text-center text-cream font-bold text-[2em] md:text-[2.5em] leading-tight tracking-tight">
                    {t('about.name')}
                </h1>

                <div className="flex flex-col md:flex-row gap-[2em] w-full items-start">
                    {/* Izquierda — bio */}
                    <p className="font_juan_intro flex-1">{t('about.bio')}</p>

                    {/* Derecha — datos */}
                    <ul className="relative flex flex-col gap-[0.75em] flex-1">
                        {t('about.intro', { returnObjects: true }).map((point, index) => {
                            const IntroIcon = INTRO_ICONS[index];
                            return (
                                <li
                                    key={index}
                                    className="about-item relative flex items-center gap-[0.625em]"
                                >
                                    <span className="flex shrink-0 items-center justify-center w-[1.5em] h-[1.5em] rounded-full bg-charcoal dark:bg-brick border-[0.0625em] border-red-300 dark:border-red-200 text-cream transition-transform duration-300 hover:scale-110">
                                        {IntroIcon && <IntroIcon size="0.75em" />}
                                    </span>
                                    <span className="text-red-400 dark:text-red-200 text-[0.75em]">{point}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[0.75em] w-full">
                    {t('about.whatIDo.items', { returnObjects: true }).map((item, index) => {
                        const WhatIcon = WHATIDO_ICONS[index];
                        return (
                            <article
                                key={index}
                                className="flex flex-col gap-[0.375em] surface-panel frame-red rounded-[0.375em] p-[0.875em]"
                            >
                                <header className="flex items-center gap-[0.5em]">
                                    <span className="flex shrink-0 items-center justify-center w-[1.75em] h-[1.75em] rounded-[0.25em] bg-brick dark:bg-red-300 text-cream">
                                        <WhatIcon size="1em" />
                                    </span>
                                    <h3 className="font_juan_title_projects">{item.title}</h3>
                                </header>
                                <p className="text-red-400 dark:text-red-200 text-[0.75em] text-justify leading-relaxed">
                                    {item.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* Sección 2: Skills */}
            <section className="flex flex-col gap-[1.25em] justify-center items-center p-[1.5em] mx-auto max-w-[50em] animationBlurIn zoom-scale-root mt-8 md:mt-16">
                <h1 className="text-center font_juan_tittle">{t('about.skillsTitle')}</h1>
                <div className="flex flex-col gap-[0.625em] w-full">
                    {categories.map((category) => {
                        const CatIcon = CATEGORY_ICONS[category.id];
                        return (
                            <article
                                key={category.id}
                                className="flex flex-col gap-[0.375em] surface-panel frame-red rounded-[0.375em] p-[0.875em]"
                            >
                                <h3 className="font_juan_title_projects flex items-center gap-[0.375em]">
                                    <span className="flex shrink-0 items-center justify-center w-[1.25em] h-[1.25em] text-cream">
                                        {CatIcon && <CatIcon size="1em" />}
                                    </span>
                                    {t(`about.skills.categories.${category.id}`)}
                                </h3>
                                <div className="flex flex-wrap gap-[0.375em]">
                                    {category.skills.map((skill) => {
                                        const Icon = SKILL_ICONS[skill];
                                        return (
                                            <span
                                                key={skill}
                                                className="flex items-center gap-[0.25em] px-[0.5em] py-[0.125em] rounded-full border-[0.0625em] border-red-300 dark:border-red-200 text-red-400 dark:text-red-200 text-[0.7em]"
                                            >
                                                {Icon && <Icon size="0.7em" className="shrink-0 text-cream" />}
                                                {skill}
                                            </span>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* Sección 3: Filosofía — separada y destacada */}
            <div className="animationBlurIn zoom-scale-root mt-16 md:mt-28 mb-14 md:mb-24 px-[2.5em]">
                <blockquote className="philosophy-block flex flex-col items-center gap-[1em] py-[1.5em] mx-auto max-w-[31.25em] text-center">
                    <span className="text-cream text-[1.5em] leading-none font-bold">"</span>
                    <p className="font_juan_intro">{t('about.philosophy')}</p>
                </blockquote>
            </div>

        </main>
    );
}
