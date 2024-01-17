import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { removeItemFromCart, resetCart, decreaseItemFromCart, increaseItemFromCart } from "../Store/Slices/CartSlice";


const ShoppingCart = () => {

    const products = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => (total += item.qty * item.price))
        return total;
    }
    return (
        <div className="container">
            <div className='bg-white px-1 py-5 rounded-2xl mx-10 mb-10 mt-10 '>
                <h1 className='font-bold text-[30px] text-center'>Shopping Cart</h1>
                {
                    products.length === 0 ? (
                        <div className='text-xl mt-10' >
                            <p className='flex justify-center '>Your cart is currently empty</p>
                            <Link to='/products' className='flex items-center justify-center gap-2 font-bold mt-10 border border-black 
                            w-[190px] rounded-md p-2 mx-10'>
                                <FaArrowLeftLong />
                                <span>Start Shopping</span>
                            </Link>
                        </div>
                    ) :
                        (
                            <div className='mx-10'>
                                <div className='ml-10 mt-5 mb-10 uppercase hidden sm:hidden md:hidden lg:grid lg:items-center 
                                lg:grid-cols-5 lg:gap-4 lg:grid lg:items-center lg:grid-cols-5 lg:gap-4'>
                                    <h2 className='product-title col-span-2'>Products</h2>
                                    <h2 className='price'>Price</h2>
                                    <h2 className='quantity'>Quantity</h2>
                                    <h2 className='total'>Total</h2>

                                </div>
                                <hr className="mt-5" />
                                <div className='cart-items mt-5 ml-10 mb-10 '>
                                    {products.map((item) => (
                                        <div className='lg:grid lg:items-center lg:grid-cols-5 lg:gap-4 lg:mb-20 mb-10' key={item.id}>
                                            <div className='cart-product items-center gap-10 mr-1 col-span-2 lg:flex md:flex'>
                                                <img src={item.image} alt="image" className='w-[120px] md:w-[150px] lg:w-[100px] max-w[100%] mb-5' />
                                                <div className="md:mt-10">
                                                    <p>{item.title}</p>
                                                    <div className="mt-3">
                                                        <button onClick={() => { dispatch(removeItemFromCart(item.id)) }}
                                                            className="w-[100px] text-white flex items-center justify-center 
                                                                     h-7 gap-1 rounded-md cursor-pointer text-[white] bg-red-500">
                                                            <MdDelete />
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-2'>
                                                <span className="font-bold lg:hidden ">Price: </span>
                                                Rs {item.price.toFixed(2)}
                                            </div>

                                            <div className='mt-2'>
                                                <span className="font-bold lg:hidden">Quantity:</span>
                                                <div className="flex items-center lg:justify-center w-[50px] max-w-[100%] gap-2">
                                                    <button className='bg-[#1FB4A1] text-white px-2 text-[20px] rounded-md'
                                                        onClick={() => dispatch(decreaseItemFromCart(item.id))}>
                                                        -
                                                    </button>
                                                    <div className=' px-2 py-2 text-[20px]'>{item.qty}</div>
                                                    <button className='bg-[#1FB4A1] text-white px-2 text-[20px] rounded-md'
                                                        onClick={() => dispatch(increaseItemFromCart(item.id))}>
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            <div className='mt-2'>
                                                <span className="font-bold lg:hidden">Total: </span>
                                                Rs {(item.qty * item.price).toFixed(2)}
                                            </div>
                                            <hr className="mt-5" />
                                        </div>

                                    ))}

                                    <div className="lg:flex lg:justify-between">
                                        <button className='border border-solid border-black w-[100px] h-[30px] rounded-md mb-5 text-[white] bg-red-500'
                                            onClick={() => dispatch(resetCart())}>Clear Cart
                                        </button>
                                        <div className="mr-[5rem] ">
                                            <div className='lg:flex lg:justify-between font-bold gap-[10rem] mb-5 text-[20px] lg:text-2xl'>
                                                <span className='mr-5'>Subtotal</span>
                                                <span>Rs {totalPrice().toFixed(2)}</span>
                                            </div>

                                            <p className='text-[15px] mb-5'>Taxes and shipping are calculated at checkout</p>
                                            <button className='border border-solid border-black w-[100px] h-[30px] rounded-md mb-5'>Check Out</button>

                                            <div className="flex items-center justify-center gap-2 font-bold border border-black w-[190px] rounded-md p-2 ">
                                                <Link to='/products' className='flex items-center gap-2'>
                                                    <FaArrowLeftLong />
                                                    <span className=''>Continue Shopping</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div >
        </div>

    )
}
export default ShoppingCart