import { FC } from "react";
import Image from "next/image";
import { Project } from "../../types/@types";
import styles from "./ProjectCard.module.css";

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <div className={`${styles.root} d-flex`}>
      <div className="w-50">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={300}
        />
      </div>
      <div className="w-50 d-flex flex-column justify-content-between p-3">
        <div>
          <h5>{project.title}</h5>
          <p>{project.description}</p>
        </div>
        <div className="d-flex gap-5">
          <a
            href={project.repoUrl}
            target="_blank"
            className="text-white display-6"
          >
            <i className="bi bi-github" />
          </a>
          <a
            href={project.deployUrl}
            target="_blank"
            className="text-white display-6"
          >
            <i className="bi bi-box-arrow-up-right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
