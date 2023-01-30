import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isAboveMediumScreens = useMediaQuery({ query: `(min-width:1024px)` });

  return (
    <section id="accueil" className="pt-16 h-screen bg-space-bg bg-cover ">
      <div className="flex h-full flex-col items-center justify-center gap-8">
        <div className="border-8 border-yellow-palette w-64 h-64 lg:h-96 lg:w-96 rounded-full">
          <img className="rounded-full" src="assets/me.jpg" />
        </div>
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
        <p className="text-center text-xl lg:text-3xl font-bold">Développeur Web Fullstack</p>
        <AnchorLink href={`#présentation`}>
          <img
            className="transform translate-y-20 invert h-16 hover:cursor-pointer hover:scale-110 transition duration-200"
            src="assets/down-arrow.png"
          />
        </AnchorLink>
      </div>
    </section>
  );
};

export default Home;
