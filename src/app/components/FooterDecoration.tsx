import Image from 'next/image'
import React from 'react'
import footImg1 from '../../../public/assets/products/footer-product-1.png'
import footImg2 from '../../../public/assets/products/footer-product-2.png'
import footImg3 from '../../../public/assets/products/footer-product-3.png'
import footImg4 from '../../../public/assets/products/footer-product-4.png'
import footImg5 from '../../../public/assets/products/footer-product-5.png'

const FooterDecoration = () => {
    return (
        <div className='my-20'>
            <hr className='border-1 border-[#BF7949]' />
            <div className='flex justify-between items-start relative -top-2 gap-2.5 md:gap-24'>
                <div>
                    <Image
                        src={footImg1}
                        alt='Footer Image 1'
                    />
                </div>
                <div>
                    <Image
                        src={footImg2}
                        alt='Footer Image 1'
                    />
                </div>
                <div>
                    <Image
                        src={footImg3}
                        alt='Footer Image 1'
                    />
                </div>
                <div>
                    <Image
                        src={footImg4}
                        alt='Footer Image 1'
                    />
                </div>
                <div>
                    <Image
                        src={footImg5}
                        alt='Footer Image 1'
                    />
                </div>
            </div>
        </div>
    )
}

export default FooterDecoration