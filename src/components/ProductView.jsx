import { useState, useEffect, useRef } from 'react'
import { IoStarSharp } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch } from 'react-redux'
import { addToCart } from '../Store/Slices/CartSlice'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Magnifier from './Magnifier';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const ProductView = () => {
    const [item, setItem] = useState([])
    const { id } = useParams();
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1)
    const images = [
        'https://static-01.daraz.com.np/p/3bb7476c0195d2ba9d480f90b2a46dd1.jpg',
        'https://rukminim2.flixcart.com/image/850/1000/xif0q/bag/4/b/0/43-stylish-croco-leather-school-college-bag-for-boys-for-class-original-imagqwrhkn6rsh9e.jpeg?q=90',
        'https://bsmedia.business-standard.com/_media/bs/img/article/2022-11/25/full/1669400288-0753.jpg',
        'https://media.karousell.com/media/photos/products/2022/3/11/genuine_full_leather_backpack__1646977505_c3025f53_progressive.jpg'
    ]

    const variations = [
        'https://media.karousell.com/media/photos/products/2022/3/11/genuine_full_leather_backpack__1646977505_c3025f53_progressive.jpg',
        'https://rukminim2.flixcart.com/image/850/1000/xif0q/bag/4/b/0/43-stylish-croco-leather-school-college-bag-for-boys-for-class-original-imagqwrhkn6rsh9e.jpeg?q=90',
        'https://images.unsplash.com/photo-1607874963930-2edecc67a25a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaWNpbmVzfGVufDB8fDB8fHww',
        'https://www.grxstatic.com/4f3rgqwzdznj/3lfvHPxGMDrxMpO8unTC3J/4ae22afb70eea1727c1749b0df666a21/magnifying_glass_and_pills-1342778591.jpg?format=pjpg&auto=webp&width=704',

    ]

    const [currentImage, setCurrentImage] = useState(images[0])

    const handleAddItem = (item) => {
        const product = { ...item, qty: quantity }
        dispatch(addToCart(product))
    }

    const showProduct = () => {
        const url = `https://fakestoreapi.com/products/${id}`
        axios.get(url).then((res) => {
            // console.log(res.data)
            setItem(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        showProduct();
    }, [])

    const hoverHandle = (state) => {
        setCurrentImage(state)
    }

    //slider
    const slider = useRef(null);

    function slideNext() {
        slider?.current?.slickNext();
    }

    function slidePrev() {
        slider?.current?.slickPrev();
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <></>,
        prevArrow: <></>,

    };

    return (
        <div className='mx-10 mb-10 lg:flex lg:justify-around mt-10 gap-10'>
            <div>
                <div>
                    {/* <img src={currentImage} alt="Image" className='w-auto h-[300px] rounded-[1rem] md:w-[300px] md:h-[350px]  lg:w-[450px] lg:h-[450px] mb-5 ' /> */}
                    <Magnifier currentImage={currentImage} />
                </div>

                <div className='flex mb-5 mx-4 rounded-md'>
                    <div className={`flex py-2 justify-end gap-4 relative`}>
                        <ChevronLeftIcon
                            onClick={() => slidePrev()}
                            className={
                                "flex items-center justify-center h-10 w-10 text-lg cursor-pointer absolute z-10 left-[-30px] top-[3.5rem]"
                            }
                        ></ChevronLeftIcon>
                        <ChevronRightIcon
                            onClick={() => slideNext()}
                            className={
                                "flex items-center justify-center h-10 w-10 text-lg cursor-pointer absolute z-10 right-[-31px] top-[3.5rem]"
                            }
                        ></ChevronRightIcon>
                        <Slider className='flex rounded-md gap-3 w-[300px] mt-5' ref={slider} {...settings}>
                            {images?.map((image, i) => (
                                <div key={i} className='border border-solid border-black w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[90px] lg:h-[90px] p-1'
                                    onMouseOver={() => hoverHandle(images[i])}>
                                    <img src={image} className='w-full h-full object-contain' />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div>
                <span className='font-bold text-[20px] md:text-[25px] lg:text-[31px]'>{item.title}</span>
                <h5 className='text-[#6E97AA] flex gap-1 text-[10px] md:text-[12px] lg:text-[16px] mb-5'>Sold By:
                    <span className='text-[#1FB4A1] underline'>Smart Health Nepal</span> |
                    <div className='flex items-center '>
                        <IoStarSharp size={18} className='text-[#1FB4A1]' />
                        <IoStarSharp size={18} className='text-[#1FB4A1]' />
                        <IoStarSharp size={18} className='text-[#1FB4A1]' />
                        <IoStarSharp size={18} className='text-[#1FB4A1]' />
                        <IoStarSharp size={18} className='text-[#1FB4A1]' />
                    </div>

                    <p>({item.review} Rating)</p>
                </h5>
                <div className='flex items-center gap-2 mb-2'>
                    <h5 className='text-[#235B74] text-[20px] font-bold'>Rs {item?.price}</h5>
                    <h5 className='line-through text-gray-500 text-[15px] font-bold'>Rs {item?.price}</h5>
                </div>
                <h5 className='text-[#848484] text-[12px] mb-5'>Inclusive of VAT</h5>
                <h5 className='text-[#848484] text-[12px]'>Availability: <span className='text-[#1FCC75]'>In Stock</span></h5>
                <h5 className='text-[#FF4F4F] text-[10px] md:text-[12px] lg:text-[13px] font-bold mb-5'>Only 15 left in stock - purchase soon</h5>

                <h5 className='text-[#848484] text-[16px] mb-5'>Variations</h5>

                {/* <div className='flex mb-5'>
                    <Slider className='flex rounded-md gap-3 w-[300px]' ref={slider} {...settings}>
                        {variations?.map((variation, i) => (
                            <div key={i} className='border border-solid border-black w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[90px] lg:h-[90px] p-1'
                                onMouseOver={() => hoverHandle(variations[i])}>
                                <img src={variation} className='w-full h-full object-contain' />
                            </div>
                        ))}
                    </Slider>
                </div> */}

                <div>
                    <h5 className='mb-2 text-[#848484] text-[20px]'>Quantity</h5>
                    <div className='flex items-center mb-2 '>
                        <button
                            className='bg-[#1FB4A1] text-white px-2.5 text-[25px] rounded-md'
                            onClick={(e) => { setQuantity(num => num === 1 ? 1 : num - 1) }}
                        > - </button>
                        <span className=' px-2 py-2 text-[25px]'> {quantity} </span>
                        <button
                            className='bg-[#1FB4A1] text-white px-2 text-[25px] rounded-md'
                            onClick={(e) => { setQuantity(num => num + 1) }}
                        > + </button>
                    </div>
                </div>

                <div className='flex gap-5'>
                    <Link to='/cart'>
                        <button className="border border-solid border-[#1FB4A1] text-[#1FB4A1]  
                    flex items-center justify-center h-10 gap-1 mb-2 px-2 py-2 rounded-md md:w-[200px] lg:w-[250px]"
                            onClick={() => handleAddItem(item)}
                        >
                            <IoMdCart className='text-[#1FB4A1]' />
                            Add To Cart</button></Link>

                    <button className=" bg-[#1FB4A1] text-white flex items-center justify-center 
                    h-10 gap-1 px-2 py-2 rounded-md md:w-[200px] lg:w-[250px]"> Buy Now <IoIosArrowForward /></button>
                </div>
            </div>
        </div >
    );

}
export default ProductView

