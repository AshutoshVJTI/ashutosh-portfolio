import Image from "next/image";
import Heading from "../Heading/Heading";

const About = () => {
  return (
    <section id="about">
      <div className="container mt-5">
        <Heading title="ABOUT" />
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="about-img">
              <Image
                src="/assets/images/profile.jpg"
                alt="Ashutosh Mathore"
                width={400}
                height={400}
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="about-text">
              <p>
                Hello! My name is Ashutosh Mathore and I am a passionate Web
                Developer from India. I love using the newest cutting edge
                technologies for my projects such as Next.js and TypeScript,
                along with React.
              </p>
              <p>Other technologies I&apos;m interested in:</p>
              <ul>
                <li>C#/.NET</li>
                <li>Typescript</li>
                <li>Angular</li>
                <li>Vue</li>
                <li>Java/Spring</li>
                <li>Next.js</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
