import Link from "next/link";
import Image from "next/image";
import Typo from "../Typo/Typo";
import { navLinks } from "@/data/navLinks";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

const Header = () => {
  
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsScrolled(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, [])

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
    <div className="sticky-top">
      <header
        className={`${styles.root} navbar navbar-expand-lg  position-relative ${
          isScrolled && styles.scrolled
        }`}
        style={{ height: `100px` }}
      >
        <div className="container">
          <Link href="/">
            <div>
              <Image
                src="/assets/images/logo.png"
                alt="Logo"
                className="img-fluid ms-3"
                width={isMobile ? 45 : 60}
                height={isMobile ? 45 : 60}
              />
            </div>
          </Link>
          <div
            className={`collapse navbar-collapse align-items-center justify-content-end`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={smoothScroll}
                className={styles.navLink}
              >
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
        {isMobile && (
          <button
            className="btn position-absolute end-0 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ zIndex: 1050 }}
          >
            <i
              className={`${
                !mobileMenuOpen ? "bi bi-list h3 m-2" : "bi bi-x-lg h3 m-2"
              }`}
              style={{ color: "#00ffc8 " }}
            />
          </button>
        )}
      </header>
      <div
        className={`position-absolute w-50 end-0 top-0 bg-dark ${
          styles.mobileMenu
        } ${mobileMenuOpen ? `${styles.mobileMenuOpen}` : ""}`}
        style={{ zIndex: 1030, height: "max-content"  }}
      >
        <div className="container">
          <div className={`d-flex flex-column align-items-center gap-3 py-5`}>
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={smoothScroll}
                className={styles.navLink}
              >
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
              className="mt-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
