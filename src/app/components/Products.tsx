import React from 'react'
import { fredoka_one } from '../fonts/font'
import Image from 'next/image'
import prod1 from "../../../public/assets/products/product-1.png"
import prod2 from "../../../public/assets/products/product-2.png"
import prod3 from "../../../public/assets/products/product-3.png"
import ProductCard from './ProductCard'

const productsData = [
    {
        prodImg: prod1,
        name: "Indoors Tropical Plant",
        rating: 5,
        review: 134,
        price: 150,
    },
    {
        prodImg: prod2,
        name: "Monstera Deliciosa Care",
        rating: 4,
        review: 120,
        price: 200,
    },
    {
        prodImg: prod3,
        name: "Indoors Leaf Potted",
        rating: 5,
        review: 180,
        price: 150,
    },
]

import { Star } from 'lucide-react'
const Products = () => {
    return (
        <div className='my-24'>
            <h3 className={fredoka_one.className + ' font-normal text-4xl text-center'}>Choose your Dream Plant</h3>
            <p className='font-medium text-lg mt-8 mb-14 primary-text-color text-center'>Many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</p>
            <div className='flex items-center justify-between flex-col gap-9 md:flex-row'>
                {
                    productsData.map((item, index) => <ProductCard key={index} prodImg={item.prodImg} name={item.name} rating={item.rating} review={item.review} price={item.price} />)
                }
            </div>
        </div>
    )
}

export default Products