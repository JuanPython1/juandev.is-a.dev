import ContainerProject_Recent from "@/components/Container_Project_Recent/ContainerProject_Recent";
import ProjectsRecentsLocal from "@data/Projects.json";

export default function ProyectContainer() {
    const projectsRecents = ProjectsRecentsLocal.Projects;

    console.log(projectsRecents);

    return (
        <>
            <h2 className="text-center md:text-3xl font_juan_tittle">
                Recent Projects 2025
            </h2>

            {projectsRecents.map((projectGroup, index) =>
                projectGroup.ProjectsRecent.map((project, subIndex) => (
                    <div key={`${index}-${subIndex}`}>
                        <ContainerProject_Recent
                            Tittle={project.title}
                            Description={project.description}
                            Image={project.url}
                        />
                    </div>
                ))
            )}
        </>
    );
}
