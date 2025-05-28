import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
export default function MediaAndEvent() {
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
            <section className='max-w-full lg:py-12 pb-8  my-10'>
                <div className='max-w-[1320px] lg:mx-auto mx-5'>
                    <div className='w-full flex justify-between heading'>
                        <h2 className='font-semibold lg:text-4xl sm:text-4xl text-xl content-color'>Media and Event</h2>
                        <button className='lg:py-2 sm:py-2 py-1 px-3 lg:px-6 sm:px-6 cursor-pointer hover:text-[#062f43] hover:bg-transparent hover:border-1 hover:border-[#062f43] lg:text-base sm:text-base text-sm   bg-[#062f43] text-white rounded-sm'>See All</button>
                    </div>



                    <div className='w-full my-5'>
                        <Slider className='lg:my-10 mediaEventSlider' {...settings} >
                            <div >
                                <div className='mx-2'>
                                    <div className='bg-white shadow-lg p-2 rounded-lg'>
                                        <div>
                                            <figure>
                                                <img src="/images/NRI_EVENT_BANNER-1747054968.webp" className='mx-auto' alt="" />
                                            </figure>

                                        </div>

                                        <div className='p-3'>
                                            <h3 className='line-clamp-1  font-semibold hover:text-[#be8553] cursor-pointer'>Neev Staphana of Ashapura Maa Mandir & Phase 1 Handover | Ashapurna NRI</h3>

                                            <div className='my-2'>
                                                <p className='flex items-center gap-2 py-1'>
                                                    <FaLocationDot className='text-sm text-[#be8553]' />
                                                    <span className='text-sm sub-heading-color'>Ashapurna NRI</span>
                                                </p>

                                                <p className='flex items-center gap-2 py-1'>
                                                    <FaClock className='text-sm text-[#be8553]' />
                                                    <span className='text-sm sub-heading-color'>2025-05-03</span>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div>
                                <div className='mx-2'>
                                    <div className='bg-white shadow-lg p-2 rounded-lg'>
                                        <div>
                                            <figure>
                                                <img src="/images/Credai_event_banner-1747053530.webp" className='mx-auto' alt="" />
                                            </figure>

                                        </div>

                                        <div className='p-3'>
                                            <h3 className='line-clamp-1  font-semibold hover:text-[#be8553] cursor-pointer'>Neev Staphana of Ashapura Maa Mandir & Phase 1 Handover | Ashapurna NRI</h3>

                                            <div className='my-2'>
                                                <p className='flex items-center gap-2 py-1'>
                                                    <FaLocationDot className='text-sm text-[#be8553]' />
                                                    <span className='text-sm sub-heading-color'>Ashapurna NRI</span>
                                                </p>

                                                <p className='flex items-center gap-2 py-1'>
                                                    <FaClock className='text-sm text-[#be8553]' />
                                                    <span className='text-sm sub-heading-color'>2025-05-03</span>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div >
                                <div className='mx-2'>
                                    <div className='bg-white shadow-lg p-2 rounded-lg'>
                                        <div>
                                            <figure>
                                                <img src="/images/Basera_Stapanna_Banner-1739016338.jpg" className='mx-auto' alt="" />
                                            </figure>

                                        </div>

                                        <div className='p-3'>
                                            <h3 className='line-clamp-1  font-semibold hover:text-[#be8553] cursor-pointer'>Neev Staphana of Ashapura Maa Mandir & Phase 1 Handover | Ashapurna NRI</h3>

                                            <div className='my-2'>
                                                <p className='flex items-center gap-2 py-1'>
                                                    <FaLocationDot className='text-sm text-[#be8553]' />
                                                    <span className='text-sm sub-heading-color'>Ashapurna NRI</span>
                                                </p>

                                                <p className='flex items-center gap-2 py-1'>
                                                    <FaClock className='text-sm text-[#be8553]' />
                                                    <span className='text-sm sub-heading-color'>2025-05-03</span>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div >
                                <div className='mx-2'>
                                    <div className='bg-white shadow-lg p-2 rounded-lg'>
                                        <div>
                                            <figure>
                                                <img src="/images/Republic_day_banner-1739014715.jpg" className='mx-auto' alt="" />
                                            </figure>

                                        </div>

                                        <div className='p-3'>
                                            <h3 className='line-clamp-1  font-semibold hover:text-[#be8553] cursor-pointer'>Neev Staphana of Ashapura Maa Mandir & Phase 1 Handover | Ashapurna NRI</h3>

                                            <div className='my-2'>
                                                <p className='flex items-center gap-2 py-1'>
                                                    <FaLocationDot className='text-sm text-[#be8553]' />
                                                    <span className='text-sm sub-heading-color'>Ashapurna NRI</span>
                                                </p>

                                                <p className='flex items-center gap-2 py-1'>
                                                    <FaClock className='text-sm text-[#be8553]' />
                                                    <span className='text-sm sub-heading-color'>2025-05-03</span>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>




            </section>
        </>
    )
}
