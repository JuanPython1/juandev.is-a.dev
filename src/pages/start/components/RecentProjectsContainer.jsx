import { useTranslation } from "react-i18next";
import ContainerProject_Recent from "@/components/Container_Project_Recent/ContainerProject_Recent";
import ProjectsRecentsLocal from "@data/Projects.json";

export default function ProyectContainer() {
    const { t } = useTranslation();
    const projects = ProjectsRecentsLocal.Projects.flatMap((group) => group.ProjectsRecent);

    return (
        <>
            <h2 className="text-center font_juan_tittle">
                {t('projects.recentTitle')}
            </h2>

            <ContainerProject_Recent Projects={projects} />
        </>
    );
}
