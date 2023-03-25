import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { Project } from "../../types/@types";
import styles from "./ProjectCard.module.css";
import Typo from "../Typo/Typo";

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  return (
    <div className={`${styles.root} d-flex`}>
      <div className="w-50">
        <Image
          src={project.image}
          alt={project.title}
          {...(isMobile && { width: 0, height: 0 })}
          {...(!isMobile && { width: 400, height: 300 })}
        />
      </div>
      <div className="w-50 d-flex flex-column justify-content-between p-3">
        <div>
          <h4 className="mb-3">{project.title}</h4>
          <p>{project.description}</p>
        </div>
        <div className="d-flex gap-3 align-items-center justify-content-between">
          <span className="text-secondary">
            <Typo fontFamily="Spline_Sans_Mono">
              {project.techStack.join(", ")}
            </Typo>
          </span>
          <div className="d-flex gap-3">
            <a href={project.repoUrl} target="_blank" className="text-white">
              <i className="bi bi-github fs-5" />
            </a>
            <a href={project.deployUrl} target="_blank" className="text-white">
              <i className="bi bi-box-arrow-up-right fs-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
