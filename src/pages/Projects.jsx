import React, { lazy, Suspense } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Lazy } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/lazy'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import { projectData } from '../data'

const ReactPlayer = lazy(() => import('react-player'))

const Projects = () => {
    return (
        <section id='projets' className='bg-blue-palette-background h-full py-16 md:py-24'>
            <h2 className='text-3xl lg:text-6xl text-yellow-palette text-center'>PROJETS</h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Lazy]}
                slidesPerView={1}
                loop
                lazy
                navigation
                pagination={{ clickable: true }}
                className='py-12'
                aria-label='Project Showcase Carousel'
            >
                {projectData.map((project, index) => (
                    <SwiperSlide key={index}>
                        <ProjectSlide project={project} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

const ProjectSlide = ({ project }) => {
    const { title, link, path, noMobile, desc, mobileImage } = project

    return (
        <>
            <div className='flex flex-col items-center'>
                {link ? (
                    <a
                        href={link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-center py-2 text-2xl hover:scale-105 duration-200'
                    >
                        {title}
                    </a>
                ) : (
                    <p className='text-center py-2 text-2xl'>{title}</p>
                )}
                <p className='text-center py-2 text-md'>{desc}</p>
            </div>
            <div className='w-full lg:h-[600px] flex flex-col lg:flex-row justify-center items-center gap-8'>
                <Suspense fallback={<div>Loading...</div>}>
                    <ReactPlayer
                        url={`assets/${path}-desktop.mp4`}
                        controls
                        muted
                        loop
                        width='100%'
                        height='100%'
                        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                    />
                </Suspense>
                {mobileImage ? (
                    <img
                        src={mobileImage}
                        alt={`${title} mobile view`}
                        className='w-[200px] object-scale-down'
                    />
                ) : (
                    !noMobile && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <ReactPlayer
                                url={`assets/${path}-mobile.mp4`}
                                controls
                                muted
                                loop
                                width='50%'
                                height='100%'
                                config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                            />
                        </Suspense>
                    )
                )}
            </div>
        </>
    )
}

export default Projects

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y, Lazy } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/lazy";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/effect-fade";
// import ReactPlayer from "react-player";

// const Projects = () => {
//   const projectData = [
//     {
//       title: "Mystiik Tattoos",
//       link: "https://mystiik-tattoo.netlify.app/",
//       path: "mystiik",
//       noMobile: false,
//       desc: "Site vitrine pour artiste tatoueuse",
//     },
//     {
//       title: "High Valyrian Glyphs",
//       link: "https://highvalyrianglyphs.onrender.com/",
//       path: "hv",
//       noMobile: false,
//       desc: "Projet personnel présentant un alphabet de glyphes créé par un linguiste pour une série TV",
//     },
//     {
//       title: "Space X Flights",
//       path: "spacex",
//       noMobile: false,
//       desc: "Projet personnel de site vitrine pour acheter un ticket pour l'espace",
//     },
//     {
//       title: "Générateur de lettres de motivation avec chatGPT",
//       path: "covers",
//       noMobile: true,
//       desc: "Projet personnel pour tester l'API de OpenAI et chatGPT",
//     },
//     {
//       title: "Waven Builder",
//       link: "http://www.wavenbuilder.online",
//       path: "waven",
//       mobileImage: "assets/waven-mobile.png",
//       desc: "Créez votre build sur le jeu vidéo WAVEN",
//     },
//   ];

//   return (
//     <section id="projets" className="bg-blue-palette-background h-full py-16 md:py-24">
//       <h2 className="text-3xl lg:text-6xl text-yellow-palette text-center">PROJETS</h2>
//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y, Lazy]}
//         slidesPerView={1}
//         loop
//         lazy
//         navigation
//         pagination={{ clickable: true }}
//         className="py-12"
//       >
//         {projectData.map((project, index) => (
//           <SwiperSlide key={index}>
//             <ProjectSlide project={project} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// const ProjectSlide = ({ project }) => {
//   const { title, link, path, noMobile, desc, desktopImage, mobileImage } = project;

//   return (
//     <>
//       <div className="flex flex-col items-center">
//         {link ? (
//           <a href={link} target="_blank" rel="noopener noreferrer" className="text-center py-2 text-2xl hover:scale-105 duration-200">
//             {title}
//           </a>
//         ) : (
//           <p className="text-center py-2 text-2xl">{title}</p>
//         )}
//         <p className="text-center py-2 text-md">{desc}</p>
//       </div>
//       <div className="w-full lg:h-[600px] flex flex-col lg:flex-row justify-center items-center gap-8">
//         <ReactPlayer url={assets/${path}-desktop.mp4} controls muted loop width="100%" height="100%" />
//         {mobileImage && <img src={mobileImage} alt={${title} mobile} className="w-[200px] object-scale-down" />}
//         {!mobileImage && noMobile === false && (
//           <ReactPlayer url={assets/${path}-mobile.mp4} controls muted loop width="50%" height="100%" />
//         )}
//       </div>
//     </>
//   );
// };

// export default Projects;
