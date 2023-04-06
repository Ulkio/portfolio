import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const isAboveMediumScreens = useMediaQuery({ query: `(min-width:1024px)` });

  const handleCopyClick = () => {
    setIsEmailCopied(!isEmailCopied);
    navigator.clipboard.writeText("guillaume.verschave@gmail.com");
  };

  return (
    <section
      id="présentation"
      className="border-t-2 border-yellow-palette bg-blue-palette-background h-full pt-32 pb-32">
      <div className="h-full px-8 lg:px-24 flex flex-col lg:flex-row justify-center lg:justify-between">
        <div className="h-screen flex flex-col justify-center gap-8   basis-1/3">
          <p className="text-3xl lg:text-6xl text-yellow-palette font-semibold">Bonjour !</p>
          <p className="text-lg">
            Je suis un développeur web passionné et en constante évolution. Actuellement, j'apprends les technologies
            suivantes : React, Express, Node et MongoDB, l'ensemble connu sous le nom de stack MERN. Je suis impatient
            de mettre mes compétences en pratique et de relever de nouveaux défis professionnels. Si vous recherchez un
            développeur web déterminé, n'hésitez pas à me contacter !
          </p>
          <div>
            <p className="inline text-lg uppercase">
              <span className="text-yellow-palette">Email : </span>guillaume.verschave@gmail.com
            </p>
            {isAboveMediumScreens && (
              <>
                <img
                  onClick={handleCopyClick}
                  id="copy"
                  className="inline invert pl-2 h-4 hover:cursor-pointer"
                  src="assets/copy.png"
                />
                <Tooltip anchorId="copy" place="right" content={`${isEmailCopied ? `Copié !` : `Copier l'email`}`} />
              </>
            )}
            <p className="text-lg uppercase">
              <span className="text-yellow-palette">Téléphone : </span>06.47.26.36.09
            </p>
          </div>
        </div>
        <div className="h-screen flex flex-col justify-center basis-1/3 ">
          <div className="flex flex-row flex-wrap justify-center gap-2">
            <div className="bg-blue-palette-navbar  h-16 w-16 lg lg:h-32 lg:w-32 flex flex-col items-center justify-evenly">
              {isAboveMediumScreens && <img className="invert" src="assets/fusee-96.png" />}
              <p className="font-semibold text-xs">ESPACE</p>
            </div>
            <div className="bg-blue-palette-navbar  h-16 w-16 lg:h-32 lg:w-32 flex flex-col items-center justify-evenly">
              {isAboveMediumScreens && <img className="invert" src="assets/manette-96.png" />}
              <p className="font-semibold text-xs">GAMING</p>
            </div>
            <div className="bg-blue-palette-navbar  h-16 w-16 lg:h-32 lg:w-32 flex flex-col items-center justify-evenly">
              {isAboveMediumScreens && <img className="invert" src="assets/hiragana-ma-96.png" />}
              <p className="font-semibold text-xs">MANGAS</p>
            </div>
            <div className="bg-blue-palette-navbar  h-16 w-16 lg:h-32 lg:w-32 flex flex-col items-center justify-evenly">
              {isAboveMediumScreens && <img className="invert" src="assets/microscope-96.png" />}
              <p className="font-semibold text-xs">SCIENCE</p>
            </div>
            <div className="bg-blue-palette-navbar  h-16 w-16 lg:h-32 lg:w-32 flex flex-col items-center justify-evenly">
              {isAboveMediumScreens && <img className="invert" src="assets/tv-96.png" />}
              <p className="font-semibold text-xs">SÉRIES</p>
            </div>
            <div className="bg-blue-palette-navbar  h-16 w-16 lg:h-32 lg:w-32 flex flex-col items-center justify-evenly">
              {isAboveMediumScreens && <img className="invert" src="assets/tech-96.png" />}
              <p className="font-semibold text-xs">TECH</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
