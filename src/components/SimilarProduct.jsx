import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

const SimilarProduct = () => {
    const [product, setProduct] = useState([])
    const [limit, setLimit] = useState(4)

    const data = () => {
        const fakeApi = (`https://fakestoreapi.com/products?limit=${limit}`)

        axios.get(fakeApi).then((res) => {
            setProduct(res.data)
        })
    }
    useEffect(() => {
        data();
    }, [setLimit])

    return (
        <div>
            <div className='mx-10 mb-10'>
                <div className='flex justify-between items-center mb-5 '>
                    <h1 className='font-bold text-2xl md:text-[30px] lg:text[39px] text-[#1FB4A1] '>Similar Products</h1>
                    <button className="border border-solid border-[#1FB4A1] text-[#0B3F38] font-bold p-2">Show More</button>
                </div>
                {/* <div className=' grid items-center md:flex justify-evenly gap-8 '> */}
                <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                    {
                        product?.map(item => (
                            <Card item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SimilarProduct