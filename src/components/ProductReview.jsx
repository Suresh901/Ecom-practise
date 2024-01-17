import React from 'react'
import CustomerReview from './CustomerReview'
import TopReview from './TopReview'

const ProductReview = () => {
    return (
        <div className='w-full lg:flex'>
            <CustomerReview />
            <TopReview />
        </div>
    )
}

export default ProductReview