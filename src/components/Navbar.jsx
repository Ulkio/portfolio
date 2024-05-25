import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMediaQuery } from "react-responsive";

const Link = ({ visiblePage, page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${visiblePage === lowerCasePage ? "text-yellow-palette transform scale-110" : ""}
      transition duration-500`}
      href={`#${lowerCasePage}`}>
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ visiblePage, selectedPage, setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery({ query: `(min-width:1024px)` });
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <nav className=" z-40 w-screen fixed top-0 bg-transparent">
      <div className="font-opensans font-semibold h-16 flex flex-row justify-between items-center">
        {isAboveMediumScreens ? (
          <>
            <h1 className="text-lg md:text-xl lg:text-3xl">GUILLAUME VERSCHAVE</h1>
            <div className="flex flex-row gap-8">
              <Link
                visiblePage={visiblePage}
                page="Accueil"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                visiblePage={visiblePage}
                page="Technologies"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              {/* <Link
                visiblePage={visiblePage}
                page="Compétences"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> */}
              <Link
                visiblePage={visiblePage}
                page="Projets"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                visiblePage={visiblePage}
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </>
        ) : (
          <div className="w-full flex items-center justify-end">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img className="invert" src="assets/menu.png" alt="menu icon" />
            </button>
          </div>
        )}
        {!isAboveMediumScreens && (
          <div
            className={`fixed right-0 bottom-0 h-full bg-blue-palette-navbar w-[500px] ease-in-out duration-500 ${
              isMenuToggled ? "translate-x-0 " : "translate-x-full "
            }`}>
            {/* Close icon */}
            <div className="flex justify-end px-8 py-4">
              <button
                onClick={() => {
                  setIsMenuToggled(!isMenuToggled);
                }}>
                <img className="invert h-8" src="assets/close.png" alt="close icon" />
              </button>
            </div>

            {/* Menu items */}
            <div
              className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue"
              onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <Link page="Accueil" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Technologies" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Projets" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
