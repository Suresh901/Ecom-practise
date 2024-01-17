import { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MegaMenu from './dropdown/MegaMenu';
import { GiHamburgerMenu } from "react-icons/gi";
import { GoTag } from "react-icons/go";
import { RiStoreLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import SideMenuBar from './SideMenuBar';

const Searchbar = () => {
  const [input, setInput] = useState('')
  const [open, setOpen] = useState(false)
  const products = useSelector(state => state.cart.cartItems);

  const handleMenu = () => {
    setOpen(true)
  }

  const handleCloseMenu = () => {
    setOpen(false)
  }

  const links = [

    {
      name: 'Brands',
      logo: <GoTag />,
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

    {
      name: 'Stores',
      logo: <RiStoreLine />,
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
    }
    ,
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
        },
      ]
    },
  ]

  return (
    <div>
      <div className='mx-10'>
        <div className=' justify-evenly mt-1 items-center hidden lg:flex '>

          <div className='flex items-center'>
            <div>
              <Link to='/'>
                <img src='' alt="Logo" className='h-[5rem] w-[150px] md:h-[6rem] lg:h-[7rem] cursor-pointer' />
              </Link>
            </div>
          </div>

          <div className='flex items-center p-2 bg-white  w-full md:w-2/3 lg:w-3/4 xl:w-4/5 h-[50px]'>
            <div className="flex items-center w-full">
              <span className="text-gray-500 pr-2">
                <CiSearch className='text-2xl' />
              </span>
              <input type="text" placeholder="Search for an Item"
                className="border-none outline-none w-full text-[12px] md:text-[20px] lg:text-[20px]"
                onChange={(event) => { setInput(event.target.value) }} />
            </div>
            <button className="bg-[#1FB4A1] text-white px-2 py-1 md:px-4 md:py-2 rounded-md mr-1" >Search</button>
          </div>

          <div className='flex items-center mx-5 gap-4 '>
            <Link to='/cart'>
              <div>
                <IoMdCart size={30} className='relative' />
                <span className=' absolute top-[9px] md:top-[15px] lg:top-[22px] right-[90px] bg-red-500 rounded-full 
              text-xl text-white w-[25px] flex items-center justify-center'>
                  {products.length}
                </span>
              </div>
            </Link>
            <FaUser size={25} />
          </div>
        </div>
        <div className='bg-[#85eadd] rounded-lg mx-20 hidden lg:block'>
          <MegaMenu links={links} />
        </div>
      </div>

      {/* for mobile sidemenu*/}
      {open ?
        <div className=''>
          <SideMenuBar links={links} handleCloseMenu={handleCloseMenu} />
        </div>
        :
        <div className='lg:hidden shadow-lg '>
          <div className='mx-20 flex items-center justify-between '>
            <div className='left cursor-pointer'>
              <GiHamburgerMenu size={25} onClick={handleMenu} />
            </div>

            <div>
              <Link to='/'>
                <img src='' alt="Logo" className='h-[80px] w-[100px] md:h-[90px] md:w-[120px] cursor-pointer' />
              </Link>
            </div>

            <div className='cursor-pointer flex gap-3'>
              <CiSearch size={25} />
              <Link to='/cart'>
                <div>
                  <IoMdCart size={25} className='relative' />
                  <span className=' absolute top-[5px] md:top-[15px] right-[100px] bg-red-500 rounded-full 
              text-xl text-white w-[25px] flex items-center justify-center'>
                    {products.length}
                  </span>
                </div>
              </Link>
              <FaUser size={20} />
            </div>
          </div>
        </div>
      }
    </div>

  )
}

export default Searchbar

