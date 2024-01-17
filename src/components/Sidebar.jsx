import Logo from "../images/logo.png"
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <div className="fixed left-0 top-15 w-64 h-full bg-[#85eadd] p-4 z-50 sidebar-menu 
            transition-transform font-bold ">
                <Link to="/" className="flex items-center pb-4 border-b border-b-gray-800 ">
                    <div className='w-[7rem] h-[7rem] bg-white ml-10 rounded-lg'>
                        <img src={Logo} alt="img" className="w-full rounded object-cover" />
                    </div>
                </Link>

                <ul className="mt-4 text-[50px]" >
                    <li className="mb-1 group">
                        <Link to="#" className="flex items-center py-2 px-4 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                            <span className="text-sm">Dashboard</span>
                        </Link>
                    </li>
                    <li className="mb-1 group">
                        <Link to="#" className="flex items-center py-2 px-4 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                            <span className="text-sm">Brand</span>
                        </Link>
                    </li>

                    <li className="mb-1 group">
                        <Link to="#" className="flex items-center py-2 px-4 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                            <span className="text-sm">Product</span>
                        </Link>
                    </li>

                    <li className="mb-1 group">
                        <a href="#" className="flex items-center py-2 px-4  hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                            <span className="text-sm">Shop</span>
                        </a>
                    </li>

                    <li className="mb-1 group">
                        <a href="#" className="flex items-center py-2 px-4  hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">

                            <span className="text-sm">Category</span>
                        </a>
                    </li>
                    <li className="mb-1 group">
                        <a href="#" className="flex items-center py-2 px-4  hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">

                            <span className="text-sm">Cart</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>
        </div>
    )
}

export default Sidebar