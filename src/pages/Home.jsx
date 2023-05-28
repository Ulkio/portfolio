import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isAboveMediumScreens = useMediaQuery({ query: `(min-width:1024px)` });

  return (
    <section id="accueil" className="h-full bg-space-bg bg-cover">
      {isAboveMediumScreens ? (
        <div className="flex h-screen items-center gap-16">
          <div className="flex basis-1/2 gap-6">
            <img
              className=" border-2 border-yellow-palette rounded-full h-64 w-64 max-w-lg object-fill"
              src="assets/me.jpg"
            />
            <div className="flex flex-col gap-6">
              <p className="text-3xl lg:text-4xl font-bold">
                Bonjour ! <br />
                Je suis Guillaume.
              </p>
              <p className="text-xl lg:text-2xl ">
                Développeur web fullstack en constante quête d'évolution. J'aime travailler avec les technologies
                modernes.
              </p>
              <div className="flex flex-row items-center">
                <a
                  href="https://drive.google.com/file/d/1fmJPRNpC06j2Np92tLL67DYZz9CR8H56/view?usp=share_link"
                  target="_blank"
                  className="text-center text-xl lg:text-1xl font-bold underline">
                  Télécharger mon CV
                </a>
                <img
                  onClick={() =>
                    window.open("https://drive.google.com/file/d/1fmJPRNpC06j2Np92tLL67DYZz9CR8H56/view?usp=share_link")
                  }
                  className="pl-2 invert h-6 hover:cursor-pointer"
                  src="assets/download.png"
                />
              </div>
            </div>
          </div>
          <div className="h-screen flex flex-col justify-center basis-1/2">
            <div className="flex flex-row flex-wrap gap-8 justify-evenly">
              <div className=" h-16 w-16 lg lg:h-24 lg:w-24 flex flex-col items-center justify-evenly hover:-translate-y-2 transition duration-300">
                {isAboveMediumScreens && <img className="invert" src="assets/fusee-96.png" />}
                <p className="font-semibold text-xs">ESPACE</p>
              </div>
              <div className=" h-16 w-16 lg:h-24 lg:w-24 flex flex-col items-center justify-evenly hover:-translate-y-2 transition duration-300">
                {isAboveMediumScreens && <img className="invert" src="assets/manette-96.png" />}
                <p className="font-semibold text-xs">GAMING</p>
              </div>
              <div className=" h-16 w-16 lg:h-24 lg:w-24 flex flex-col items-center justify-evenly hover:-translate-y-2 transition duration-300">
                {isAboveMediumScreens && <img className="invert" src="assets/hiragana-ma-96.png" />}
                <p className="font-semibold text-xs">MANGAS</p>
              </div>
              <div className=" h-16 w-16 lg:h-24 lg:w-24 flex flex-col items-center justify-evenly hover:-translate-y-2 transition duration-300">
                {isAboveMediumScreens && <img className="invert" src="assets/microscope-96.png" />}
                <p className="font-semibold text-xs">SCIENCE</p>
              </div>
              <div className=" h-16 w-16 lg:h-24 lg:w-24 flex flex-col items-center justify-evenly hover:-translate-y-2 transition duration-300">
                {isAboveMediumScreens && <img className="invert" src="assets/tv-96.png" />}
                <p className="font-semibold text-xs">SÉRIES</p>
              </div>
              <div className=" h-16 w-16 lg:h-24 lg:w-24 flex flex-col items-center justify-evenly hover:-translate-y-2 transition duration-300">
                {isAboveMediumScreens && <img className="invert" src="assets/tech-96.png" />}
                <p className="font-semibold text-xs">TECH</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-screen  items-center gap-8 pt-8 ">
          <div className="flex flex-col items-center gap-6">
            <img
              className=" border-2 border-yellow-palette rounded-full w-32 h-32 max-w-lg object-fill"
              src="assets/me.jpg"
            />
            <div className="flex flex-col items-center gap-6">
              <p className="text-3xl lg:text-4xl font-bold text-center">
                Bonjour ! <br />
                Je suis Guillaume.
              </p>
              <p className="text-xl lg:text-2xl text-center">
                Développeur web fullstack en constante quête d'évolution. J'aime travailler avec les technologies
                modernes.
              </p>
              <div className="flex flex-row items-center">
                <a
                  href="https://drive.google.com/file/d/1fmJPRNpC06j2Np92tLL67DYZz9CR8H56/view?usp=share_link"
                  target="_blank"
                  className="text-center text-xl lg:text-1xl font-bold underline">
                  Télécharger mon CV
                </a>
                <img
                  onClick={() =>
                    window.open("https://drive.google.com/file/d/1fmJPRNpC06j2Np92tLL67DYZz9CR8H56/view?usp=share_link")
                  }
                  className="pl-2 invert h-6 hover:cursor-pointer"
                  src="assets/download.png"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="flex flex-wrap gap-6 justify-evenly">
              <div className="flex flex-col items-center justify-evenly hover:-translate-y-2 transition duration-300">
                {isAboveMediumScreens && <img className="invert" src="assets/fusee-96.png" />}
                <p className="font-semibold text-xs">ESPACE</p>
              </div>
              <div className="flex flex-col items-center justify-evenly hover:-translate-y-2 transition duration-300">
                {isAboveMediumScreens && <img className="invert" src="assets/manette-96.png" />}
                <p className="font-semibold text-xs">GAMING</p>
              </div>
              <div className="flex flex-col items-center justify-evenly hover:-translate-y-2 transition duration-300">
                {isAboveMediumScreens && <img className="invert" src="assets/hiragana-ma-96.png" />}
                <p className="font-semibold text-xs">MANGAS</p>
              </div>
              <div className="flex flex-col items-center justify-evenly hover:-translate-y-2 transition duration-300">
                {isAboveMediumScreens && <img className="invert" src="assets/microscope-96.png" />}
                <p className="font-semibold text-xs">SCIENCE</p>
              </div>
              <div className="flex flex-col items-center justify-evenly hover:-translate-y-2 transition duration-300">
                {isAboveMediumScreens && <img className="invert" src="assets/tv-96.png" />}
                <p className="font-semibold text-xs">SÉRIES</p>
              </div>
              <div className="flex flex-col items-center justify-evenly hover:-translate-y-2 transition duration-300">
                {isAboveMediumScreens && <img className="invert" src="assets/tech-96.png" />}
                <p className="font-semibold text-xs">TECH</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {isAboveMediumScreens && (
        <div className="flex justify-center -translate-y-24">
          <AnchorLink href={`#technologies`}>
            <img
              className="transform invert h-16 hover:cursor-pointer hover:scale-110 transition duration-200"
              src="assets/down-arrow.png"
            />
          </AnchorLink>
        </div>
      )}
    </section>
  );
};

export default Home;
