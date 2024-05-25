import React from "react";
import { useMediaQuery } from "react-responsive";
import "react-tooltip/dist/react-tooltip.css";

const technologyCategories = [
  {
    title: "Base",
    description: "Technologies utilisées dans tous les projets",
    technologies: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg", alt: "HTML5" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg", alt: "CSS3" },
    ],
  },
  {
    title: "Frontend",
    description: "Technologies utilisées pour la partie frontend des applications",
    technologies: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", alt: "React" },
      { src: "https://img.icons8.com/color/96/tailwind_css.png", alt: "Tailwind CSS" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
    ],
  },
  {
    title: "Backend",
    description: "Technologies utilisées pour la partie backend des applications",
    technologies: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg", alt: "Node.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg", alt: "Express", invert: true },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg", alt: "Firebase" },
    ],
  },
  {
    title: "Outils et bases de données",
    description: "Outils utilisés pour m'aider dans le développement d'applications, et les bases de données avec lesquelles je travaille",
    technologies: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg", alt: "VSCode" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg", alt: "Git" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg", alt: "MongoDB" },
    ],
  },
];

const TechnologyCard = ({ title, description, technologies, isLargeScreen }) => (
  <div className={`w-${isLargeScreen ? '[500px]' : 'full'} h-[300px] py-4 bg-blue-palette-navbar flex flex-col gap-8 items-center justify-evenly rounded-xl shadow-md hover:scale-[102%] hover:cursor-pointer transition duration-200`}>
    <p className="text-center text-3xl">{title}</p>
    <p className="text-center">{description}</p>
    <div className="flex gap-8 flex-wrap justify-center">
      {technologies.map(({ src, alt, invert }) => (
        <img key={alt} src={src} alt={alt} className={`object-scale-down w-16 ${invert ? 'invert' : ''}`} />
      ))}
    </div>
  </div>
);

const About = () => {
  const isAboveMediumScreens = useMediaQuery({ query: `(min-width:1200px)` });

  return (
    <section id="technologies" className="bg-blue-palette-background h-full py-16 xl:py-24">
      <div className={`flex flex-col items-center ${isAboveMediumScreens ? 'gap-16' : 'gap-8'}`}>
        <p className="text-3xl lg:text-6xl text-yellow-palette">TECHNOLOGIES</p>
        <div className={`grid  2xl:grid-cols-2  grid-cols-1 gap-12`}>
          {technologyCategories.map((category) => (
            <TechnologyCard key={category.title} {...category} isLargeScreen={isAboveMediumScreens} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
