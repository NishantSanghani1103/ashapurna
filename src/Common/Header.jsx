import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
export default function Header() {


    let [headerMenu, setheaderMenu] = useState(false)

    return (
        <>
            <section className='max-w-full sticky top-0 z-50 mx-auto shadow-lg bg-white mb-4'>
                <div className='max-w-[1320px] lg:p-0 sm:p-0 p-2  flex items-center justify-between mx-auto   ' id='header-mid'>
                    <div id='logo'>
                        <figure>
                            <img src="/images/New_logo_with_iso_-1744808958.webp" className='w-[112px] lg:w-[175px]' alt="" width={175} />
                        </figure>

                    </div>
                    <div className='lg:hidden'>
                        <CiMenuBurger className='text-2xl' onClick={()=>setheaderMenu(true)} />
                    </div>
                    <div className={`lg:static sm:fixed fixed  lg:h-auto h-screen top-0 z-20 bg-white lg:w-auto sm:w-[50%] duration-300 w-full ${headerMenu ? 'left-[0%]' : 'left-[-100%]'} `} id='menu'>
                        <div className='lg:hidden block flex w-full justify-between p-2'>

                            <img src="/images/New_logo_with_iso_-1744808958.webp" className='text-start' width={135} alt="" />

                            <IoMdClose className={`text-3xl text-gray-500`} onClick={()=>setheaderMenu(false)} />

                        </div>
                        <nav>

                            <ul className='flex  lg:flex-row sm:flex-col  flex-col lg:p-0 p-5  items-center lg:gap-10 gap-3 text-[#32343b]'>
                                <li className='lg:w-auto w-full'>
                                    <Link className='capitalize'>Home</Link>
                                </li>
                                <li className='lg:w-auto w-full'>
                                    <Link className='capitalize'>About Us</Link>
                                </li>
                                <li className='lg:w-auto w-full'>
                                    <Link className='capitalize'>Projects</Link>
                                </li>
                                <li className='lg:w-auto w-full'>
                                    <Link>Media and Events</Link>
                                </li>
                                <li className='lg:w-auto w-full'>
                                    <Link className='capitalize'>Blogs</Link>
                                </li>
                                <li className='lg:w-auto w-full'>
                                    <Link>Contact Us</Link>
                                </li>
                                <li className='lg:w-auto w-full'>
                                    <button className='w-full cursor-pointer uppercase bg-[#be8553] font-semibold text-white lg:p-4 p-2 rounded-sm'>enquire</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
            
        </>
    )
}
