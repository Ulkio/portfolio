import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Projects = () => {
  const isAboveMediumScreens = useMediaQuery({ query: `(min-width:1024px)` });

  return (
    <section id="projets" className="border-t-4 border-yellow-palette bg-blue-palette-background h-screen">
      <div className="h-full flex flex-col justify-center items-center gap-8 lg:gap-32">
        <p className="text-3xl lg:text-6xl text-yellow-palette">PROJETS</p>
        <div className="flex flex-row gap-8 justify-center flex-wrap w-full px-6">
          <motion.div
            onClick={() => window.open("http://highvalyrianglyphs.onrender.com")}
            className="relative hover:cursor-pointer">
            {isAboveMediumScreens && (
              <div className="p-8 absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-yellow-palette flex flex-col justify-between text-center  ">
                <p className=" text-blue-palette-navbar text-lg font-semibold">High Valyrian Glyphs</p>
                <p className=" text-blue-palette-navbar text-lg font-semibold">
                  Apprendre les glyphes écrits par David J Peterson pour le langage créé pour Game of Thrones et House
                  of the Dragon.
                </p>
                <p className=" text-blue-palette-navbar text-sm font-semibold">Créé avec la stack MERN + TailwindCSS</p>
              </div>
            )}
            <img className="w-48 h-48 lg:w-80 lg:h-80 object-cover" src={`assets/projetHV.png`} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
