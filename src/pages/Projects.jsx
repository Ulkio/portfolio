import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import ReactPlayer from "react-player";

const Projects = () => {
  const videos = [
    { title: "Mystiik Tattoos", path: "mystiik", noMobile: false, desc: "Site vitrine pour artiste tatoueuse" },
    {
      title: "High Valyrian Glyphs",
      path: "hv",
      noMobile: false,

      desc: "Projet personnel présentant un alphabet de glyphes créé par un linguiste pour une série TV",
    },
    {
      title: "Space X Flights",
      path: "spacex",
      noMobile: false,

      desc: "Projet personnel de site vitrine pour acheter un ticket pour l'espace",
    },
    {
      title: "Générateur de lettres de motivation avec chatGPT",
      path: "covers",
      noMobile: true,
      desc: "Projet personnel pour tester l'API de OpenAI et chatGPT",
    },
  ];

  return (
    <section id="projets" className="border-t-2 border-yellow-palette bg-blue-palette-background h-full py-16 md:py-24">
      <p className="text-3xl lg:text-6xl text-yellow-palette text-center ">PROJETS</p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Lazy]}
        slidesPerView={1}
        loop
        lazy
        navigation
        pagination={{ clickable: true }}
        className="py-12 ">
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <p className="text-center py-2 text-2xl">{video.title}</p>
            <p className="text-center py-2 text-md">{video.desc}</p>
            <div className="w-full lg:h-[600px] flex flex-col lg:flex-row justify-center items-center gap-8">
              <ReactPlayer url={`assets/${video.path}-desktop.mp4`} controls muted loop width="100%" height="100%" />
              {video.noMobile === false && (
                <ReactPlayer url={`assets/${video.path}-mobile.mp4`} controls muted loop width="50%" height="100%" />
              )}
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <p className="text-center py-2 text-2xl">Générateur de lettres de motivation avec chatGPT</p>
          <div className="w-full lg:h-[600px] flex flex-col lg:flex-row justify-center items-center gap-8">
            <ReactPlayer url={`assets/covers-desktop.mp4`} controls muted loop width="100%" height="100%" />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default Projects;
