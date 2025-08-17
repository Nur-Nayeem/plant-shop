import { ChevronRight } from 'lucide-react'
import React from 'react'
import { fredoka_one } from '../fonts/font'
import img1 from '../../../public/assets/card-img/img-1.png'
import img2 from '../../../public/assets/card-img/img-2.png'
import img3 from '../../../public/assets/card-img/img-3.png'
import ServiceCard from './ServiceCard'
const ProfessionalServiceSection = () => {

    return (
        <div className='flex items-center justify-between mx-auto gap-24 my-24 flex-col md:flex-row'>
            {/* LEFT  */}
            <div className='md:w-5/12'>
                <h3 className={fredoka_one.className + ' font-normal text-4xl'}>Professional Service</h3>
                <p className='font-medium text-lg my-8 primary-text-color'>There are many variations of passages of Lorem Ipsum available, Duis posuere eros vel dui pulvinar, pulvinar molestie erat iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posue Mauris vel auctor enim many variations. There are many variations of passages of Lorem Ipsum .</p>
                <button className='flex gap-1.5 text-[#374A3D] border border-[#0CA941] py-6 px-9 rounded-full cursor-pointer'>
                    Shop Now
                    <div className='flex gap-0 items-center justify-center p-0'>
                        <ChevronRight className='w-3' />
                        <ChevronRight className='w-4' />
                        <ChevronRight className='w-5' />
                    </div>
                </button>

            </div>
            {/* RIGHT  */}
            <div className='relative md:w-7/12 flex items-center md:justify-end gap-3 md:gap-7'>
                <div className='z-20'>
                    <ServiceCard img={img1} stl="" header='Plant Trees' />
                </div>
                <div className='flex flex-col gap-3 md:gap-7 z-20'>
                    <ServiceCard img={img2} stl="" header='Pruning plants' />
                    <ServiceCard img={img3} stl="" header='Plant Trees' />

                </div>

            </div>

        </div>
    )
}

export default ProfessionalServiceSection