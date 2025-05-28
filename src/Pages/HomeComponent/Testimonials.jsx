import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
export default function Testimonials() {
    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <section className='max-w-full lg:py-12 pb-8 bg-color my-10' id='testimonials'>
                <div className='max-w-[1320px] lg:mx-auto mx-5 my-12 grid lg:grid-cols-[35%_65%] grid-cols-1 lg:gap-16'>

                    <div className='lg:py-12 py-6 heading'>
                        <div className='flex gap-3 items-center'>
                            <p className='text-[#be8553]'>OUR TESTIMONIALS</p>
                            <div className='border-[0.5px] border-[#be8553] w-[81px] h-0'></div>
                        </div>
                        <h2 className='capitalize font-semibold  lg:text-4xl text-2xl text-white lg:py-0 sm:py-0 py-2 leading-[1.2]'>What They're Saying About Ashapurna?</h2>
                        <p className='text-white  text-sm py-3 leading-6'>With 28+ years of experience, we have delivered quality projects that bring joy to our customers. Each testimonial reflects our commitment to excellence, transparency, and customer satisfaction. Join the Ashapurna family and experience a life built on trust and happiness.</p>

                        <button className='text-white py-3 px-12 rounded-sm font-normal hover:bg-transparent cursor-pointer border-1 border-transparent hover:border-[#be8553] lg:text-lg text-sm bg-[#be8553]'>See All</button>

                    </div>

                    <div className='' >
                        <Slider className='lg:my-5 testimonialsSlider' {...settings} >
                            <div>
                                <div className='relative mt-12 self-center' >
                                    <div className='w-full    bg-white  ' >

                                        <div className='  w-full p-3  '>
                                            <div className='  flex gap-3'>
                                                <figure>
                                                    <img src="/images/WhatsApp_Image_2025-02-08_at_17.49.41-1739353155.jpeg" className='lg:w-[187px] lg:h-[187px] w-[100px] h-[100px] rounded-[50%] object-fill border-7 border-[#be8553]' alt="" />
                                                </figure>
                                                <div className='self-center'>
                                                    <h5 className='font-semibold lg:text-xl text-base text-[#be8553]'>Mr Dinesh Bishnoi</h5>
                                                    <p className='font-semibold sub-heading-color lg:text-base text-sm'>Ashapurna Anmol</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='pb-12 px-10'>
                                            <p className='leading-6 text-[#314b58] font-normal lg:text-base text-sm'>The thoughtfully designed community, modern amenities, and exceptional craftsmanship truly impressed me. From the very first interaction to the final handover, the entire process was smooth and transparent. I am extremely happy with my decision and grateful to the team for their support. Thank you, Ashapurna Anmol, for providing me with my ideal home!</p>
                                        </div>
                                    </div>

                                    <div className='absolute bottom-[2%] right-[2%]'>
                                        <figure>
                                            <img src="/images/quotes.png" alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>



                            <div>
                                <div className='relative mt-12 self-center' >
                                    <div className='w-full bg-white  ' >

                                        <div className='  w-full p-3  '>
                                            <div className='  flex gap-3'>
                                                <figure>
                                                    <img src="/images/WhatsApp_Image_2025-02-08_at_18.20.38-1739352751.jpeg" className='lg:w-[187px] lg:h-[187px]   w-[100px] h-[100px] rounded-[50%] border-7 border-[#be8553]' alt="" />
                                                </figure>
                                                <div className='self-center'>
                                                    <h5 className='font-semibold lg:text-xl text-base text-[#be8553]'>Mrs Jyoti Sharma</h5>
                                                    <p className=' font-semibold sub-heading-color lg:text-base text-sm'>Ashapurna NRI</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='pb-12 px-10'>
                                            <p className='leading-6 text-[#314b58] font-normal lg:text-base text-sm'>The beautifully designed European-themed township and its peaceful surroundings exceeded my expectations. The team's professionalism and transparency instilled complete confidence in my choice. I am truly happy to call Ashapurna NRI my home. Thank you for making my dream come true!</p>
                                        </div>
                                    </div>

                                    <div className='absolute bottom-[2%] right-[2%]'>
                                        <figure>
                                            <img src="/images/quotes.png" alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div className='relative mt-12 self-center' >
                                    <div className='w-full    bg-white  ' >

                                        <div className='  w-full p-3  '>
                                            <div className='  flex gap-3'>
                                                <figure>
                                                    <img src="/images/WhatsApp_Image_2025-02-08_at_18.20.04-1739353783.jpeg" className='lg:w-[187px] lg:h-[187px]   w-[100px] h-[100px] rounded-[50%] border-7 border-[#be8553]' alt="" />
                                                </figure>
                                                <div className='self-center'>
                                                    <h5 className='font-semibold lg:text-xl text-base text-[#be8553]'>Col GR Choudhary</h5>
                                                    <p className=' font-semibold sub-heading-color lg:text-base text-sm'>Ashapurna MohanBagh</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='pb-18 px-10'>
                                            <p className='leading-6 text-[#314b58] font-normal lg:text-base text-sm'>Owning a home at Ashapurna MohanBagh has been a wonderful experience. Modern amenities and well-planned infrastructure create the perfect living environment. I couldn’t have asked for a better place to call home. Thank you, Ashapurna, for making my dream a reality!"</p>
                                        </div>
                                    </div>

                                    <div className='absolute bottom-[2%] right-[2%]'>
                                        <figure>
                                            <img src="/images/quotes.png" alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                        {/* <button className='text-white py-3 px-12 rounded-sm font-normal hover:bg-transparent cursor-pointer border-1 border-transparent hover:border-[#be8553] lg:text-lg text-sm bg-[#be8553]'>See All</button> */}
                    </div>
                </div>

            </section >
        </>
    )
}
