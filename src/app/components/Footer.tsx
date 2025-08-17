import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../public/assets/logo_plant.png'

const Footer = () => {
    return (
        <footer className='flex justify-between my-20 gap-10 flex-col md:flex-row'>
            <div className='md:max-w-[300px]'>
                <Link href={`/`} className='flex items-center gap-2.5'>

                    <Image
                        className='w-7 h-7 sm:w-8 sm:h-8'
                        src={logo}
                        alt='Plant shop logo'
                    />
                    <p className='font-bold text-2xl md:text-4xl'>Hobby</p>
                </Link >
                <p className='text-lg primary-text-color my-8'>There are many variations of pass is ages of Lorem available, but the majority have suffered alteration in injected humour.</p>
                <div className='flex gap-2.5 items-center'>
                    <Link href={`/`}><Facebook /></Link>
                    <Link href={`/`}><Twitter /></Link>
                    <Link href={`/`}><Instagram /></Link>
                    <Link href={`/`}><Linkedin /></Link>
                </div>
            </div>
            <div className='md:max-w-[160px]'>
                <h4 className='font-semibold text-[22px]'>Company</h4>
                <div className='flex flex-col mt-8'>
                    <Link className='text-lg primary-text-color' href={`/`}>About</Link>
                    <Link className='text-lg primary-text-color' href={`/`}>History</Link>
                    <Link className='text-lg primary-text-color' href={`/`}>Vission & Mission</Link>
                    <Link className='text-lg primary-text-color' href={`/`}>Career</Link>
                    <Link className='text-lg primary-text-color' href={`/`}>Legal Notice</Link>
                    <Link className='text-lg primary-text-color' href={`/`}>Blog & News</Link>
                </div>
            </div>
            <div className='md:max-w-[160px]'>
                <h4 className='font-semibold text-[22px]'>Support</h4>
                <div className='flex flex-col mt-8'>
                    <Link className='text-lg primary-text-color' href={`/`}>Contact</Link>
                    <Link className='text-lg primary-text-color' href={`/`}>FAQ</Link>
                    <Link className='text-lg primary-text-color' href={`/`}>Help Center</Link>
                    <Link className='text-lg primary-text-color' href={`/`}>Privecy Policy</Link>
                    <Link className='text-lg primary-text-color' href={`/`}>Team & Service</Link>
                    <Link className='text-lg primary-text-color' href={`/`}>Community</Link>
                </div>
            </div>
            <div className='md:max-w-[208px]'>
                <h4 className='font-semibold text-[22px]'>Contact</h4>
                <div className='mt-8'>
                    <p className='text-lg primary-text-color'>Mirabazar-Subhanighat Rd, Sylhet-Bangladesh</p>
                    <div className='my-5'>
                        <h5 className='font-semibold text-xl'>Email Us</h5>
                        <p className='text-lg primary-text-color'>useremail@gmail.com</p>
                    </div>
                    <div>
                        <h5 className='font-semibold text-xl'>Call Us</h5>
                        <p className='text-lg primary-text-color'>+6221.2002.2012</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer