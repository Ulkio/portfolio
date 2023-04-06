import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  return (
    <section id="accueil" className=" h-full bg-space-bg bg-cover ">
      <div className="flex h-screen md:flex-row flex-col items-center justify-center gap-8">
        <div>
          <img className=" border-8 border-yellow-palette rounded-full w-80 max-w-lg object-fill" src="assets/me.jpg" />
        </div>

        <div className="flex flex-col gap-8">
          <p className="text-center text-yellow-palette text-3xl lg:text-6xl font-bold">GUILLAUME VERSCHAVE</p>
          <div className="flex flex-row gap-24">
            <a href="https://github.com/Ulkio">
              <img className="invert h-12" src="assets/github-96.png" alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/guillaume-verschave/">
              <img className="invert h-12" src="assets/linkedin-96.png" alt="linkedin" />
            </a>
            <a href="https://twitter.com/Ulkio_">
              <img className="invert h-12" src="assets/twitter-96.png" alt="twitter" />
            </a>
          </div>
          <p className="text-xl lg:text-3xl font-bold">Développeur Web Fullstack</p>
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
      <div className="flex justify-center -translate-y-24">
        <AnchorLink href={`#présentation`}>
          <img
            className="transform invert h-16 hover:cursor-pointer hover:scale-110 transition duration-200"
            src="assets/down-arrow.png"
          />
        </AnchorLink>
      </div>
    </section>
  );
};

export default Home;
