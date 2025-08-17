import React from 'react'
import { fredoka_one } from '../fonts/font'
import Image from 'next/image'
import { Star } from 'lucide-react'

export type cardDataType = {
    prodImg: string,
    name: string,
    rating: number,
    review: number,
    price: number,
}

const ProductCard = ({ prodImg, name, rating, review, price }: cardDataType) => {
    return (
        <div className='max-w-[360px] border border-[rgba(0,0,0,0.36)] rounded-[37px] flex flex-col items-center py-8 px-9 gap-3.5'>
            <div className='flex justify-center items-center w-[178px] h-[234px]'>
                <Image
                    className='w-full h-full'
                    src={prodImg}
                    alt='product 1'
                />
            </div>
            <div className='w-[288px]'>
                <h3 className={fredoka_one.className + ' font-normal text-2xl'}>{name}</h3>
                <div className='flex gap-3 mb-5 mt-0.5'>
                    <div className='flex gap-0.5'>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
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