import React from "react";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const isAboveMediumScreens = useMediaQuery({ query: `(min-width:1024px)` });

  return (
    <section id="contact" className="border-t-4 border-yellow-palette bg-blue-palette-background h-screen">
      {isAboveMediumScreens ? (
        <div className="h-full px-24 flex flex-col justify-center gap-8 lg:gap-32">
          <p className="text-3xl lg:text-6xl text-yellow-palette text-center">CONTACT</p>
          <div>
            <div className="mt-16 flex flex-row ">
              <div className="w-1/2">
                <form action="https://formspree.io/f/xknagzva" method="POST">
                  <div className="flex flex-col gap-16">
                    <input
                      className="bg-blue-palette-background border-b-4 border-yellow-palette focus:outline-none"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Votre nom..."
                    />
                    <input
                      className="bg-blue-palette-background border-b-4 border-yellow-palette focus:outline-none"
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Votre email..."
                    />
                    <textarea
                      className="bg-blue-palette-background border-b-4 border-yellow-palette focus:outline-none resize-none"
                      name="message"
                      id="message"
                      cols="20"
                      rows="5"
                      placeholder="Votre message..."
                    />
                  </div>
                  <button
                    className="mt-16 text-left font-semibold border-4 border-yellow-palette text-yellow-palette px-8 py-2
                hover:scale-105 transition duration-100"
                    type="submit">
                    ENVOYER
                  </button>
                </form>
              </div>
              <div className="w-1/2 flex flex-row gap-24 justify-center ">
                <a href="https://github.com/Ulkio">
                  <img className="invert h-24 object-scale-down" src="assets/github-96.png" alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/guillaume-verschave/">
                  <img className="invert h-24 object-scale-down" src="assets/linkedin-96.png" alt="linkedin" />
                </a>
                <a href="https://twitter.com/Ulkio_">
                  <img className="invert h-24 object-scale-down" src="assets/twitter-96.png" alt="twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full px-24 flex flex-col justify-center ">
          <p className="text-3xl lg:text-6xl text-yellow-palette">CONTACT</p>
          <div>
            <div className="mt-16">
              <div className="">
                <form action="https://formspree.io/f/xknagzva" method="POST">
                  <div className="flex flex-col gap-16">
                    <input
                      className="bg-blue-palette-background border-b-4 border-yellow-palette focus:outline-none"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Votre nom..."
                    />
                    <input
                      className="bg-blue-palette-background border-b-4 border-yellow-palette focus:outline-none"
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Votre email..."
                    />
                    <textarea
                      className="bg-blue-palette-background border-b-4 border-yellow-palette focus:outline-none resize-none"
                      name="message"
                      id="message"
                      cols="20"
                      rows="5"
                      placeholder="Votre message..."
                    />
                  </div>
                  <button
                    className="mt-16 text-left font-semibold border-4 border-yellow-palette text-yellow-palette px-8 py-2
                hover:scale-105 transition duration-100"
                    type="submit">
                    ENVOYER
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
