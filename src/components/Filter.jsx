import React from 'react'
import StarRating from './StarRating';

const Filter = () => {
    return (
        <div className=' bg-white px-10 py-10 rounded-2xl w-[280px] hidden sm:hidden md:hidden lg:block xl:block' >
            <div className='flex justify-between'>
                <h1 className='text-[25px] font-semibold'>Filters</h1>
                <button className="border border-solid border-[#1FB4A1] text-[#1FB4A1]  
                    flex items-center justify-center h-7 gap-1 mb-2 px-2 py-2 rounded-md  text-[10px]">
                    Clear Filter</button>
            </div>
            <div className='flex flex-wrap gap-2 mt-5 mb-5'>
                <h5 className='bg-[#98DDD4] font-semibold w-[80px] flex items-center justify-center rounded-full text-[16px]'>Black</h5>
                <h5 className='bg-[#98DDD4] font-semibold w-[80px] flex items-center justify-center rounded-full text-[16px]'>Black</h5>
                <h5 className='bg-[#98DDD4] font-semibold w-[80px] flex items-center justify-center rounded-full text-[16px]'>Black</h5>
            </div>
            <div>
                <div className='grid justify-items-start gap-2 mb-5'>
                    <h1 className='text-[20px] font-semibold'>Color</h1>
                    <div className='text-[16px] '>
                        <div className='flex gap-2 '>
                            <input type="checkbox" />
                            <span>Black</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <span>Red</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <span>Green</span>
                        </div>
                    </div>
                </div>
                <div className='grid justify-items-start gap-2 mb-5'>
                    <h1 className='text-[20px] font-semibold'>Size</h1>
                    <div className='text-[16px]'>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <span>12cm</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <span>12cm</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <span>12cm</span>
                        </div>
                    </div>
                </div>
                <div className='gap-2 mb-5' >
                    <h1 className='text-[20px] font-semibold mb-3'>Price</h1>
                    <div className='flex gap-2 '>
                        <input type="number" className='w-[100px] bg-[#E9F0F2] flex items-center justify-end' placeholder='Min Price' />
                        <span> - </span>
                        <input type="number" className='w-[100px] bg-[#E9F0F2] flex items-center justify-end' placeholder='Max Price' />
                    </div>
                </div>
                <div >
                    <h1 className='text-[20px] font-semibold mb-5'>Rating</h1>
                    <div className='flex items-center gap-10'>
                        <StarRating />
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Filter