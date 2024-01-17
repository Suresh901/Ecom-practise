import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Pagination = ({ handlePrevPage, handleNextPage, currentPage, paginate, product, postPerPage }) => {
    let pages = []

    for (let i = 1; i <= Math.ceil(product.length / postPerPage); i++) {
        pages.push(i)
    }
    return (
        <div className='mt-10'>
            <ul className='flex justify-center space-x-2 gap-2'>
                <button>
                    <IoIosArrowBack onClick={handlePrevPage} size={30} className='bg-[#1FB4A1] text-white px-2 text-[25px] rounded-md' />
                </button>
                {
                    pages.map((item, index) => (
                        <li key={index}
                            className={`cursor-pointer text-2xl  ${currentPage === index + 1 ? 'text-[#1FB4A1] font-bold' : 'text-gray-600'}`}
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </li>
                    ))
                }
                <button>
                    <IoIosArrowForward onClick={handleNextPage} size={30} className='bg-[#1FB4A1] text-white px-2 text-[25px] rounded-md' />
                </button>
            </ul>
        </div>
    )
}

export default Pagination