import { Oswald, Raleway, Spline_Sans_Mono } from "next/font/google";

interface TypoProps {
  children: React.ReactNode;
  fontFamily?: "Oswald" | "Spline_Sans_Mono" | "Raleway";
  className?: string;
}

const raleway = Raleway({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["500"] });
const splineSansMono = Spline_Sans_Mono({ subsets: ["latin"] });

const Typo = (props: TypoProps) => {
  const { children, fontFamily, className } = props;
  const getFontFamily = () => {
    switch (fontFamily) {
      case "Oswald":
        return oswald.className;
      case "Spline_Sans_Mono":
        return splineSansMono.className;
      case "Raleway":
        return raleway.className;
      default:
        return "";
    }
  };

  return <div className={`${getFontFamily()} ${className}`}>{children}</div>;
};

export default Typo;
