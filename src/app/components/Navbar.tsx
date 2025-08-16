"use client"
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../../../public/assets/logo_plant.png'

const Navbar = () => {
    const [showBar, setShowBar] = useState(false)

    const showMenu = () => {
        console.log('Menu clicked')
        setShowBar(prev => !prev)
    }
    return (
        <nav className='flex items-center justify-between my-11'>
            {/* LEFT  */}

            <Link href={`/`} className='flex items-center gap-2.5'>
                <button onClick={showMenu} className="relative sm:hidden">
                    <Menu />
                </button>
                <Image
                    className='w-7 h-7 sm:w-8 sm:h-8'
                    src={logo}
                    alt='Plant shop logo'
                />
                <p className='font-bold text-2xl md:text-4xl'>Hobby</p>
            </Link >
            {/* RIGHT  */}
            <div className={`absolute ${showBar ? 'top-24' : 'hidden sm:flex'} transition-all duration-300 ease-in-out bg-[#eff9ef]/60 backdrop-blur-md py-6 sm:py-0 sm:bg-transparent w-full sm:w-fit z-10 sm:static flex flex-col sm:flex-row items-center gap-6`}>
                <Link className='text-lg font-semibold' href={`/`}>Home</Link>
                <Link className='text-lg font-semibold' href={`/`}>About Us</Link>
                <Link className='text-lg font-semibold' href={`/`}>Service</Link>
                <Link className='text-lg font-semibold' href={`/`}>Contact</Link>
                <button className='hidden sm:block text-lg font-semibold bg-[#0CA941] px-8 py-2.5 text-white rounded-lg'>Login</button>
            </div>
            <button className='sm:hidden text-md font-semibold bg-[#0CA941] px-6 py-1.5 text-white rounded-lg'>Login</button>

        </nav>
    )
}

export default Navbar