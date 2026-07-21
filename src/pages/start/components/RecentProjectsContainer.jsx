import { useTranslation } from "react-i18next";
import ContainerProject_Recent from "@/components/Container_Project_Recent/ContainerProject_Recent";
import ProjectsRecentsLocal from "@data/Projects.json";

export default function ProyectContainer() {
    const { t } = useTranslation();
    const projectsRecents = ProjectsRecentsLocal.Projects;

    return (
        <>
            <h2 className="text-center md:text-3xl font_juan_tittle">
                {t('projects.recentTitle')}
            </h2>

            {projectsRecents.map((projectGroup, index) =>
                projectGroup.ProjectsRecent.map((project, subIndex) => (
                    <div key={`${index}-${subIndex}`}>
                        <ContainerProject_Recent
                            Tittle={t(`projects.items.${project.id}.title`)}
                            Description={t(`projects.items.${project.id}.description`)}
                            Image={project.img}
                            ImageLight={project.imgLight}
                            Github={project.github}
                            Deploy={project.deploy}
                        />
                    </div>
                ))
            )}
        </>
    );
}
