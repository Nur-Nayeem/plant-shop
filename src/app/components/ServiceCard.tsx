import React from 'react'

import Image from 'next/image'
import { fredoka_one } from '../fonts/font'

const ServiceCard = ({ img, stl, header }: { img: string, stl: string, header: string }) => {
    return (
        <div style={{
            boxShadow: '14px 15px 62px 0px rgba(12, 169, 65, 0.12)',
        }} className={stl + 'bg-white rounded-xl max-w-[270px] py-5 px-6 flex flex-col items-center text-center'}>
            <div className=' flex items-center justify-center w-[105px] h-[92px] bg-[rgba(238,255,244,1)] -rotate-[33.13deg] rounded-[66px] rounded-b-[114px] '>
                <Image
                    className='w-14 h-14 rotate-[33.13deg]'
                    src={img}
                    alt="Image 1"
                />
            </div>
            <h3 className={fredoka_one.className + ' font-normal text-2xl my-3.5'}>{header}</h3>
            <p className='primary-text-color text-[16px] font-medium'>There are many variations of passages long established fact reader</p>
        </div>
    )
}

export default ServiceCard