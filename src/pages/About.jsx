import React from 'react'
import { useMediaQuery } from 'react-responsive'
import 'react-tooltip/dist/react-tooltip.css'
import { technologyCategories } from '../data'

const TechnologyCard = ({ title, description, technologies, isLargeScreen }) => (
    <div
        className={`
        } h-[300px] py-4 bg-blue-palette-navbar flex flex-col gap-8 items-center justify-evenly rounded-xl shadow-md hover:scale-[102%] hover:cursor-pointer transition duration-200`}
    >
        <p className='text-center text-3xl'>{title}</p>
        <p className='text-center'>{description}</p>
        <div className='flex gap-8 flex-wrap justify-center'>
            {technologies.map(({ src, alt, invert }) => (
                <img
                    key={alt}
                    src={src}
                    alt={alt}
                    className={`object-scale-down w-16 ${invert ? 'invert' : ''}`}
                />
            ))}
        </div>
    </div>
)

const About = () => {
    const isAboveMediumScreens = useMediaQuery({ query: `(min-width:1200px)` })

    return (
        <section
            id='technologies'
            className='bg-blue-palette-background w-full h-full py-16 xl:py-24'
        >
            <div className={`flex flex-col  ${isAboveMediumScreens ? 'gap-16' : 'gap-8'}`}>
                <p className='text-3xl lg:text-6xl text-yellow-palette text-center'>TECHNOLOGIES</p>
                <div className={`grid  2xl:grid-cols-2  grid-cols-1 gap-12 `}>
                    {technologyCategories.map((category) => (
                        <TechnologyCard
                            key={category.title}
                            {...category}
                            isLargeScreen={isAboveMediumScreens}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
