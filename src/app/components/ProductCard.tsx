import React from 'react'
import { fredoka_one } from '../fonts/font'
import Image from 'next/image'
import type { StaticImageData } from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // Import 

export type cardDataType = {
    prodImg: StaticImageData,
    name: string,
    rating: number,
    review: number,
    price: number,
}

const ProductCard = ({ prodImg, name, rating, review, price }: cardDataType) => {
    const numbers = Array.from({ length: rating }, (_, i) => i + 1);
    return (
        <div className='w-[calc(90vw-20px)] md:w-[360px] border border-[rgba(0,0,0,0.36)] rounded-[37px] flex flex-col items-center py-8 px-9 gap-3.5'>
            <div className='flex justify-center items-center w-[178px] h-[234px]'>
                <Image
                    className='w-full h-full'
                    src={prodImg}
                    alt='product 1'
                />
            </div>
            <div className='max-w-[288px]'>
                <h3 className={fredoka_one.className + ' font-normal text-2xl'}>{name}</h3>
                <div className='flex items-center gap-3 mb-5 mt-0.5'>
                    <div className='flex gap-0.5'>
                        {
                            numbers.map((num) => (
                                <FontAwesomeIcon key={num} className='text-yellow-400' icon={faStar} />
                            ))
                        }
                    </div>
                    <div className='primary-text-color'>
                        <span>{rating}</span>
                        <span>({review})</span>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col primary-text-color'>
                        <span>price</span>
                        <span className={fredoka_one.className + ' text-[#0CA941] text-xl'}>${price}</span>
                    </div>
                    <button className='py-2.5 px-5 border border-[rgba(55,74,61,0.36)] rounded-xl primary-text-color'>Add To Cart</button>
                </div>
            </div>

        </div>
    )
}

export default ProductCard