import { projectsData } from "@/data/projectsData";
import Heading from "../Heading/Heading";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <Heading title="PROJECTS" />
        <div className="row">
          {projectsData.map((project) => (
            <div key={project.id} className={styles.project}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;