import React from 'react'
import { fredoka_one } from '../fonts/font'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import heroImg from '../../../public/assets/hero_plant.png'
import heroMiddleImg from '../../../public/assets/hero-middle-plant.png'

const HeroSection = () => {
    return (
        <section className='relative flex flex-col-reverse md:flex-row items-center mt-11 gap-5'>
            {/* HERO LEFT  */}
            <div className='md:w-6/12'>
                <h1 className={fredoka_one.className + ' font-normal lg:text-7xl md:text-6xl text-5xl text-[#374A3D]'}>Make a <span className='text-[#0CA941]'>Beautiful
                    Garden</span> with
                    Your own Hand</h1>
                <p className='font-medium text-lg my-10 text-[#707070]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem reprehenderit accusantium nesciunt quos, soluta inventore.</p>
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
            <div className='relative md:w-6/12 xl:-right-40'>
                <Image
                    src={heroImg}
                    alt='Hero of the Plant shop'
                    className='w-full h-full'
                />
                <div className='absolute bottom-0 -left-36 w-[514px] h-[514px] bg-[rgba(83,195,81,0.33)] blur-[168px] -z-20'></div>

            </div>

            <div className='hidden xl:block absolute w-[168px] h-[188px] bg-white top-[500px] left-[400px] rounded-4xl [box-shadow:22px_34px_50px_11px_rgba(124,164,23,0.08)]'>
                <Image
                    className='absolute -top-16 px-8'
                    src={heroMiddleImg}
                    alt='fooler tob'
                />
            </div>
        </section>
    )
}

export default HeroSection