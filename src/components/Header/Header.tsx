import Link from "next/link";
import Image from "next/image";
import Typo from "../Typo/Typo";
import { navLinks } from "@/data/navLinks";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsScrolled(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId?.slice(1) || "");
    if (targetElement instanceof HTMLElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`${styles.root} navbar navbar-expand-lg sticky-top ${
        isScrolled && styles.scrolled
      }`}
      style={{ height: `100px` }}
    >
      <div className="container">
        <Link href="/">
          <div className="navbar-brand">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              className="img-fluid"
              width="300"
              height="50"
            />
          </div>
        </Link>
        <div className="collapse navbar-collapse align-items-center justify-content-end">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.href} onClick={smoothScroll} className={styles.navLink}>
              <Typo className={styles.link} fontFamily="Oswald">
                {link.title}
              </Typo>
            </Link>
          ))}
          <Button
            label="DOWNLOAD CV"
            href="/assets/docs/Ashutosh_Mathore_Resume.pdf"
            download
            targetBlank
            className="ms-5"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
