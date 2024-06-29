import React, { useEffect, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Link = ({ visiblePage, page }) => {
    const lowerCasePage = page.toLowerCase()
    return (
        <AnchorLink
            className={`${visiblePage === lowerCasePage ? 'text-yellow-palette scale-110' : ''}
      transition duration-500`}
            href={`#${lowerCasePage}`}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ visiblePage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const toggleMenu = () => setIsMenuToggled(!isMenuToggled)

    const navLinks = ['Accueil', 'Technologies', 'Projets', 'Contact']
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const windowHeight = window.innerHeight
            setIsScrolled(scrollPosition >= windowHeight)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <nav
            className={`z-40 w-screen fixed top-0 transition-colors duration-300 ${
                isScrolled ? 'bg-blue-palette-navbar' : 'bg-transparent'
            }`}
            role='navigation'
        >
            <div className='font-opensans font-semibold h-16 flex items-center justify-between px-4'>
                <h1 className='text-lg md:text-xl lg:text-3xl'>GUILLAUME VERSCHAVE</h1>
                <div className='hidden lg:flex gap-8'>
                    {navLinks.map((page) => (
                        <Link
                            key={page}
                            visiblePage={visiblePage}
                            page={page}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </div>
                <button
                    className='lg:hidden'
                    onClick={toggleMenu}
                    aria-label='Toggle menu'
                    aria-expanded={isMenuToggled}
                >
                    <img className='invert' src='assets/menu.png' alt='' />
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`lg:hidden fixed right-0 bottom-0 h-full bg-blue-palette-navbar w-[300px] transform transition-transform duration-300 ease-in-out ${
                    isMenuToggled ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className='flex justify-end p-4'>
                    <button onClick={toggleMenu} aria-label='Close menu'>
                        <img className='invert h-8' src='assets/close.png' alt='' />
                    </button>
                </div>
                <div className='flex flex-col gap-8 ml-[33%] text-2xl text-deep-blue'>
                    {navLinks.map((page) => (
                        <Link
                            key={page}
                            page={page}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            visiblePage={visiblePage}
                        />
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
