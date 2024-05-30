import React from "react";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const isAboveMediumScreens = useMediaQuery({ query: `(min-width:1024px)` });

  return (
    <section
      id="contact"
      className=" bg-blue-palette-background h-screen py-16 md:py-24">
      {isAboveMediumScreens ? (
        <DesktopView/>
      ) : (
        <MobileView/>
      )}
    </section>
  );
};

const MobileView = () =>{
  return (
    <div className="h-full  flex flex-col justify-center ">
          <p className="text-3xl lg:text-6xl text-yellow-palette">CONTACT</p>
          <div>
            <div className="mt-16">
              <div className=" bg-blue-palette-navbar rounded-xl p-6">
                <form action="https://formspree.io/f/xknagzva" method="POST">
                  <div className="flex flex-col gap-16">
                    <input
                      className="bg-blue-palette-navbar p-2 border-b-2 border-yellow-palette focus:outline-none"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Votre nom..."
                    />
                    <input
                      className="bg-blue-palette-navbar p-2 border-b-2 border-yellow-palette focus:outline-none"
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Votre email..."
                    />
                    <textarea
                      className="bg-blue-palette-navbar p-2 border-b-2 border-yellow-palette focus:outline-none resize-none"
                      name="message"
                      id="message"
                      cols="20"
                      rows="5"
                      placeholder="Votre message..."
                    />
                  </div>
                  <button
                    className="mt-16 text-left font-semibold border-2 rounded-xl border-yellow-palette text-yellow-palette px-8 py-2"
                    type="submit">
                    ENVOYER
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
  )
}

const DesktopView = () =>{
  return(
    <div className="h-full px-24  flex flex-col justify-center gap-8 lg:gap-16 ">
          <p className="text-3xl lg:text-6xl text-yellow-palette text-center">CONTACT</p>
          <div>
            <div className="mt-16 flex flex-row gap-12 ">
              <div className="basis-1/2 bg-blue-palette-navbar rounded-xl p-6">
                <form action="https://formspree.io/f/xknagzva" method="POST">
                  <div className="flex flex-col gap-16 ">
                    <input
                      className="bg-blue-palette-navbar p-2 border-b-2 border-yellow-palette focus:outline-none"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Votre nom..."
                    />
                    <input
                      className="bg-blue-palette-navbar p-2 border-b-2 border-yellow-palette focus:outline-none"
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Votre email..."
                    />
                    <textarea
                      className="bg-blue-palette-navbar p-2 border-b-2 border-yellow-palette focus:outline-none resize-none"
                      name="message"
                      id="message"
                      cols="20"
                      rows="5"
                      placeholder="Votre message..."
                    />
                  </div>
                  <button
                    className="mt-16 text-left font-semibold border-2 rounded-xl border-yellow-palette text-yellow-palette px-8 py-2
                hover:scale-105 transition duration-100"
                    type="submit">
                    ENVOYER
                  </button>
                </form>
              </div>
              <div className="basis-1/2 ">
                <iframe
                  width="520"
                  height="400"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=4%20SAINT%20VICTURNIEN+()&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                <script
                  type="text/javascript"
                  src="https://embedmaps.com/google-maps-authorization/script.js?id=ffb283a7bde2bed10a9934b0c790af012e5186bf"></script>
              </div>
            </div>
          </div>
        </div>
  )
}
export default Contact;
