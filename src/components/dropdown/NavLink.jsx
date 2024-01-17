import { GoTag } from "react-icons/go";
import { RiStoreLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavLink = () => {

    const links = [
        // {
        //     logo: <GoTag />,
        //     name: 'Brands',
        //     // submenu: true,
        //     // sublinks: [
        //     //     {
        //     //         Head: "Accessories",
        //     //         sublink: [
        //     //             { name: 'Blood', link: '/' },
        //     //             { name: 'Statescope', link: '/' },
        //     //             { name: 'Amblance Services', link: '/' },
        //     //             { name: 'Hospital Services', link: '/' },
        //     //             { name: 'Pharmacy Services', link: '/' },
        //     //         ]
        //     //     }
        //     // ]

        // },
        // {
        //     logo: <RiStoreLine />,
        //     name: 'Stores',
        //     // submenu: true,
        //     // sublinks: [
        //     //     {
        //     //         Head: "Medicines",
        //     //         sublink: [
        //     //             { name: 'Blood', link: '/' },
        //     //             { name: 'Statescope', link: '/' },
        //     //             { name: 'Amblance Services', link: '/' },
        //     //             { name: 'Hospital Services', link: '/' },
        //     //             { name: 'Pharmacy Services', link: '/' },
        //     //         ]
        //     //     },
        //     //     {
        //     //         Head: "Accessories",
        //     //         sublink: [
        //     //             { name: 'Blood', link: '/' },
        //     //             { name: 'Statescope', link: '/' },
        //     //             { name: 'Amblance Services', link: '/' },
        //     //             { name: 'Hospital Services', link: '/' },
        //     //             { name: 'Pharmacy Services', link: '/' },
        //     //         ]
        //     //     }
        //     // ]
        // },
        {
            logo: <BiCategory />,
            name: 'Categories',
            submenu: true,
            sublinks: [
                {
                    Head: "Medicines",
                    sublink: [
                        { name: 'Blood', link: '/' },
                        { name: 'Statescope', link: '/' },
                        { name: 'Amblance Services', link: '/' },
                        { name: 'Hospital Services', link: '/' },
                        { name: 'Pharmacy Services', link: '/' },
                    ]
                },
                {
                    Head: "Accessories",
                    sublink: [
                        { name: 'Blood', link: '/' },
                        { name: 'Statescope', link: '/' },
                        { name: 'Amblance Services', link: '/' },
                        { name: 'Hospital Services', link: '/' },
                        { name: 'Pharmacy Services', link: '/' },
                    ]
                }
            ]
        },

    ]
    return (
        <div>
            {
                links.map((link) => {
                    return (
                        <div>
                            <div className="group">
                                <div className="flex items-center gap-2 cursor-pointer font-bold ">
                                    {link.logo}
                                    <h1 className="flex items-center py-4"> {link.name}</h1>
                                </div>
                                {link.submenu && (
                                    <div>
                                        <div className="absolute hidden top-[10rem] z-10 group-hover:block hover:block ">
                                            <div className="pb-3">
                                                <div className="w-5 h-5 left-[6.5rem] absolute mt-1 bg-white rotate-45">

                                                </div>
                                            </div>

                                            <div className="absolute right-[-10rem]">
                                                <div className="bg-white p-3.5 rounded-lg grid grid-cols-2 gap-10 w-[500px]">
                                                    {
                                                        link.sublinks.map((mysublink) => (
                                                            <div className="">
                                                                <h1 className="font-semibold text-lg">
                                                                    {mysublink.Head}
                                                                </h1>
                                                                <hr />
                                                                {mysublink.sublink.map(slink => (
                                                                    <li className="list-none text-sm text-gray-600 my-2.5">
                                                                        <Link to='/' className="hover:text-primary">
                                                                            {slink.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                    </div>)
                                }


                            </div>
                        </div>

                    )
                })

            }
        </div>
    )
}

export default NavLink

