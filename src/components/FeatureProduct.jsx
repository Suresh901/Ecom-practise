import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Products = () => {
    const [product, setProduct] = useState([])
    const [limit, setLimit] = useState(8)

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

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
                <div>
                    <h1 className='font-bold text-2xl text-[#1FB4A1] mt-5 mb-5'>Products</h1>
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
            <div className='flex items-center justify-center mb-10'>
                <Link to='/products' className='text-[#8E98A8] flex justify-center font-bold text-2xl' onClick={handleLinkClick}>Load More</Link>
            </div>
        </div>
    )
}

export default Products