import Link from "next/link";
import Typo from "../Typo/Typo";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.root} text-white py-3`}>
      <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-center">
        <Typo fontFamily="Spline_Sans_Mono" className="mb-3 mb-lg-0">
          Made with ❤️ by Ashutosh Mathore
        </Typo>
        <div className="d-flex gap-4">
          <Link
            href="https://www.linkedin.com/in/ashutosh-mathore/"
            target="_blank"
          >
            <i className="bi bi-linkedin text-white h4" />
          </Link>
          <Link href="https://github.com/AshutoshVJTI" target="_blank">
            <i className="bi bi-github text-white h4" />
          </Link>
          <Link href="mailto:mathoreashutosh@gmail.com" target="_blank">
            <i className="bi bi-envelope-at-fill text-white h4" />
          </Link>
          <Link href="https://twitter.com/Ashutosh0w0" target="_blank">
            <i className="bi bi-twitter text-white h4" />
          </Link>
          <Link href="https://www.instagram.com/a.shoe.toast/" target="_blank">
            <i className="bi bi-instagram text-white h4" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
