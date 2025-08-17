import Image from 'next/image'
import React from 'react'
import professionalImg from '../../../public/assets/proffessional.png'
import { fredoka_one } from '../fonts/font'
import { ChevronRight } from 'lucide-react'

const ProfessionalSection = () => {
    return (
        <div className='flex items-center flex-col md:flex-row gap-14 my-36 relative'>
            {/* LEFT CONTENT   */}
            <div className='md:w-7/12'>
                <Image
                    src={professionalImg}
                    alt='Professional image'
                />
            </div>
            {/* RIGHT CONTENT  */}
            <div className='md:w-5/12'>
                <h3 className={fredoka_one.className + ' font-normal text-4xl'}>We Are Professional
                    Gardener! </h3>
                <p className='font-medium text-lg my-8 primary-text-color'>Morbi magna metus, scelerisque at risus a, tristique laoreet orci. Duis posuere eros vel dui pulvinar, pulvinar molestie erat iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
                <button className='flex gap-1.5 text-[#374A3D] border border-[#0CA941] py-6 px-9 rounded-full cursor-pointer'>
                    Shop Now
                    <div className='flex gap-0 items-center justify-center p-0'>
                        <ChevronRight className='w-3' />
                        <ChevronRight className='w-4' />
                        <ChevronRight className='w-5' />
                    </div>
                </button>
            </div>

            {/* BG SPOTS  */}
            <div className='absolute top-0 md:-top-20 left-0 md:-left-36 w-[250px] h-[250px] md:w-[514px] md:h-[514px] bg-[rgba(83,195,81,0.33)] blur-[168px] -z-10'></div>
            <div className='absolute bottom-0 left-0 md:left-60 w-[180px] h-[180px] md:w-[355px] md:h-[355px] bg-[rgba(255,233,120,0.33))] blur-[168px] -z-10'></div>

        </div>
    )
}

export default ProfessionalSection