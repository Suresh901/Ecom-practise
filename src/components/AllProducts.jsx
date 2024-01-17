import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from './Card'
import Pagination from './Pagination';

const AllProducts = () => {

    const [product, setProduct] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(6)
    const totalPosts = product.length;

    useEffect(() => {
        const data = () => {
            const url = `https://fakestoreapi.com/products`
            axios.get(url).then((res) => {
                setProduct(res.data)
            }).catch((err) => console.log(err))
        }

        data();
    }, [])

    const handleNextPage = () => {
        if (currentPage < Math.ceil(totalPosts / postPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPost = product.slice(firstPostIndex, lastPostIndex)
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (

        <div className='mx-10 lg:mx-5 mb-10 '>
            <div>
                <h1 className='font-bold text-2xl text-[#1FB4A1] mt-5 mb-5'>Products</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-evenly gap-5 md:gap-8 lg:gap-[24px] '>
                {
                    currentPost?.map(item => (
                        <Card item={item} key={item.id} />
                    ))
                }
            </div>
            <Pagination
                paginate={paginate}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                product={product}
                postPerPage={postPerPage}
                currentPage={currentPage}
            />
        </div >

    )
}

export default AllProducts