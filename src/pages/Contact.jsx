import React from "react";
import { useMediaQuery } from "react-responsive";
import GoogleMapReact from "google-map-react";

const Contact = () => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const isAboveMediumScreens = useMediaQuery({ query: `(min-width:1024px)` });
  const defaultProps = {
    center: {
      lat: 45.8764084,
      lng: 1.0122048,
    },
    zoom: 13,
  };
  return (
    <section
      id="contact"
      className="border-t-2 border-yellow-palette bg-blue-palette-background h-screen py-16 md:py-24">
      {isAboveMediumScreens ? (
        <div className="h-full px-24  flex flex-col justify-center gap-8 lg:gap-16">
          <p className="text-3xl lg:text-6xl text-yellow-palette text-center">CONTACT</p>
          <div>
            <div className="mt-16 flex flex-row gap-16 ">
              <div className="basis-1/2">
                <form action="https://formspree.io/f/xknagzva" method="POST">
                  <div className="flex flex-col gap-16">
                    <input
                      className="bg-blue-palette-background border-b-2 border-yellow-palette focus:outline-none"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Votre nom..."
                    />
                    <input
                      className="bg-blue-palette-background border-b-2 border-yellow-palette focus:outline-none"
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Votre email..."
                    />
                    <textarea
                      className="bg-blue-palette-background border-b-2 border-yellow-palette focus:outline-none resize-none"
                      name="message"
                      id="message"
                      cols="20"
                      rows="5"
                      placeholder="Votre message..."
                    />
                  </div>
                  <button
                    className="mt-16 text-left font-semibold border-2 border-yellow-palette text-yellow-palette px-8 py-2
                hover:scale-105 transition duration-100"
                    type="submit">
                    ENVOYER
                  </button>
                </form>
              </div>
              <div className="basis-1/2 ">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_API_KEY }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}>
                  <AnyReactComponent lat={45.8784264} lng={1.0272048} />
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full  flex flex-col justify-center ">
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
