import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { IoHome } from 'react-icons/io5';
import { Link } from 'react-router-dom';
export default function AboutFeaturedProjects() {
    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className='max-w-full text-center' id='aboutFeaturedProjects'>
                <h2 className='lg:text-4xl text-2xl text-[#062f43] font-semibold'>Feature Projects</h2>



                <div className='max-w-[1320px] mb-36 mx-auto'>
                    <Slider className='lg:my-10 aboutAboutSlider' {...settings} >


                        <div style={{ border: "1px solid red" }}>
                            <div className='mx-2 my-2'>
                                <div className='bg-white shadow-lg rounded-lg p-2' >
                                    <div className='relative  projectOverview-items-images'>
                                        <figure>
                                            <img src="/images/Gate_-_4-min-1716280216.jpg" className='rounded-lg w-full h-[250px] ' alt="" />
                                        </figure>
                                        <div className='bg-white shadow-lg rounded-lg z-50 absolute bottom-[-17%] lg:w-[355px] w-full left-1/2 -translate-x-1/2  px-4 py-3 ' >
                                            <div className='flex gap-2 items-center my-1'>
                                                <figure>
                                                    <img src="/images/mb_logo_a-1699176365.jpg" className='w-[27px] h-[30px] ' alt="" />
                                                </figure>
                                                <Link className='font-semibold heading-color_bg-color '>Ashapurna Mohan Bagh</Link>
                                            </div>
                                            <div className='flex gap-2 items-center my-1 heading-color_bg-color'>
                                                <FaLocationDot className='text-sm' />
                                                <p className='lg:text-[13px] text-[10px] heading-color_bg-color'>Near ITC Hotel, Uchiyarda, Jodhpur, Rajasthan</p>
                                            </div>
                                            <div className='flex justify-between items-center my-1 heading-color_bg-color'>
                                                <div>
                                                    <div className='flex items-center gap-2'>
                                                        <IoHome className='text-sm' />
                                                        <p className='text-sm font-normal heading-color_bg-color'>Booking Open</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className='rounded-sm p-1 text-white border-1 text-sm bg-color '>See All</button>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='bg-color absolute top-[5%] rounded-sm text-white text-[12px] right-[2%] p-2'>
                                            <p>Booking Open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                        <div style={{ border: "1px solid red" }}>
                            <div className='mx-2 my-2'>
                                <div className='bg-white shadow-lg rounded-lg p-2' >
                                    <div className='relative  projectOverview-items-images'>
                                        <figure>
                                            <img src="/images/ashapurna-basera-1681994295.webp" className='rounded-lg w-full h-[250px] ' alt="" />
                                        </figure>
                                        <div className='bg-white shadow-lg rounded-lg z-50 absolute bottom-[-17%] w-full lg:w-[355px] left-1/2 -translate-x-1/2  px-4 py-3 ' >
                                            <div className='flex gap-2 items-center my-1'>
                                                <figure>
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ddfdff29-6fb8-4dae-9c19-e32de67623cb-1670846257.png" className='w-[27px] h-[30px] ' alt="" />
                                                </figure>
                                                <Link className='font-semibold heading-color_bg-color '>Ashapurna Basera</Link>
                                            </div>
                                            <div className='flex gap-2 items-center my-1 heading-color_bg-color'>
                                                <FaLocationDot className='text-sm' />
                                                <p className='lg:text-[13px] text-[10px] heading-color_bg-color'>NSangariya Bypass Rd, Pal, Rajasthan 342008</p>
                                            </div>
                                            <div className='flex justify-between items-center my-1 heading-color_bg-color'>
                                                <div>
                                                    <div className='flex items-center gap-2'>
                                                        <IoHome className='text-sm' />
                                                        <p className='text-sm font-normal heading-color_bg-color'>Booking Open</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className='rounded-sm p-1 text-white border-1 text-sm bg-color '>See All</button>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='bg-[rgb(114,180,38)] absolute top-[5%] rounded-sm text-white text-[12px] right-[2%] p-2'>
                                            <p>Ready to Occupy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                        <div style={{ border: "1px solid red" }}>
                            <div className='mx-2 my-2'>
                                <div className='bg-white shadow-lg rounded-lg p-2' >
                                    <div className='relative  projectOverview-items-images'>
                                        <figure>
                                            <img src="/images/Gate_-_4-min-1716280216.jpg" className='rounded-lg w-full h-[250px] ' alt="" />
                                        </figure>
                                        <div className='bg-white shadow-lg rounded-lg z-50 absolute bottom-[-17%] lg:w-[355px] w-full left-1/2 -translate-x-1/2  px-4 py-3 ' >
                                            <div className='flex gap-2 items-center my-1'>
                                                <figure>
                                                    <img src="/images/mb_logo_a-1699176365.jpg" className='w-[27px] h-[30px] ' alt="" />
                                                </figure>
                                                <Link className='font-semibold heading-color_bg-color '>Ashapurna Mohan Bagh</Link>
                                            </div>
                                            <div className='flex gap-2 items-center my-1 heading-color_bg-color'>
                                                <FaLocationDot className='text-sm' />
                                                <p className='lg:text-[13px] text-[10px] heading-color_bg-color'>Near ITC Hotel, Uchiyarda, Jodhpur, Rajasthan</p>
                                            </div>
                                            <div className='flex justify-between items-center my-1 heading-color_bg-color'>
                                                <div>
                                                    <div className='flex items-center gap-2'>
                                                        <IoHome className='text-sm' />
                                                        <p className='text-sm font-normal heading-color_bg-color'>Booking Open</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className='rounded-sm p-1 text-white border-1 text-sm bg-color '>See All</button>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='bg-color absolute top-[5%] rounded-sm text-white text-[12px] right-[2%] p-2'>
                                            <p>Booking Open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div style={{ border: "1px solid red" }}>
                            <div className='mx-2 my-2'>
                                <div className='bg-white shadow-lg rounded-lg p-2' >
                                    <div className='relative  projectOverview-items-images'>
                                        <figure>
                                            <img src="/images/Gate_-_4-min-1716280216.jpg" className='rounded-lg w-full h-[250px] ' alt="" />
                                        </figure>
                                        <div className='bg-white shadow-lg rounded-lg z-50 absolute bottom-[-17%] lg:w-[355px] w-full left-1/2 -translate-x-1/2  px-4 py-3 ' >
                                            <div className='flex gap-2 items-center my-1'>
                                                <figure>
                                                    <img src="/images/mb_logo_a-1699176365.jpg" className='w-[27px] h-[30px] ' alt="" />
                                                </figure>
                                                <Link className='font-semibold heading-color_bg-color '>Ashapurna Mohan Bagh</Link>
                                            </div>
                                            <div className='flex gap-2 items-center my-1 heading-color_bg-color'>
                                                <FaLocationDot className='text-sm' />
                                                <p className='lg:text-[13px] text-[10px] heading-color_bg-color'>Near ITC Hotel, Uchiyarda, Jodhpur, Rajasthan</p>
                                            </div>
                                            <div className='flex justify-between items-center my-1 heading-color_bg-color'>
                                                <div>
                                                    <div className='flex items-center gap-2'>
                                                        <IoHome className='text-sm' />
                                                        <p className='text-sm font-normal heading-color_bg-color'>Booking Open</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className='rounded-sm p-1 text-white border-1 text-sm bg-color '>See All</button>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='bg-color absolute top-[5%] rounded-sm text-white text-[12px] right-[2%] p-2'>
                                            <p>Booking Open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div style={{ border: "1px solid red" }}>
                            <div className='mx-2 my-2'>
                                <div className='bg-white shadow-lg rounded-lg p-2' >
                                    <div className='relative  projectOverview-items-images'>
                                        <figure>
                                            <img src="/images/Gate_-_4-min-1716280216.jpg" className='rounded-lg w-full h-[250px] ' alt="" />
                                        </figure>
                                        <div className='bg-white shadow-lg rounded-lg z-50 absolute bottom-[-17%] lg:w-[355px] w-full left-1/2 -translate-x-1/2  px-4 py-3 ' >
                                            <div className='flex gap-2 items-center my-1'>
                                                <figure>
                                                    <img src="/images/mb_logo_a-1699176365.jpg" className='w-[27px] h-[30px] ' alt="" />
                                                </figure>
                                                <Link className='font-semibold heading-color_bg-color '>Ashapurna Mohan Bagh</Link>
                                            </div>
                                            <div className='flex gap-2 items-center my-1 heading-color_bg-color'>
                                                <FaLocationDot className='text-sm' />
                                                <p className='lg:text-[13px] text-[10px] heading-color_bg-color'>Near ITC Hotel, Uchiyarda, Jodhpur, Rajasthan</p>
                                            </div>
                                            <div className='flex justify-between items-center my-1 heading-color_bg-color'>
                                                <div>
                                                    <div className='flex items-center gap-2'>
                                                        <IoHome className='text-sm' />
                                                        <p className='text-sm font-normal heading-color_bg-color'>Booking Open</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className='rounded-sm p-1 text-white border-1 text-sm bg-color '>See All</button>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='bg-color absolute top-[5%] rounded-sm text-white text-[12px] right-[2%] p-2'>
                                            <p>Booking Open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

            </section>


        </>
    )
}
