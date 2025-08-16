import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between my-11'>
            {/* LEFT  */}
            <Link href={`/`} className='flex items-center'>
                <Image
                    src={`/assets/logo_plant.png`}
                    alt='Plant shop logo'
                    width={36}
                    height={36}
                />
                <p className='font-bold text-4xl'>Hobby</p>
            </Link >
            {/* RIGHT  */}
            <div className='flex items-center gap-6'>
                <Link className='text-lg font-semibold' href={`/`}>Home</Link>
                <Link className='text-lg font-semibold' href={`/`}>About Us</Link>
                <Link className='text-lg font-semibold' href={`/`}>Service</Link>
                <Link className='text-lg font-semibold' href={`/`}>Contact</Link>
                <button className='text-lg font-semibold bg-[#0CA941] px-8 py-2.5 text-white rounded-lg'>Login</button>
            </div>
        </nav>
    )
}

export default Navbar