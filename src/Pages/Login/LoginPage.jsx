import React, { useState } from 'react'
import Logo from '../../images/logo.png'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const handleEmail = (e) => {
        setEmail(e.target.value)

    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleRememberMe = (e) => {
        setRememberMe(e.target.checked)
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="mx-10 w-[20rem] md:w-[22rem] h-[30rem] ring-gray-600 ring-offset-gray-200 ring-1 shadow-sm rounded-lg">
                <div className="flex justify-center">
                    <img src={Logo} alt="logo" className="w-[8rem]" />
                </div>

                <div className="mx-10 flex flex-col gap-2 md:text-[16px] mb-5">
                    <label>Email</label>
                    <input type="text" className="rounded-lg border border-solid border-gray-600 p-1"
                        value={email}
                        onChange={handleEmail} />
                </div>

                <div className="mx-10 flex flex-col gap-2 md:text-[16px] mb-5">
                    <label>Password</label>
                    <input type="password" className="rounded-lg border border-solid border-gray-600 p-1"
                        value={password}
                        onChange={handlePassword}
                    />
                </div>

                <div className="mx-10 gap-2 mb-2 md:flex md:justify-between">
                    <div className="flex items-center mb-2">
                        <input type="checkbox" className="p-1 transform scale-150"
                            value={rememberMe}
                            onChange={handleRememberMe}
                        />
                        <label className="ml-2 text-[16px]">Remember Me</label>
                    </div>
                    <span className='text-[16px] cursor-pointer'>Forget Password?</span>
                </div>

                <div className='flex justify-center items-center mx-5 mb-5'>
                    <button className="bg-[#1FB4A1] text-white px-4 py-2 rounded-md mr-1 w-full">
                        Login
                    </button>
                </div>

                <div className='flex justify-center items-center mx-5 font-bold cursor-pointer'>
                    <span>Create Account?</span>
                </div>
            </div>
        </div>

    )
}

export default LoginPage