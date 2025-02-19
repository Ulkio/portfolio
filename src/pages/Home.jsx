import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useMediaQuery } from 'react-responsive'
import { interests } from '../data'

const InterestIcon = ({ src, label }) => (
    <div className='flex flex-col items-center justify-evenly hover:-translate-y-2 transition duration-300'>
        <img className='invert h-8 lg:h-16' src={src} alt={label} />
        <p className='font-semibold text-[0.5rem] lg:text-xs'>{label}</p>
    </div>
)

const Home = () => {
    return (
        <section id='accueil' className='h-full bg-space-bg bg-cover'>
            <div className='flex flex-col lg:flex-row h-screen items-center justify-center gap-8 p-2'>
                <div className='flex flex-col lg:flex-row items-center gap-6 lg:basis-2/3'>
                    <img
                        className='ring-2 ring-yellow-palette rounded-full w-32 h-32 lg:w-64 lg:h-64 object-cover'
                        src='assets/me.jpg'
                        alt='Guillaume Verschave'
                    />
                    <div className='flex flex-col gap-6 text-center lg:text-left'>
                        <h1 className='text-3xl lg:text-4xl font-bold'>
                            Bonjour ! <br />
                            Je suis Guillaume Verschave
                        </h1>
                        <p className='text-xl lg:text-2xl'>
                            Développeur web fullstack en constante quête d'évolution. J'aime
                            travailler avec les technologies modernes. N'hésitez pas à me contacter
                            si vous souhaitez travailler avec moi !
                        </p>
                        <div className='flex flex-row items-center justify-center lg:justify-start'>
                            <a
                                href='https://drive.google.com/file/d/1bOuhVr6c-2QlbCQn6lEs-4giKxmT3rWn/view?usp=sharing'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-center text-xl font-bold underline'
                            >
                                Télécharger mon CV
                            </a>
                            <img
                                onClick={() =>
                                    window.open(
                                        'https://drive.google.com/file/d/1fmJPRNpC06j2Np92tLL67DYZz9CR8H56/view?usp=share_link'
                                    )
                                }
                                className='pl-2 invert h-6 hover:cursor-pointer'
                                src='assets/download.png'
                                alt='Download CV'
                            />
                        </div>
                    </div>
                </div>
                <div className='lg:basis-1/3'>
                    <h2 className='text-center lg:text-left text-sm font-bold mb-4'>Passions</h2>
                    <div className='grid grid-cols-3 gap-4'>
                        {interests.map((interest) => (
                            <InterestIcon key={interest.label} {...interest} />
                        ))}
                    </div>
                </div>
            </div>

            <div className='hidden lg:flex justify-center -translate-y-24'>
                <AnchorLink href='#technologies'>
                    <img
                        className='transform invert h-16 hover:cursor-pointer hover:scale-110 transition duration-200 animate-[bounce_2s_linear_infinite]'
                        src='assets/down-arrow.png'
                        alt='Scroll down'
                    />
                </AnchorLink>
            </div>
        </section>
    )
}

export default Home
