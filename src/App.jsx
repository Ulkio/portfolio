import Navbar from "@c/Navbar";
import Footer from "@c/Footer";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Home from "@p/Home";
import About from "@p/About";
import Skills from "@p/Skills";
import Projects from "@p/Projects";
import Contact from "@p/Contact";
import { Helmet } from "react-helmet";

function App() {
  const [selectedPage, setSelectedPage] = useState("accueil");
  const [visiblePage, setVisiblePage] = useState(null);

  const { ref: accueil, inView: inView1 } = useInView({
    threshold: 0.5,
  });
  const { ref: technologies, inView: inView2 } = useInView({
    threshold: 0.5,
  });
  const { ref: competences, inView: inView3 } = useInView({
    threshold: 0.5,
  });
  const { ref: projets, inView: inView4 } = useInView({
    threshold: 0.5,
  });
  const { ref: contact, inView: inView5 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView1) setVisiblePage("accueil");
    if (inView2) setVisiblePage("technologies");
    if (inView3) setVisiblePage("compétences");
    if (inView4) setVisiblePage("projets");
    if (inView5) setVisiblePage("contact");
  }, [inView1, inView2, inView3, inView4, inView5]);

  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Guillaume Verschave</title>
        <link rel="canonical" href="http://guillaumeverschave.onrender.com" />
      </Helmet>
      <Navbar visiblePage={visiblePage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div ref={accueil}>
        <Home />
      </div>
      <div ref={technologies}>
        <About />
      </div>
      <div ref={projets}>
        <Projects />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
