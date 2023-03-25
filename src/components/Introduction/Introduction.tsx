import Image from "next/image";
import Link from "next/link";
import styles from "./Introduction.module.css";
import { techStack } from "../../data/techStack";
import Button from "../Button/Button";

const Introduction = () => {
  return (
    <section>
      <div className={`${styles.root} container`}>
        <div className="display-4" style={{ fontWeight: 600 }}>
          Hello, <br /> I&apos;m{" "}
          <span className="greenText">Ashutosh Mathore</span>.<br />
          I&apos;m a <span className="greenText">Frontend</span> Web Developer.
        </div>
        <div className="d-flex flex-column gap-4 mt-4">
          <div>
            {techStack.map((tech) => (
              <Image
                key={tech.id}
                src={"/assets" + tech.src}
                alt={tech.name}
                width={80}
                height={80}
              />
            ))}
          </div>
          <Button
            label="CHECK OUT MY CODE ON GITHUB"
            href="https://github.com/AshutoshVJTI"
            targetBlank
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
