import React from "react";

const Skills = () => {
  return (
    <section id="compétences" className="border-t-4 border-yellow-palette bg-blue-palette-background h-screen">
      <div className="h-full px-8 lg:px-24 flex flex-col justify-center items-center gap-8 lg:gap-32">
        <p className="text-3xl lg:text-6xl text-yellow-palette">COMPÉTENCES</p>
        <div className="flex  lg:flex-row gap-4 lg:gap-16 flex-wrap justify-center">
          <div className="bg-blue-palette-navbar flex flex-col items-center p-4">
            <img className="invert h-16 lg:h-32" src="assets/mongodb.png" />
            <p className="font-semibold">MONGODB</p>
          </div>
          <div className="bg-blue-palette-navbar flex flex-col items-center justify-center p-4">
            <img className="invert h-16 lg:h-32" src="assets/express.png" />
            <p className="font-semibold">EXPRESS</p>
          </div>
          <div className="bg-blue-palette-navbar flex flex-col items-center justify-center p-4">
            <img className="invert h-16 lg:h-32" src="assets/react.png" />
            <p className="font-semibold">REACT</p>
          </div>
          <div className="bg-blue-palette-navbar flex flex-col items-center justify-center p-4">
            <img className="invert h-16 lg:h-32" src="assets/node.png" />
            <p className="font-semibold">NODEJS</p>
          </div>
          <div className="bg-blue-palette-navbar flex flex-col items-center justify-center p-4">
            <img className="invert h-16 lg:h-32" src="assets/tailwind.png" />
            <p className="font-semibold">TAILWIND</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
