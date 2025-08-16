import React from 'react'
import { fredoka_one } from '../fonts/font'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import heroImg from '../../../public/assets/hero_plant.png'

const HeroSection = () => {
    return (
        <section className='max-w-[1200px] mx-auto flex items-center mt-11 gap-5'>
            {/* HERO LEFT  */}
            <div className='w-6/12'>
                <h1 className={fredoka_one.className + ' font-normal text-7xl'}>Make a <span className='text-[#0CA941]'>Beautiful
                    Garden</span> with
                    Your own Hand</h1>
                <p className='font-medium text-lg my-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem reprehenderit accusantium nesciunt quos, soluta inventore.</p>
                <button className='flex gap-1.5 text-[#374A3D] border border-[#0CA941] py-6 px-9 rounded-full cursor-pointer'>
                    Shop Now
                    <div className='flex gap-0 items-center justify-center p-0'>
                        <ChevronRight className='w-3' />
                        <ChevronRight className='w-4' />
                        <ChevronRight className='w-5' />
                    </div>
                </button>
            </div>
            {/* HERO RIGHT  */}
            <div className='w-6/12'>
                <Image
                    src={heroImg}
                    alt='Hero of the Plant shop'
                    className='w-full h-full'
                />
            </div>
        </section>
    )
}

export default HeroSection