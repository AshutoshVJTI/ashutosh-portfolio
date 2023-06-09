import Image from "next/image";
import Heading from "../Heading/Heading";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about">
      <Heading title="ABOUT" />
      <div className={`${styles.root} container`}>
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="about-img">
              <div className="box">
                <div className="hover-point"></div>
                <div className="hover-point"></div>
                <div className="hover-point"></div>
                <div className="hover-point"></div>
                <div className="hover-point"></div>
                <div className="hover-point"></div>
                <div className="hover-point"></div>
                <div className="hover-point"></div>
                <Image
                  src="/assets/images/profile.jpg"
                  alt="Profile Picture"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  className="box-contents"
                />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className={styles.aboutText}>
              <p>
                Hello! My name is Ashutosh Mathore and I am a passionate Web
                Developer from India. I love using the newest cutting edge
                technologies for my projects such as Next.js and TypeScript,
                along with React.
              </p>
              <div style={{ color: "#8891b0" }}>
                <p>Other technologies I&apos;m interested in:</p>
                <ul style={{ textAlign: "start" }}>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Artificial Intelligence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
