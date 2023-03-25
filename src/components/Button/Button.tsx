import Link from "next/link";
import React from "react";
import Typo from "../Typo/Typo";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  href: string;
  targetBlank?: boolean;
  download?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { label, href, targetBlank, download, disabled, className } = props;
  return (
    <Link
      href={href}
      className={`${
        styles.button
      } ${className} nav-link btn btn-outline-light ${
        disabled ? "disabled" : ""
      }}`}
      target={targetBlank ? "_blank" : ""}
      download={download}
    >
      <Typo fontFamily="Oswald">{label}</Typo>
    </Link>
  );
};

export default Button;
