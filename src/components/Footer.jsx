import React from 'react'
import { socialLinks } from '../data'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='bg-blue-palette-navbar text-white py-4'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-wrap justify-between items-center'>
                    <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                        <h3 className='text-xl font-bold mb-2'>Guillaume Verschave</h3>
                        <p className='text-sm'>Développeur web fullstack</p>
                    </div>
                    <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                        <h4 className='text-lg font-semibold mb-2'>Liens rapides</h4>
                        <ul className='text-sm'>
                            <li>
                                <a href='#accueil' className='hover:text-yellow-palette'>
                                    Accueil
                                </a>
                            </li>
                            <li>
                                <a href='#technologies' className='hover:text-yellow-palette'>
                                    Technologies
                                </a>
                            </li>
                            <li>
                                <a href='#projets' className='hover:text-yellow-palette'>
                                    Projets
                                </a>
                            </li>
                            <li>
                                <a href='#contact' className='hover:text-yellow-palette'>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full md:w-1/3'>
                        <h4 className='text-lg font-semibold mb-2'>Suivez-moi</h4>
                        <div className='flex space-x-4'>
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:opacity-75 transition-opacity duration-300'
                                >
                                    <img
                                        className='invert h-6 w-6'
                                        src={link.icon}
                                        alt={link.name}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='border-t border-gray-700 mt-8 pt-6 text-sm text-center'>
                    <p>© {currentYear} Guillaume Verschave. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
