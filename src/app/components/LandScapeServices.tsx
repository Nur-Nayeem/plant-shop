import React from 'react'
import { fredoka_one } from '../fonts/font'
import Image from 'next/image'
import landScapeImg from '../../../public/assets/plant_decoration-left.png'

const LandScapeServices = () => {
    return (
        <div className='relative bg-white md:pl-36 flex flex-col md:flex-row items-center justify-between gap-16 my-24 py-12 rounded-[28px] [box-shadow:23px_19px_138px_-45px_rgba(12,169,65,0.13)]'>
            <div className='relative md:absolute md:-left-24 md:bottom-0 max-w-[288px] max-h-[350px]'>
                <Image
                    className='w-full'
                    src={landScapeImg}
                    alt='Plant-Decoration'
                />
            </div>
            <div className='max-w-[289px]'>
                <h2 className={fredoka_one.className + ' font-normal text-3xl text-[#374A3D] mb-2.5'}>We Give Awesome Landscape Service.</h2>
                <p className='text-[#5B7262]'>It is a long established fact that a reader will be distracted by the thing.</p>
            </div>
            <p className='flex flex-col w-[130px] text-[#678570]'><span className='relative w-max text-6xl font-bold text-[#0CA941] bg-[#ECF8F0] rounded-br-[60px] rounded-4xl rounded-tl-[60px] mb-1.5'>25+</span> Complete Project <br />Per Month.</p>
            <p className='flex flex-col w-[130px] text-[#678570]'><span className='relative w-max text-6xl font-bold text-[#0CA941] bg-[#ECF8F0] rounded-br-[60px] rounded-4xl rounded-tl-[60px] mb-1.5'>10+</span> Years Practical <br />Experience.</p>
            <p className='flex flex-col w-[130px] text-[#678570]'><span className='relative w-max text-6xl font-bold text-[#0CA941] bg-[#ECF8F0] rounded-br-[60px] rounded-4xl rounded-tl-[60px] mb-1.5'>60+</span> Awesome Team <br />Members.</p>
        </div>
    )
}

export default LandScapeServices