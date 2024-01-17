import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
const StarRating = () => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(null)
    return (
        <div className='flex gap-2 justify-between items-center'>
            {
                [...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                        <label>
                            <input
                                type="radio"
                                name="rating"
                                value={currentRating}
                                onClick={() => { setRating(currentRating) }}
                                className="hidden" />

                            < FaStar className='cursor-pointer'
                                color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                onMouseEnter={() => setHover(currentRating)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    )
                })
            }
            <div>
                <span className='border border-solid border-black w-[40px] rounded-md flex items-center justify-center '>
                    {rating} / 5
                </span>
            </div>
        </div>
    )
}
export default StarRating