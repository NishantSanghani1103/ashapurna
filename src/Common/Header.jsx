import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { FaCaretUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Header() {


    let [headerMenu, setheaderMenu] = useState(false)

    let [aboutUsMegaMenu, setaboutUsMegaMenu] = useState(false)

    let [projectMegaMenu, setprojectMegaMenu] = useState(false)

    return (
        <>
            <section className='max-w-full sticky top-0 z-50 mx-auto shadow-lg  bg-white  mb-0'>
                <div className='max-w-[1320px]  lg:p-0 sm:p-0   flex items-center justify-between mx-auto   ' id='header-mid'>
                    <div id='logo' className=''>
                        <figure>
                            <img src="/images/New_logo_with_iso_-1744808958.webp" className='w-[112px] lg:w-[175px] lg:absolute lg:top-[0%]' alt="" width={175} />
                        </figure>

                    </div>
                    <div className='lg:hidden'>
                        <CiMenuBurger className='text-2xl' onClick={() => setheaderMenu(true)} />
                    </div>
                    <div className={`lg:static sm:fixed fixed  lg:h-auto h-screen  overflow-y-auto lg:overflow-y-visible top-0 z-20 bg-white lg:w-auto sm:w-[50%] duration-300 w-full ${headerMenu ? 'left-[0%]' : 'left-[-100%]'} `} id='menu'>
                        <div className='lg:hidden block flex w-full justify-between p-2'>

                            <img src="/images/New_logo_with_iso_-1744808958.webp" className='text-start' width={135} alt="" />

                            <IoMdClose className={`text-3xl text-gray-500`} onClick={() => setheaderMenu(false)} />

                        </div>
                        <nav>

                            <ul className='flex   lg:flex-row sm:flex-col  flex-col lg:p-0 p-3  items-center lg:gap-10 gap-3 text-[#32343b]'>
                                <li className='lg:w-auto w-full lg:hover:border-b-1 border-[#be8553] lg:py-3 lg:hover:text-[#be8553]'>
                                    <Link to={'/'} onClick={()=>setheaderMenu(false)} className='capitalize'>Home</Link>
                                </li>
                                <li className='lg:w-auto w-full group lg:py-8 relative' onClick={() => {
                                    setaboutUsMegaMenu(!aboutUsMegaMenu)
                                }}>
                                    <Link className={`capitalize flex items-center lg:hover:text-[#be8553] justify-between ${aboutUsMegaMenu && 'text-[#be8553]'}`}>About Us
                                        {
                                            aboutUsMegaMenu ? <FaChevronUp className='lg:hidden sm:block block' />

                                                :
                                                <FaChevronDown className='lg:hidden sm:block block' />

                                        }
                                    </Link>
                                    <FaCaretUp className='absolute top-[72%] left-[20%] text-3xl hidden  lg:group-hover:block text-[#be8553]' />
                                    <div
                                        id="aboutUs-MegaMenu"
                                        className={` bg-white border-[#be8553] lg:shadow-md lg:border-t-2 lg:border-b-2 lg:absolute  lg:top-full lg:w-[250px] h-auto ${aboutUsMegaMenu ? 'block' : 'hidden'} lg:group-hover:block`}>
                                        <ul>
                                            <li className='w-full  capitalize hover:bg-gray-100 lg:p-3 p-2'>
                                                <Link to={'/about'} onClick={() => {
                                                    setheaderMenu(false)
                                                    setaboutUsMegaMenu(false)
                                                }}>About Us</Link>
                                            </li>
                                            <li className='w-full  capitalize hover:bg-gray-100 lg:p-3 p-2'>
                                                <Link to={'/our-journey'}>Our Journey</Link>
                                            </li>
                                            <li className='w-full  capitalize hover:bg-gray-100 lg:p-3 p-2'>
                                                <Link to={'/management-speak'}>Managment Speaks</Link>
                                            </li>
                                            <li className='w-full  capitalize hover:bg-gray-100 lg:p-3 p-2'>
                                                <Link to={'/our-team'}>Our Team</Link>
                                            </li>
                                            <li className='w-full  capitalize hover:bg-gray-100 lg:p-3 p-2'>
                                                <Link to={'/csr-social-responsibility'}>CRS social responsobility</Link>
                                            </li>
                                            <li className='w-full  capitalize hover:bg-gray-100 lg:p-3 p-2'>
                                                <Link>newslatter</Link>
                                            </li>
                                            <li className='w-full  capitalize hover:bg-gray-100 lg:p-3 p-2'>
                                                <Link>NRI corner</Link>
                                            </li>
                                            <li className='w-full  capitalize hover:bg-gray-100 lg:p-3 p-2'>
                                                <Link>why invest in jodhapur</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className='lg:w-auto w-full group lg:py-8 relative' onClick={() => setprojectMegaMenu(!projectMegaMenu)}>
                                    <Link className={`capitalize flex items-center justify-between lg:hover:text-[#be8553] ${projectMegaMenu && 'text-[#be8553]'}`}>Projects
                                        {
                                            projectMegaMenu ? <FaChevronUp className='lg:hidden sm:block block' />

                                                :
                                                <FaChevronDown className='lg:hidden sm:block block' />

                                        }
                                    </Link>
                                    <FaCaretUp className='absolute top-[72%] left-[20%] text-3xl hidden  lg:group-hover:block text-[#be8553]' />
                                    <div
                                        id="project-MegaMenu"
                                        className={` bg-white border-[#be8553] lg:shadow-md lg:border-t-2 lg:border-b-2 lg:absolute  lg:top-full lg:w-[200px] h-auto ${projectMegaMenu ? 'block' : 'hidden'} lg:group-hover:block`}>
                                        <ul>
                                            <li className='w-full  capitalize hover:bg-gray-100 p-3'>
                                                <Link>Residential</Link>
                                            </li>
                                            <li className='w-full  capitalize hover:bg-gray-100 p-3'>
                                                <Link>Commercial</Link>
                                            </li>
                                            <li className='w-full  capitalize hover:bg-gray-100 p-3'>
                                                <Link>Rental & Lease</Link>
                                            </li>
                                            <li className='w-full  capitalize hover:bg-gray-100 p-3'>
                                                <Link>Hospitality</Link>
                                            </li>
                                            <li className='w-full  capitalize hover:bg-gray-100 p-3'>
                                                <Link>Education</Link>
                                            </li>
                                            <li className='w-full  capitalize hover:bg-gray-100 p-3'>
                                                <Link>Windmills</Link>
                                            </li>
                                            <li className='w-full  capitalize hover:bg-gray-100 p-3'>
                                                <Link>NRI township</Link>
                                            </li>
                                            <li className='w-full  capitalize hover:bg-gray-100 p-3'>
                                                <Link>upcoming projects</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='lg:w-auto w-full lg:hover:border-b-1 border-[#be8553] lg:py-3 lg:hover:text-[#be8553]'>
                                    <Link>Media and Events</Link>
                                </li>
                                <li className='lg:w-auto w-full lg:hover:border-b-1 border-[#be8553] lg:py-3 lg:hover:text-[#be8553]'>
                                    <Link className='capitalize'>Blogs</Link>
                                </li>
                                <li className='lg:w-auto w-full pb-5 lg:hover:border-b lg:hover:border-[#be8553] lg:py-3 lg:border-transparent lg:hover:text-[#be8553] border-b border-gray-300'>
                                    <Link to="/contact">Contact Us</Link>
                                </li>
                                <div className='w-full lg:hidden block'>
                                    <li className='text-start'>
                                        <p className='text-lg text-[#be8553] uppercase font-medium'>Connect</p>
                                        <p className='py-2'><b>Email :</b>marketing@ashapurna.com</p>
                                        <p className='py-2 border-b border-gray-300'><b>Phone :</b>9314041747</p>
                                        <div className='w-full my-3'>
                                            <p className='text-lg text-[#be8553] uppercase font-medium'>social connect</p>
                                            <div className='flex gap-2 my-2' id='socail-Icones '>
                                                <div className='bg-[#062f43] w-[40px] h-[40px] flex items-center justify-center rounded-[50%]'>
                                                    <FaFacebookF className='text-white' />
                                                </div>
                                                <div className='bg-[#062f43] w-[40px] h-[40px] flex items-center justify-center rounded-[50%]'>
                                                    <FaTwitter className='text-white' />
                                                </div>
                                                <div className='bg-[#062f43] w-[40px] h-[40px] flex items-center justify-center rounded-[50%]'>
                                                    <FaInstagram className='text-white' />
                                                </div>
                                                <div className='bg-[#062f43] w-[40px] h-[40px] flex items-center justify-center rounded-[50%]'>
                                                    <FaLinkedinIn className='text-white' />
                                                </div>
                                                <div className='bg-[#062f43] w-[40px] h-[40px] flex items-center justify-center rounded-[50%]'>
                                                    <FaYoutube className='text-white' />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
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
