import { Project } from "@/types/@types";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "What's Next?",
    description:
      "This is a website that was made in React. It serves the purpose of providing recommendations to the users on the movies and the series that they can watch next based on the type or similar to the movies they have watched. It uses TMDB API for this purpose.",
    techStack: ["React", "MaterialUI", "TMDB API"],
    image: "/assets/images/whats-next.png",
    repoUrl: "https://github.com/AshutoshVJTI/Whats-Next",
    deployUrl: "https://react-whats-next.netlify.app/",
  },
  {
    id: 2,
    title: "Musik",
    description:
      "Modern-day music player made using React, Redux, TypeScript, Tailwind CSS.",
    techStack: ["React", "Redux", "TypeScript", "Tailwind CSS"],
    image: "/assets/images/musik.png",
    repoUrl: "https://github.com/AshutoshVJTI/Musik",
    deployUrl: "https://musik-dev.netlify.app/",
  },
];
