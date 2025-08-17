import React from 'react'
import { fredoka_one } from '../fonts/font'

const SubcribeSection = () => {
    return (
        <div className='relative my-24 flex flex-col justify-center items-center rounded-[19px] shadow-sm pt-24 pb-32 md:px-64'>
            <h3 className={fredoka_one.className + ' font-normal text-4xl text-center'}>Ready to bring idea for your garden?</h3>
            <p className='font-medium text-lg mt-8 mb-14 primary-text-color text-center'>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete</p>
            <form action="" className='md:w-[35vw] flex justify-center items-center border border-[rgba(12,169,65,1)] border-r-0 rounded-xl'>
                <input type="email" id="email" placeholder='Email' className='w-8/12 py-6 px-9 text-lg font-medium  text-[#C4C4C4] outline-0' />
                <button type="submit" className='w-4/12 py-6 md:px-16 rounded-xl bg-[#0CA941] text-lg font-semibold text-white'>Subscribe</button>
            </form>

            {/* BG SPOTS  */}
            <div className='absolute top-0 md:-top-20 right-0 md:-right-36 w-[250px] h-[250px] md:w-[514px] md:h-[514px] bg-[rgba(83,195,81,0.33)] blur-[168px] -z-10'></div>
            <div className='absolute bottom-0 left-0 md:-left-60 w-[180px] h-[180px] md:w-[355px] md:h-[355px] bg-[rgba(255,233,120,0.33))] blur-[168px] -z-10'></div>

        </div>
    )
}

export default SubcribeSection