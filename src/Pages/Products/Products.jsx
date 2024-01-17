import React from 'react'
import Filter from '../../components/Filter';
import AllProducts from '../../components/AllProducts';
import MobileFilter from '../../components/MobileFilter';

const Products = () => {
    return (
        <div className='relative'>
            <div className='md:mx-10 flex mt-10 mb-10 '>
                <Filter />
                <AllProducts />
            </div>
            <div>
                <MobileFilter />
            </div>
        </div>
    )
}
export default Products