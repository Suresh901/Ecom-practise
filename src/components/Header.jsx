import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <div className='border-b border-slate-700 px-2 py-2 md:flex md:items-center md:justify-between' >
      <div className='flex items-center gap-5 mx-10 justify-center '>
        <FaPhoneAlt />
        <p>123456789</p>
        <IoMdMail />
        <p>abc@gmail.com</p>
      </div>
      <div className='flex items-center justify-center gap-4 mx-10'>
        <h3 className='font-bold underline'>About Us</h3>
        <h3 className='font-bold underline'>Blog</h3>
        <h3 className='font-bold'>Follow Us:</h3>
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
      </div>
    </div>
  )
}

export default Header