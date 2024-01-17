import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import AppLogo from '../images/app.png'
import PlayLogo from '../images/play.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#0B3F38]  text-white '>
            <div>
                <div className=' border-b border-[#178779] mb-5  lg:flex lg:justify-around'>
                    <div className='mx-10 text-white text-[20px] '>
                        <h1 className='font-bold mb-5 text-[31px] pt-[3.5rem] pb-1'>Contact Us</h1>

                        <div className='flex items-center gap-5 mb-2' >
                            <FaPhoneAlt />
                            <span>12345687</span>
                        </div>
                        <div className='flex items-center gap-5 mb-2'>
                            <IoMdMail />
                            <span>abc@gmail.com</span>
                        </div>
                        <div className='flex items-center gap-5 mb-2'>
                            <IoLocationSharp />
                            <span>Nepal</span>
                        </div>
                    </div>

                    <div className='mx-10 text-[20px]'>
                        <h1 className='font-bold mb-5 text-[31px] pt-[3.5rem] pb-1'>Company</h1>
                        <p>About Us</p>
                        <p>Carrier</p>
                        <p>Blog Post</p>
                    </div>

                    <div className='mx-10 text-[20px]'>
                        <h1 className='font-bold mb-5 text-[31px] pt-[3.5rem] pb-1'>Support</h1>
                        <p>Help Center</p>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </div>

                    <div className='mx-10'>
                        <h1 className='font-bold mb-5 text-[31px] pt-[3.5rem] pb-1'>Get Our App</h1>
                        <div className='sm:flex sm:items-center  mb-10 ' >
                            <Link to='https://apps.apple.com/us/app/smart-health-nepal/id1623582770'>
                                <img src={AppLogo} alt="Logo" className='h-[3rem] w-[120px] ' />
                            </Link>
                            <Link to='https://play.google.com/store/apps/details?id=com.smarthealthnepal.customer&hl=en&gl=US'>
                                <img src={PlayLogo} alt="Logo" className='h-[3rem] w-[120px] ' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-10'>
                <p className='flex justify-center items-center '>Copyright © 2024 Smart Heath Nepal | Made with Love By -
                    <Link to='https://www.nth.com.np/'>
                        <span className='text-orange-500 font-bold'>Nakshatra Techno Hub</span>
                    </Link>
                </p>
            </div >
        </div >

    )
}
export default Footer