import { Link } from "react-router-dom";


const NavLink = ({ links }) => {
    return (
        <div>
            <div className="flex justify-between mx-20 ">
                {
                    links.map((link) => {
                        return (
                            <div>
                                <div className="group">
                                    <div className="md:flex hidden items-center gap-2 cursor-pointer font-semibold text-[20px] ">
                                        {link.logo}
                                        <h1 className="flex items-center py-4">{link.name}</h1>
                                    </div>

                                    {link.submenu && (
                                        <div className="absolute hidden lg:top-[10.5rem] md:top-[9.5rem] z-10 group-hover:block hover:block left-[130px]">
                                            <div>
                                                <div className="absolute lg:w-[800px] xl:w-[1000px]">
                                                    <div className="bg-white p-3.5 rounded-lg grid lg:grid-cols-3 gap-10 ">
                                                        {
                                                            link.sublinks.map((mysublink) => (
                                                                <div className="">
                                                                    <h1 className="font-semibold text-lg">
                                                                        {mysublink.Head}
                                                                    </h1>

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
        </div>
    )
}

export default NavLink

