import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isAboveMediumScreens = useMediaQuery({ query: `(min-width:1200px)` });

  return (
    <section
      id="technologies"
      className=" bg-blue-palette-background h-full py-16 xl:py-24">
      {isAboveMediumScreens ? (
        <div className="flex flex-col items-center gap-16">
          <p className="text-3xl lg:text-6xl text-yellow-palette ">TECHNOLOGIES</p>
          <div className="grid xl:grid-cols-2 gap-12 ">
            <div className="w-[500px] h-[300px] py-4 bg-blue-palette-navbar flex flex-col gap-8 items-center justify-evenly  rounded-xl shadow-md  hover:scale-[102%] hover:cursor-pointer transition duration-200">
              <p className="text-center text-3xl">Base</p>
              <p className="text-center">Technologies utilisées dans tous les projets</p>
              <div className="flex gap-8">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                  className="w-20"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  className="w-20"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                  className="w-20"
                />
              </div>
            </div>
            <div className="w-[500px] h-[300px] py-4 bg-blue-palette-navbar flex flex-col gap-8 items-center justify-evenly  rounded-xl shadow-xl  hover:scale-[102%] hover:cursor-pointer transition duration-200">
              <p className="text-center text-3xl">Frontend</p>
              <p className="text-center">Technologies utilisées pour la partie frontend des applications</p>
              <div className="flex gap-8">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                  className="w-20"
                />
                <img
                  src="https://img.icons8.com/color/96/tailwind_css.png"
                  className="w-20"
                />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-20" />
              </div>
            </div>
            <div className="w-[500px] h-[300px] py-4 bg-blue-palette-navbar flex flex-col gap-8 items-center justify-evenly  rounded-xl shadow-xl  hover:scale-[102%] hover:cursor-pointer transition duration-200">
              <p className="text-center text-3xl">Backend</p>
              <p className="text-center">Technologies utilisées pour la partie backend des applications</p>
              <div className="flex gap-8">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                  className="w-20"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                  className="w-20 invert"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
                  className="w-20"
                />
              </div>
            </div>
            <div className="w-[500px] h-[300px] py-4 bg-blue-palette-navbar flex flex-col gap-8 items-center justify-evenly  rounded-xl shadow-xl  hover:scale-[102%] hover:cursor-pointer transition duration-200">
              <p className="text-center text-3xl">Outils et bases de données</p>
              <p className="text-center">
                Outils utilisés pour m'aider dans le développement d'applications, et les bases de données avec
                lesquelles je travaille
              </p>
              <div className="flex gap-8">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
                  className="w-20"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                  className="w-20"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                  className="w-20"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                  className="w-20"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center gap-8">
            <p className="text-3xl lg:text-6xl text-yellow-palette text-center">TECHNOLOGIES</p>
            <div className="flex flex-col gap-6 ">
              <div className="px-8  py-4 bg-blue-palette-navbar flex flex-col gap-8 items-center justify-evenly">
                <p className="text-center text-3xl">Base</p>
                <p className="text-center">Technologies utilisées dans tous les projets</p>
                <div className="flex gap-8">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                    className="w-12"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    className="w-12"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                    className="w-12"
                  />
                </div>
              </div>
              <div className="px-8  py-4 bg-blue-palette-navbar flex flex-col gap-8 items-center justify-evenly">
                <p className="text-center text-3xl">Frontend</p>
                <p className="text-center">Technologies utilisées pour la partie frontend des applications</p>
                <div className="flex gap-8">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                    className="w-12"
                  />
                  <img
                    src="https://img.icons8.com/color/96/tailwind_css.png"
                    className="w-12"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                    className="w-12"
                  />
                </div>
              </div>
              <div className="px-8  py-4 bg-blue-palette-navbar flex flex-col gap-8 items-center justify-evenly">
                <p className="text-center text-3xl">Backend</p>
                <p className="text-center">Technologies utilisées pour la partie backend des applications</p>
                <div className="flex gap-8">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                    className="w-12"
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    className="w-12 invert"
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
                    className="w-12"
                  />
                </div>
              </div>
              <div className="px-8 py-4 bg-blue-palette-navbar flex flex-col gap-8 items-center justify-evenly">
                <p className="text-center text-3xl">Outils et bases de données</p>
                <p className="text-center">
                  Outils utilisés pour m'aider dans le développement d'applications, et les bases de données avec
                  lesquelles je travaille
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
                    className="w-12"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    className="w-12"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                    className="w-12"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                    className="w-12"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default About;
