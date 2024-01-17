import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Sidebar = () => {


    return (
        <div className="drawer-side  z-30  ">
            <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
            <ul className="menu  pt-2 w-80 bg-base-100 min-h-full   text-base-content">
                <button className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden" onClick={() => close()}>
                    {/* <XMarkIcon className="h-5 inline-block w-5" /> */} icon
                </button>

                <li className="mb-2 font-semibold text-xl">

                    <Link to={'/app/welcome'}><img className="mask mask-squircle w-10" src="/logo192.png" alt="DashWind Logo" />DashWind</Link> </li>
                {
                    routes.map((route, k) => {
                        return (
                            <li className="" key={k}>
                                {
                                    route.submenu ?
                                        <SidebarSubmenu {...route} /> :
                                        (<NavLink
                                            end
                                            to={route.path}
                                            className={({ isActive }) => `${isActive ? 'font-semibold  bg-base-200 ' : 'font-normal'}`} >
                                            {route.icon} {route.name}
                                            {
                                                location.pathname === route.path ? (<span className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                                                    aria-hidden="true"></span>) : null
                                            }
                                        </NavLink>)
                                }

                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}
export default Sidebar