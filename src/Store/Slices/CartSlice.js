import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const existingProduct = state.cartItems.find(product => product.id == action.payload.id)
            if (existingProduct) {
                existingProduct.qty += action.payload.qty
                toast.info("Product quantity increased successfully", {
                    position: 'top-right'
                })
            } else {
                if (action.payload.qty <= 1) {
                    state.cartItems.push(action.payload)
                    toast.success("Product added successfully", {
                        position: 'top-right'
                    })
                } else {
                    state.cartItems.push(action.payload)
                    toast.success("Product added successfully", {
                        position: 'top-right'
                    })
                }
            }
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id != action.payload)
            toast.error(" Product deleted successfully", {
                position: 'top-right'
            })
        },

        resetCart: (state) => {
            state.cartItems = [];
            toast.error("Cart reset successfully", {
                position: 'top-right'
            })
        },
        decreaseItemFromCart: (state, action) => {
            const checkProduct = state.cartItems.find(product => product.id == action.payload)
            checkProduct.qty = checkProduct.qty === 1 ? 1 : checkProduct.qty - 1;

        },

        increaseItemFromCart: (state, action) => {
            const checkProduct = state.cartItems.find(product => product.id == action.payload)
            checkProduct.qty += 1

        }
    },
})

export const { addToCart, removeItemFromCart, resetCart, decreaseItemFromCart, increaseItemFromCart } = cartSlice.actions

export default cartSlice.reducer