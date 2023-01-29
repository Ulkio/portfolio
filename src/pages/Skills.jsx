import React from "react";

const Skills = () => {
  return (
    <section id="compétences" className="border-t-4 border-yellow-palette bg-blue-palette-background h-screen">
      <div className="h-full px-8 lg:px-24 flex flex-col justify-center items-center gap-8 lg:gap-32">
        <p className="text-3xl lg:text-6xl text-yellow-palette">COMPÉTENCES</p>
        <div className="flex  lg:flex-row gap-4 lg:gap-32 flex-wrap justify-center">
          <div className="flex flex-col gap-8">
            <p className="self-center text-lg font-semibold">FRONT</p>
            <div className="flex gap-8">
              <div className="bg-blue-palette-navbar flex flex-col items-center justify-center p-4">
                <img className="invert h-16 lg:h-32" src="assets/react.png" />
                <p className="font-semibold">REACT</p>
              </div>
              <div className="bg-blue-palette-navbar flex flex-col items-center justify-center p-4">
                <img className="invert h-16 lg:h-32" src="assets/tailwind.png" />
                <p className="font-semibold">TAILWIND</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="self-center text-lg font-semibold">BACK</p>
            <div className="flex gap-8">
              <div className="bg-blue-palette-navbar flex flex-col items-center p-4">
                <img className="invert h-16 lg:h-32" src="assets/mongodb.png" />
                <p className="font-semibold">MONGODB</p>
              </div>
              <div className="bg-blue-palette-navbar flex flex-col items-center justify-center p-4">
                <img className="invert h-16 lg:h-32" src="assets/express.png" />
                <p className="font-semibold">EXPRESS</p>
              </div>

              <div className="bg-blue-palette-navbar flex flex-col items-center justify-center p-4">
                <img className="invert h-16 lg:h-32" src="assets/node.png" />
                <p className="font-semibold">NODEJS</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="self-center text-lg font-semibold">TOOLS</p>
            <div className="flex gap-8">
              <div className="bg-blue-palette-navbar flex flex-col items-center justify-center p-4">
                <img className="invert h-16 lg:h-32" src="assets/figma.png" />
                <p className="font-semibold">FIGMA</p>
              </div>
              <div className="bg-blue-palette-navbar flex flex-col items-center justify-center p-4">
                <img className="invert h-16 lg:h-32" src="assets/git.png" />
                <p className="font-semibold">GIT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
