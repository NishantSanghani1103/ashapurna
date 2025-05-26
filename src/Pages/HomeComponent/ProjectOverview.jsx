import React from 'react'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
export default function ProjectOverview() {

    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
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
            <section className='w-full bg-[url(/images/whyashapurna-bg.webp)] ' id='projectOverView'>
                <div className='max-w-[1320px] py-12 lg:mx-auto mx-5'>
                    <div className='heading'>
                        <div className='flex gap-3 items-center'>
                            <p className='text-[#be8553]'>PROJECT OVERVIEW</p>
                            <div className='border-[0.5px] border-[#be8553] w-[81px] h-0'></div>
                        </div>
                        <h2 className='capitalize font-semibold lg:text-[35px] sm:text-[35px] text-[26px] lg:py-0 sm:py-0 py-2 leading-[1.2]'>Ready & Nearing Completion Projects</h2>
                        <p className='text-[#5A5A5A] text-sm py-3 leading-6'>Meticulously crafted and emotionally designed, Ashapurna villas & flats are the perfect place to be in. A lifestyle benchmark in <br className='lg:block hidden' /> Rajasthan, today and tomorrow, our successful communities are our biggest achievement.</p>
                    </div>

                    <div className='w-full lg:grid grid-cols-3 gap-3 hidden ' id='desktop-projectOverView-items'>
                        <div className='bg-white shadow-lg rounded-lg p-2'>
                            <div className='relative projectOverview-items-images'>
                                <figure>
                                    <img src="/images/Gate_-_4-min-1716280216.jpg" className='rounded-lg w-full h-[250px] ' alt="" />
                                </figure>
                                <div className='bg-white shadow-lg rounded-lg absolute bottom-[-17%] w-[355px] left-1/2 -translate-x-1/2  px-4 py-3' >
                                    <div className='flex gap-2 items-center my-1'>
                                        <figure>
                                            <img src="/images/mb_logo_a-1699176365.jpg" className='w-[27px] h-[30px] ' alt="" />
                                        </figure>
                                        <Link className='font-semibold heading-color_bg-color '>Ashapurna Mohan Bagh</Link>
                                    </div>
                                    <div className='flex gap-2 items-center my-1 heading-color_bg-color'>
                                        <FaLocationDot className='text-sm' />
                                        <p className='text-[13px] heading-color_bg-color'>Near ITC Hotel, Uchiyarda, Jodhpur, Rajasthan</p>
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


                        <div className='bg-white shadow-lg rounded-lg p-2'>
                            <div className='relative projectOverview-items-images'>
                                <figure>
                                    <img src="/images/premium-budget-villas-in-jodhpur-1681994380.webp" className='rounded-lg w-full h-[250px] ' alt="" />
                                </figure>
                                <div className='bg-white shadow-lg rounded-lg absolute bottom-[-17%] w-[355px] left-1/2 -translate-x-1/2  px-4 py-3' >
                                    <div className='flex gap-2 items-center my-1'>
                                        <figure>
                                            <img src="/images/ashapurna-anmol-budget-villas-in-jodhpur-logo-1677495339.webp" className='w-[27px] h-[30px] object-contain ' alt="" />
                                        </figure>
                                        <Link className='font-semibold heading-color_bg-color '>Ashapurna Anmol I,II,III</Link>
                                    </div>
                                    <div className='flex gap-2 items-center my-1 heading-color_bg-color'>
                                        <FaLocationDot className='text-sm' />
                                        <p className='text-[13px] heading-color_bg-color'>Near New High Court,Jodhpur</p>
                                    </div>
                                    <div className='flex justify-between items-center my-1 heading-color_bg-color'>
                                        <div>
                                            <div className='flex items-center gap-2'>
                                                <IoHome className='text-sm' />
                                                <p className='text-sm font-normal heading-color_bg-color'>Few Units Left</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='rounded-sm p-1 text-white border-1 text-sm bg-color '>See All</button>
                                        </div>

                                    </div>



                                </div>
                                <div className='bg-[#FF5722] absolute top-[5%] rounded-sm text-white text-[12px] right-[2%] p-2'>
                                    <p>Few Units Left</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white shadow-lg rounded-lg p-2'>
                            <div className='relative projectOverview-items-images'>
                                <figure>
                                    <img src="/images/nanomax-project-thumbnail-1681986809.webp" className='rounded-lg w-full h-[250px] ' alt="" />
                                </figure>
                                <div className='bg-white shadow-lg rounded-lg absolute bottom-[-17%] w-[355px] left-1/2 -translate-x-1/2  px-4 py-3' >
                                    <div className='flex gap-2 items-center my-1'>
                                        <figure>
                                            <img src="/images/ashapurna-nanomax-ii-logo-1677494586.webp" className='w-[27px] h-[30px] object-contain ' alt="" />
                                        </figure>
                                        <Link className='font-semibold heading-color_bg-color '>Ashapurna Nanomax II</Link>
                                    </div>
                                    <div className='flex gap-2 items-center my-1 heading-color_bg-color'>
                                        <FaLocationDot className='text-sm' />
                                        <p className='text-[13px] heading-color_bg-color'>Jodhpur, Rajasthan 342015, India</p>
                                    </div>
                                    <div className='flex justify-between items-center my-1 heading-color_bg-color'>
                                        <div>
                                            <div className='flex items-center gap-2'>
                                                <IoHome className='text-sm' />
                                                <p className='text-sm font-normal heading-color_bg-color'>Few Units Left</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='rounded-sm p-1 text-white border-1 text-sm bg-color '>See All</button>
                                        </div>

                                    </div>



                                </div>
                                <div className='bg-[#FF5722] absolute top-[5%] rounded-sm text-white text-[12px] right-[2%] p-2'>
                                    <p>Few Units Left</p>
                                </div>
                            </div>
                        </div>




                    </div>



                    <div className='lg:hidden block' id='mob-projectOverView-items'>
                        <Slider className='my-5 ' {...settings} id="">
                            <div>
                                <div className='sm:mx-3'>
                                    <div className='bg-white shadow-lg rounded-lg p-2'>
                                        <div className='relative projectOverview-items-images'>
                                            <figure>
                                                <img src="/images/Gate_-_4-min-1716280216.jpg" className='rounded-lg w-full sm:h-[197px] h-[150px]  ' alt="" />
                                            </figure>
                                            <div className='bg-white shadow-lg rounded-lg p-2  ' >

                                                <div className='flex gap-2 items-center my-1'>
                                                    <figure>
                                                        <img src="/images/mb_logo_a-1699176365.jpg" className='w-[27px] h-[30px] ' alt="" />
                                                    </figure>
                                                    <Link className='font-semibold heading-color_bg-color '>Ashapurna Mohan Bagh</Link>
                                                </div>
                                                <div className='flex gap-2 items-center my-2 heading-color_bg-color'>
                                                    <FaLocationDot className='text-lg' />
                                                    <p className='text-sm heading-color_bg-color'>Near ITC Hotel, Uchiyarda, Jodhpur, Rajasthan</p>
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
                                            <div className='bg-color absolute top-[2%] rounded-sm text-white text-[12px] right-[4%] p-2'>
                                                <p>Booking Open</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='sm:mx-3'>
                                    <div className='bg-white shadow-lg rounded-lg p-2'>
                                        <div className='relative projectOverview-items-images'>
                                            <figure>
                                                <img src="/images/premium-budget-villas-in-jodhpur-1681994380.webp" className='rounded-lg w-full ' alt="" />
                                            </figure>
                                            <div className='bg-white shadow-lg rounded-lg p-2  ' >

                                                <div className='flex gap-2 items-center my-1'>
                                                    <figure>
                                                        <img src="/images/ashapurna-anmol-budget-villas-in-jodhpur-logo-1677495339.webp" className='w-[27px] h-[30px] ' alt="" />
                                                    </figure>
                                                    <Link className='font-semibold heading-color_bg-color '>Ashapurna Anmol I,II,III</Link>
                                                </div>
                                                <div className='flex gap-2 items-center my-2 heading-color_bg-color'>
                                                    <FaLocationDot className='text-lg' />
                                                    <p className='text-sm heading-color_bg-color'>Near New High Court,Jodhpur</p>
                                                </div>
                                                <div className='flex justify-between items-center my-1 heading-color_bg-color'>
                                                    <div>
                                                        <div className='flex items-center gap-2'>
                                                            <IoHome className='text-sm' />
                                                            <p className='text-sm font-normal heading-color_bg-color'>Few Units Left</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className='rounded-sm p-1 text-white border-1 text-sm bg-color '>See All</button>
                                                    </div>

                                                </div>



                                            </div>
                                            <div className='bg-[#FF5722] absolute top-[5%] rounded-sm text-white text-[12px] right-[2%] p-2'>
                                                <p>Few Units Left</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div className='bg-white shadow-lg rounded-lg p-2'>
                                        <div className='relative projectOverview-items-images'>
                                            <figure>
                                                <img src="/images/nanomax-project-thumbnail-1681986809.webp" className='rounded-lg w-full ' alt="" />
                                            </figure>
                                            <div className='bg-white shadow-lg rounded-lg p-2  ' >

                                                <div className='flex gap-2 items-center my-1'>
                                                    <figure>
                                                        <img src="/images/ashapurna-nanomax-ii-logo-1677494586.webp" className='w-[27px] h-[30px] ' alt="" />
                                                    </figure>
                                                    <Link className='font-semibold heading-color_bg-color '>Ashapurna Nanomax II</Link>
                                                </div>
                                                <div className='flex gap-2 items-center my-2 heading-color_bg-color'>
                                                    <FaLocationDot className='text-lg' />
                                                    <p className='text-sm heading-color_bg-color'>Jodhpur, Rajasthan 342015, India</p>
                                                </div>
                                                <div className='flex justify-between items-center my-1 heading-color_bg-color'>
                                                    <div>
                                                        <div className='flex items-center gap-2'>
                                                            <IoHome className='text-sm' />
                                                            <p className='text-sm font-normal heading-color_bg-color'>Few Units Left</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className='rounded-sm p-1 text-white border-1 text-sm bg-color '>See All</button>
                                                    </div>

                                                </div>



                                            </div>
                                            <div className='bg-[#FF5722] absolute top-[5%] rounded-sm text-white text-[12px] right-[2%] p-2'>
                                                <p>Few Units Left</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>





                </div>


            </section >
        </>
    )
}
