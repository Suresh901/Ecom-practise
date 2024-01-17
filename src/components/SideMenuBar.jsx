import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

const SideMenuBar = ({ links, handleCloseMenu }) => {

    const [heading, setHeading] = useState('')
    const [subHeading, setSubHeading] = useState('')
    return (
        <div className='fixed h-full w-screen lg:hidden bg-black/50 backdrop-drop-sm top-0 right-0 z-50'>
            <div className='bg-white absolute left-0 top-0 h-screen p-8 gap-10 w-80 overflow-y-auto  '>
                <div className=" bg-brand w-full left-0 h-[60px] absolute p-4 flex justify-end items-center top-0">
                    <MdOutlineClose size={35} className=" cursor-pointer" onClick={handleCloseMenu} />
                </div>
                <div className="mt-10">
                    {
                        links.map((link) => {
                            return (
                                <div className="shadow-sm w-[280px]  ">
                                    <div className="group " >
                                        < div className="items-center gap-2 cursor-pointer font-semibold text-[20px] flex ml-5 mb-2 justify-between mx-10"
                                            onClick={() => heading !== link.name ? setHeading(link.name) : setHeading('')}>
                                            {link.logo}
                                            <h1 className="flex items-center py-4" >{link.name}</h1>
                                            {heading !== link.name ? <FaAngleDown /> : <IoIosArrowUp />}
                                        </div>

                                        <div className={`
                                        ${heading === link.name ? 'lg:hidden' : 'hidden'}`}>
                                            {
                                                link.sublinks.map((mysublink) => (
                                                    <div className="shadow-sm w-[280px]">
                                                        <div className="flex items-center justify-evenly mx-10"
                                                            onClick={() => subHeading !== mysublink.Head ? setSubHeading(mysublink.Head) : setSubHeading('')}>
                                                            <h1 className="font-semibold text-[15px] cursor-pointer flex items-center py-4" >
                                                                {mysublink.Head}
                                                            </h1>
                                                            {subHeading !== mysublink.Head ? <FaAngleDown /> : <IoIosArrowUp />}
                                                        </div>
                                                        <div className={`
                                                            ${subHeading === mysublink.Head ? 'lg:hidden' : 'hidden'}`}>
                                                            {
                                                                mysublink.sublink.map(slink =>
                                                                    <li className="list-none text-sm text-gray-600 my-2.5">
                                                                        <Link to='/' className="hover:text-primary">
                                                                            {slink.name}
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        </div >
    )
}

export default SideMenuBar