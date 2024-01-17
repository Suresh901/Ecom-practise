import { useState } from 'react'
import { GoTag } from "react-icons/go";
import MegaMenu from './MegaMenu';
import { RiStoreLine } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Menu = () => {
    const items = [
        {
            name: 'Brands',
            logo: <GoTag />,
            submenu: true,
            children: [
                { label: "Medicine" },
                { label: "Medicine" },
                { label: "Medicine" },
                { label: "Medicine" },
                { label: "Medicine" },


            ]
        },
        {
            name: 'Stores',
            logo: <RiStoreLine />,
            submenu: true,
            children: [
                { label: "Medicine" },
                { label: "Medicine" },
                { label: "Medicine" },
                { label: "Medicine" },

            ]
        }
    ]
    return (

        < div className='flex items-center justify-between lg:mx-[10rem] md:mx-[10rem] mx-10 text-[15px] md:text-[20px] lg:text-[20px] md:gap-20 '>
            {
                items.map((item, index) => (
                    <div>
                        <div className='group relative'>
                            <div key={index}
                                className='relative flex items-center gap-2 cursor-pointer font-bold'>
                                {item.logo}
                                <h1>{item.name}</h1>
                            </div>
                            {item.submenu && (
                                <div className='absolute top-[36.5px] bg-white px-7 rounded-lg z-10 hidden group-hover:block hover:block '>

                                    <div className="w-5 h-5 left-[3rem] absolute mt-[-7px] bg-white rotate-45">
                                    </div>


                                    {item.children.map((child, childIndex) => (
                                        <div className='my-2.5'>
                                            <Link to='/' key={childIndex} className="hover:text-primary font-semibold text-lg">
                                                {child.label}
                                            </Link>
                                        </div>


                                    ))}
                                </div>
                            )}
                        </div>
                    </div>


                ))
            }
            <MegaMenu />
        </div >
    )
}

export default Menu