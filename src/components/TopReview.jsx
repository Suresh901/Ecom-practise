import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Img from '../images/user.png'
import { IoStarSharp } from "react-icons/io5";

const TopReview = () => {
    return (
        <div className='mb-10 mx-10'>
            <div className=' flex justify-between items-center '>
                <h1 className='font-bold text-[25px] md:text-[30px] lg:text-[35px] mb-5'>Top Reviews</h1>
                <button className="text-[#1FB4A1] border border-solid border-[#1FB4A1] p-2 rounded-md flex items-center gap-1 h-10 ">
                    Top Review
                    <IoIosArrowDown />
                </button>
            </div>

            <div className='flex gap-5'>
                <img src={Img} alt="" className='w-20 h-20' />
                <div>
                    <h1>Lorem Ipsum dolor</h1>
                    <div className='flex'>
                        {[...Array(5)].map((star) => {
                            return (
                                <IoStarSharp size={20} className='text-[#1FB4A1]' />
                            )
                        })
                        }
                    </div>
                    <div>
                        <span className='text-[12px] text- md:text-[14px] lg:text-[16px]'>
                            Lorem ipsum dolor sit amet consectetur. Nulla leo platea proin vitae pretium tellus facilisis magna. In faucibus lectus feugiat tortor ipsum. Diam bibendum egestas augue blandit dolor phasellus posuere sed. Lacus parturient tempor vel volutpat. Urna massa lorem placerat lacus consectetur viverra metus etiam quis. Dictum amet amet feugiat at tristique sagittis.
                            Facilisis elementum sit ipsum faucibus ultrices enim et ornare enim. Fringilla a fringilla purus quisque gravida nisl vitae. Eget commodo a non lorem. Parturient nibh amet ac egestas mattis aliquet laoreet bibendum. Diam pretium id posuere tortor sit vehicula enim dictum pretium. Auctor eget aliquam auctor in condimentum adipiscing est viverra quis.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopReview