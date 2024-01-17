import React, { useState } from 'react'
import Logo from '../../images/logo.png'

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')


    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleCPassword = (e) => {
        setCPassword(e.target.value)
    }


    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="mx-10 w-[20rem] md:w-[22rem] h-[auto] ring-gray-600 ring-offset-gray-200 ring-1 shadow-sm rounded-lg ">
                <div className="flex justify-center">
                    <img src={Logo} alt="logo" className="w-[8rem]" />
                </div>

                <div className="mx-10 flex flex-col gap-2 md:text-[16px] mb-5">
                    <label>Full Name</label>
                    <input type="text" className="rounded-lg border border-solid border-gray-600 p-1"
                        value={name}
                        onChange={handleName}
                    />
                </div>

                <div className="mx-10 flex flex-col gap-2 md:text-[16px] mb-5">
                    <label>Email</label>
                    <input type="email" className="rounded-lg border border-solid border-gray-600 p-1"
                        onChange={handleEmail}
                    />
                </div>

                <div className="mx-10 flex flex-col gap-2 md:text-[16px] mb-5">
                    <label>Password</label>
                    <input type="password" className="rounded-lg border border-solid border-gray-600 p-1"
                        onChange={handlePassword}
                    />
                </div>

                <div className="mx-10 flex flex-col gap-2 md:text-[16px] mb-5">
                    <label>Confirm Password</label>
                    <input type="email" className="rounded-lg border border-solid border-gray-600 p-1"
                        onChange={handleCPassword}
                    />
                </div>

                <div className='flex justify-center items-center mx-5 mb-5'>
                    <button className="bg-[#1FB4A1] text-white px-4 py-2 rounded-md mr-1 w-full">
                        Sign Up
                    </button>
                </div>

                <div className='flex justify-center items-center mx-5 font-bold cursor-pointer mb-10'>
                    <span>Already Have an Account?</span>
                </div>
            </div>
        </div>
    )
}

export default Register