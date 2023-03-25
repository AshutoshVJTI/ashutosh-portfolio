import Link from "next/link";
import React from "react";
import styles from "./FloatingIcons.module.css";

const FloatingIcons = () => {
  return (
    <div className={styles.container}>
      <Link
        href="https://www.linkedin.com/in/ashutosh-mathore/"
        target="_blank"
        className="icon"
      >
        <i className="bi bi-linkedin text-white h4" />
      </Link>
      <Link
        href="https://github.com/AshutoshVJTI"
        target="_blank"
        className="icon"
      >
        <i className="bi bi-github text-white h4" />
      </Link>
      <Link
        href="mailto:mathoreashutosh@gmail.com"
        target="_blank"
        className="icon"
      >
        <i className="bi bi-envelope-at-fill text-white h4" />
      </Link>
      <Link
        href="https://twitter.com/Ashutosh0w0"
        target="_blank"
        className="icon"
      >
        <i className="bi bi-twitter text-white h4" />
      </Link>
      <Link
        href="https://www.instagram.com/a.shoe.toast/"
        target="_blank"
        className="icon"
      >
        <i className="bi bi-instagram text-white h4" />
      </Link>
    </div>
  );
};

export default FloatingIcons;
