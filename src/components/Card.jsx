import React from 'react'
import { IoMdCart } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Store/Slices/CartSlice'



const Card = ({ item }) => {
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        const product = { ...item, qty: 1 }
        dispatch(addToCart(product))
    }

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    const handleCombinedClick = () => {
        handleAddToCart();
        handleLinkClick();
    };

    return (
        <div className=' w-full h-auto border border-solid border-[#1FB4A1] rounded-md p-2 bg-white group relative '>
            <Link to={`/product/${item.id}`} onClick={handleLinkClick}>
                <div className='flex justify-center  mb-5'>
                    <img src={item?.image} alt="image"
                        className='rounded-md w-[100px] h-[150px] sm:w-[150px] sm:h-[180px] md:w-[150px] md:h-[180px] lg:w-[150px] lg:h-[180px] mb-5 mt-5 object-fit group-hover:scale-110 duration-500 ' />
                </div>
                <div className='w-[280px] md:w-full lg:w-full h-10 mb-2'>
                    <h5 className='text-[15px] font-semibold'>{item?.title.substring(0, 30)}</h5>
                </div>
                <div className='flex items-center gap-2 mb-2'>
                    <h5 className='text-[#1FB4A1] text-[18px] font-bold'>Rs {item?.price}</h5>
                    <h5 className='line-through text-gray-500 text-[15px] font-bold'>Rs {item?.price}</h5>
                </div>
                <div className='flex text-[13px] text-[#8E98A8] gap-2 mb-2'>
                    <h5 className='flex items-center justify-center bg-[#235B74] text-white w-10 gap-1 '>
                        <CiStar />{item?.rating?.rate}
                    </h5>
                    <h5>{item.review} 10k Reviews</h5>
                </div>
            </Link>
            <div className='mt-2'>
                <Link to='/cart'>
                    <button onClick={handleCombinedClick}
                        className="bg-[#1FB4A1] text-white w-full flex items-center justify-center h-7 gap-1">
                        <IoMdCart className='text-white' />
                        Add To Cart</button>
                </Link>


            </div>

        </div>
    )
}

export default Card