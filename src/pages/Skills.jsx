import React from "react";

const frontSkills = ["react", "tailwind"];
const backSkills = ["mongodb", "node", "express"];
const tools = ["figma", "git"];

const Skills = () => {
  return (
    <section
      id="compétences"
      className="border-t-2 border-yellow-palette bg-blue-palette-background h-full pt-32 pb-32">
      <div className="h-full px-8 lg:px-24 flex flex-col justify-center items-center gap-8 lg:gap-16">
        <p className="text-3xl lg:text-6xl text-yellow-palette">COMPÉTENCES</p>
        <div className="flex  lg:flex-row gap-4 lg:gap-16 flex-wrap justify-center">
          <div className="flex flex-col gap-8">
            <p className="self-center text-lg font-semibold">FRONT</p>
            <div className="flex gap-8">
              {frontSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-blue-palette-navbar flex flex-col items-center justify-center p-4 lg:w-32">
                  <img className="invert h-16 lg:h-20" src={`assets/${skill}.png`} />
                  <p className="font-semibold uppercase">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="self-center text-lg font-semibold">BACK</p>
            <div className="flex gap-8">
              {backSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-blue-palette-navbar flex flex-col items-center justify-center p-4 lg:w-32">
                  <img className="invert h-16 lg:h-20 object-scale-down" src={`assets/${skill}.png`} />
                  <p className="font-semibold uppercase">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="self-center text-lg font-semibold">OUTILS</p>
            <div className="flex gap-8">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-blue-palette-navbar flex flex-col items-center justify-center p-4 lg:w-32">
                  <img className="invert h-16 lg:h-20" src={`assets/${tool}.png`} />
                  <p className="font-semibold uppercase">{tool}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
