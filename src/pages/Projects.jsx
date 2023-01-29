import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ReactPlayer from "react-player";
const Projects = () => {
  const isAboveMediumScreens = useMediaQuery({ query: `(min-width:1024px)` });

  return (
    <section id="projets" className="border-t-4 border-yellow-palette bg-blue-palette-background h-screen lg:px-24">
      <p className="text-3xl lg:text-6xl text-yellow-palette text-center pt-24">PROJETS</p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="py-12 ">
        <SwiperSlide>
          <div className="w-full lg:h-[600px] flex flex-col lg:flex-row justify-center items-center gap-8">
            <ReactPlayer url="/assets/hv-desktop.mp4" controls muted loop width="100%" height="100%" />
            <ReactPlayer url="/assets/hv-mobile.mp4" controls muted loop width="50%" height="100%" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[600px] flex flex-col lg:flex-row justify-center items-center gap-8">
            <ReactPlayer url="/assets/spacex-desktop.mp4" controls muted loop width="100%" height="100%" />
            <ReactPlayer url="/assets/spacex-mobile.mp4" controls muted loop width="50%" height="100%" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[600px] flex flex-col lg:flex-row justify-center items-center gap-8">
            <ReactPlayer url="/assets/mystiik-desktop.mp4" controls muted loop width="100%" height="100%" />
            <ReactPlayer url="/assets/mystiik-mobile.mp4" controls muted loop width="50%" height="100%" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Projects;
