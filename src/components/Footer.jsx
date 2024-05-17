import React from "react";

const Footer = () => {
  return (
    <footer className="flex px-4 items-center justify-center gap-8 h-16 w-full bg-blue-palette-navbar ">
      <p>© 2024 Guillaume Verschave</p>
      <div className="flex flex-row gap-8 justify-center">
        <a href="https://github.com/Ulkio">
          <img className="invert h-8 object-scale-down" src="assets/github-96.png" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/guillaume-verschave/">
          <img className="invert h-8 object-scale-down" src="assets/linkedin-96.png" alt="linkedin" />
        </a>
        <a href="https://twitter.com/Ulkio_">
          <img className="invert h-8 object-scale-down" src="assets/twitter-96.png" alt="twitter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
