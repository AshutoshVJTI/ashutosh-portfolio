import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { Project } from "../../types/@types";
import styles from "./ProjectCard.module.css";
import Typo from "../Typo/Typo";

interface Props {
  project: Project;
  headingLevel?: '1' | '2' | '3' | '4' | '5' | '6'; 
}

const ProjectCard: FC<Props> = ({ project, headingLevel = '4' }) => { 
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  
  const Heading = `h${headingLevel}` as keyof JSX.IntrinsicElements;  

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
      <div className="w-50 d-flex flex-column justify-content-between p-3 text-black">
        <div>
          <Heading className="mb-3">{project.title}</Heading> 
          <p>{project.description}</p>
        </div>
        <div className="d-flex gap-3 align-items-center justify-content-between">
          <span className="text-secondary">
            <Typo fontFamily="Spline_Sans_Mono">
              {project.techStack.join(", ")}
            </Typo>
          </span>
          <div className="d-flex gap-3">
            <a
              href={project.repoUrl}
              target="_blank"
              className="text-black"
              aria-label="Link to the project repository"
            >
              <i className="bi bi-github fs-5" />
            </a>
            <a
              href={project.deployUrl}
              target="_blank"
              className="text-black"
              aria-label="Link to the deployed project"
            >
              <i className="bi bi-box-arrow-up-right fs-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
