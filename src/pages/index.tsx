import Head from "next/head";
import Image from "next/image";
import { Raleway } from "next/font/google";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import ContactMe from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FloatingIcons from "@/components/FloatingIcons/FloatingIcons";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashutosh Mathore - Portfolio</title>
        <meta name="description" content="My portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="top">
        <Header />

        <main className={`${raleway.className} container`}>
          <Introduction />
          <FloatingIcons />
          <About />
          <Projects />
          <ContactMe />
        </main>

        <Footer />
      </section>
    </>
  );
}
