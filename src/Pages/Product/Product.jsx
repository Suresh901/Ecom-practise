import React from 'react'
import ProductDescription from '../../components/ProductDescription'
import ProductDetail from '../../components/ProductDetail'
import ProductReview from '../../components/ProductReview'
import ProductView from '../../components/ProductView'
import SimilarProduct from '../../components/SimilarProduct'


const Product = () => {

    return (
        <div>
            <div className='bg-white py-2 mx-10 my-10 rounded-[32px]'>
                <ProductView />
                <ProductDetail />
                <ProductDescription />
                <ProductReview />
                <SimilarProduct />

            </div>

        </div>
    )
}

export default Product