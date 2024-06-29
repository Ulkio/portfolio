import React from 'react'
import { Suspense } from 'react'

const Contact = () => {
    return (
        <section id='contact' className='bg-blue-palette-background min-h-screen py-16 md:py-24'>
            <div className='mx-auto '>
                <h2 className='text-3xl lg:text-6xl text-yellow-palette text-center mb-16'>
                    CONTACT
                </h2>
                <div className='flex flex-col lg:flex-row gap-12'>
                    <ContactForm />
                    <Map />
                </div>
            </div>
        </section>
    )
}

const ContactForm = () => {
    return (
        <div className='w-full lg:w-1/2 bg-blue-palette-navbar rounded-xl p-6'>
            <form
                action='https://formspree.io/f/xknagzva'
                method='POST'
                className='flex flex-col gap-8'
            >
                <div>
                    <label htmlFor='name' className='sr-only'>
                        Nom
                    </label>
                    <input
                        className='w-full bg-blue-palette-navbar p-2 border-b-2 border-yellow-palette focus:outline-none'
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Votre nom...'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='email' className='sr-only'>
                        Email
                    </label>
                    <input
                        className='w-full bg-blue-palette-navbar p-2 border-b-2 border-yellow-palette focus:outline-none'
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Votre email...'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='message' className='sr-only'>
                        Message
                    </label>
                    <textarea
                        className='w-full bg-blue-palette-navbar p-2 border-b-2 border-yellow-palette focus:outline-none resize-none'
                        name='message'
                        id='message'
                        rows='5'
                        placeholder='Votre message...'
                        required
                    />
                </div>
                <button
                    className='mt-8 self-start font-semibold border-2 rounded-xl border-yellow-palette text-yellow-palette px-8 py-2
                    hover:scale-105 transition duration-100'
                    type='submit'
                >
                    ENVOYER
                </button>
            </form>
        </div>
    )
}

const Map = () => {
    return (
        <Suspense
            fallback={
                <div className='text-white w-full lg:w-1/2 h-64 lg:h-auto flex items-center justify-center'>
                    Loading map...
                </div>
            }
        >
            <div className='w-full lg:w-1/2 h-64 lg:h-auto'>
                <iframe
                    className='w-full h-full'
                    id='gmap_canvas'
                    src='https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=4%20SAINT%20VICTURNIEN+()&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                    aria-label='Google Maps - Saint Victurnien'
                ></iframe>
            </div>
        </Suspense>
    )
}

export default Contact
