import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Searchbar from '../components/SearchBar'

const SharedLayout = () => {
    return (
        <div>
            <Searchbar />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}

export default SharedLayout