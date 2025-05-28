import React from 'react'
import CountUp from 'react-countup'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function About() {


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
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <>
            <section className='max-w-full lg:my-24' id='about'>
                <div className='max-w-[1320px] lg:mx-auto mx-2'>
                    <div className='w-full relative lg:grid lg:grid-cols-[43%_auto] gap-7'>
                        <div id='aboutImge' className='lg:block hidden' >
                            <figure>
                                <img src="/images/aboutus.webp" alt="" />
                            </figure>
                        </div>
                        <div className='mt-12' id='aboutContent'>
                            <div className='flex gap-3 items-center'>
                                <p className='text-[#be8553]'>ABOUT US</p>
                                <div className='border-[0.5px] border-[#be8553] w-[81px] h-0'></div>
                            </div>
                            <div>
                                <h2 className='capitalize font-semibold lg:text-[35px] sm:text-[35px] text-[26px] lg:py-0 sm:py-0 py-2 leading-[1.2]'>Welcome to Ashapurna</h2>
                                <p className='text-[#5A5A5A] text-sm py-3 leading-6 text-justify'>Ashapurna Buildcon started its journey in 1996 as a private limited company and within a year the company gained many core values and turned into a limited company.</p>

                                <p className='text-[#5A5A5A] text-sm py-3 leading-6 text-justify'>In a relatively short period, Ashapurna has grown and gained a trustworthy real estate name in the entire Rajasthan. The company always tried hard to deliver everything best to its customers and built all their categories, Mix segments, and affordable homes.</p>
                            </div>

                            <div className='bg-[#f4efeb]  p-5 w-[990px]  left-[30%]  lg:absolute lg:block hidden'>
                                <div className='w-full flex justify-between '>
                                    <div className='text-center mx-auto' >
                                        <figure className='bg-white w-[80px] h-[80px] mx-auto mb-2 flex justify-center items-center'>
                                            <img src="/images/experience-check.png" className='w-[50px] h-[50px]' alt="" />
                                        </figure>
                                        <div className='flex justify-center items-center'>
                                            <CountUp start={0} end={28} delay={0}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span className='text-[#062f43] text-2xl font-semibold' ref={countUpRef} />
                                                    </div>
                                                )}
                                            </CountUp>
                                            <span className='text-[#062f43] text-2xl font-semibold'>+</span>
                                        </div>
                                        <p className='text-sm py-2 text-[#5A5A5A]'>Years Of Experience</p>
                                    </div>

                                    <div className='text-center mx-auto'>
                                        <figure className='bg-white w-[80px] h-[80px] mx-auto mb-2 flex justify-center items-center'>
                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/property.svg" className='w-[50px] h-[50px]' alt="" />
                                        </figure>
                                        <div className='flex justify-center items-center'>
                                            <CountUp start={0} end={45} delay={0}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span className='text-[#062f43] text-2xl font-semibold' ref={countUpRef} />
                                                    </div>
                                                )}
                                            </CountUp>
                                            <span className='text-[#062f43] text-2xl font-semibold'>+</span>
                                        </div>
                                        <p className='text-sm py-2 text-[#5A5A5A]'>Projects</p>
                                    </div>

                                    <div className='text-center mx-auto' >
                                        <figure className='bg-white w-[80px] h-[80px] mx-auto mb-2 flex justify-center items-center'>
                                            <img src="/images/happy.png" className='' alt="" />
                                        </figure>
                                        <div className='flex justify-center items-center'>
                                            <CountUp start={0} end={30000} delay={0}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span className='text-[#062f43] text-2xl font-semibold' ref={countUpRef} />
                                                    </div>
                                                )}
                                            </CountUp>
                                            <span className='text-[#062f43] text-2xl font-semibold'>+</span>
                                        </div>
                                        <p className='text-sm py-2 text-[#5A5A5A]'>Happy Families</p>
                                    </div>

                                    <div className='text-center mx-auto'>
                                        <figure className='bg-white w-[80px] h-[80px] mx-auto mb-2 flex justify-center items-center'>
                                            <img src="/images/measuring-tape.png" className='w-[50px] h-[50px]' alt="" />
                                        </figure>
                                        <div className='flex justify-center items-center'>
                                            <CountUp start={0} end={140} delay={0}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span className='text-[#062f43] text-2xl font-semibold' ref={countUpRef} />
                                                    </div>
                                                )}
                                            </CountUp>
                                            <span className='text-[#062f43] text-2xl font-semibold'>+</span>
                                        </div>
                                        <p className='text-sm py-2 text-[#5A5A5A]'>Lakh Sq.Ft Delivered    </p>
                                    </div>

                                    <div className='text-center mx-auto' >
                                        <figure className='bg-white w-[80px] h-[80px] mx-auto mb-2 flex justify-center items-center'>
                                            <img src="/images/units.png" className='w-[50px] h-[50px]' alt="" />
                                        </figure>
                                        <div className='flex justify-center items-center'>
                                            <CountUp start={0} end={13500} delay={0}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span className='text-[#062f43] text-2xl font-semibold' ref={countUpRef} />
                                                    </div>
                                                )}
                                            </CountUp>
                                            <span className='text-[#062f43] text-2xl font-semibold'>+</span>
                                        </div>
                                        <p className='text-sm py-2 text-[#5A5A5A]'>Units</p>
                                    </div>
                                </div>
                            </div>

                            <div className='lg:hidden block pb-5'>
                                <Slider className='my-5 homeAboutSlider' {...settings}>
                                    <div>
                                        <div className='mx-2'>
                                            <div className='text-center mx-auto' >
                                                <figure className='bg-white w-[80px] h-[80px] mx-auto mb-2 flex justify-center items-center'>
                                                    <img src="/images/experience-check.png" className='w-[50px] h-[50px]' alt="" />
                                                </figure>
                                                <div className='flex justify-center items-center'>
                                                    <CountUp start={0} end={28} delay={0}>
                                                        {({ countUpRef }) => (
                                                            <div>
                                                                <span className='text-[#062f43] text-2xl font-semibold' ref={countUpRef} />
                                                            </div>
                                                        )}
                                                    </CountUp>
                                                    <span className='text-[#062f43] text-2xl font-semibold'>+</span>
                                                </div>
                                                <p className='text-sm py-2 text-[#5A5A5A]'>Years Of Experience</p>
                                            </div>

                                        </div>
                                    </div>


                                    <div>
                                        <div className='mx-2'>
                                            <div className='text-center mx-auto'>
                                                <figure className='bg-white w-[80px] h-[80px] mx-auto mb-2 flex justify-center items-center'>
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/property.svg" className='w-[50px] h-[50px]' alt="" />
                                                </figure>
                                                <div className='flex justify-center items-center'>
                                                    <CountUp start={0} end={45} delay={0}>
                                                        {({ countUpRef }) => (
                                                            <div>
                                                                <span className='text-[#062f43] text-2xl font-semibold' ref={countUpRef} />
                                                            </div>
                                                        )}
                                                    </CountUp>
                                                    <span className='text-[#062f43] text-2xl font-semibold'>+</span>
                                                </div>
                                                <p className='text-sm py-2 text-[#5A5A5A]'>Projects</p>
                                            </div>

                                        </div>
                                    </div>


                                    <div>
                                        <div className='mx-2'>
                                            <div className='text-center mx-auto' >
                                                <figure className='bg-white w-[80px] h-[80px] mx-auto mb-2 flex justify-center items-center'>
                                                    <img src="/images/happy.png" className='' alt="" />
                                                </figure>
                                                <div className='flex justify-center items-center'>
                                                    <CountUp start={0} end={30000} delay={0}>
                                                        {({ countUpRef }) => (
                                                            <div>
                                                                <span className='text-[#062f43] text-2xl font-semibold' ref={countUpRef} />
                                                            </div>
                                                        )}
                                                    </CountUp>
                                                    <span className='text-[#062f43] text-2xl font-semibold'>+</span>
                                                </div>
                                                <p className='text-sm py-2 text-[#5A5A5A]'>Happy Families</p>
                                            </div>

                                        </div>
                                    </div>


                                    <div>
                                        <div className='mx-2'>
                                            <div className='text-center mx-auto'>
                                                <figure className='bg-white w-[80px] h-[80px] mx-auto mb-2 flex justify-center items-center'>
                                                    <img src="/images/measuring-tape.png" className='w-[50px] h-[50px]' alt="" />
                                                </figure>
                                                <div className='flex justify-center items-center'>
                                                    <CountUp start={0} end={140} delay={0}>
                                                        {({ countUpRef }) => (
                                                            <div>
                                                                <span className='text-[#062f43] text-2xl font-semibold' ref={countUpRef} />
                                                            </div>
                                                        )}
                                                    </CountUp>
                                                    <span className='text-[#062f43] text-2xl font-semibold'>+</span>
                                                </div>
                                                <p className='text-sm py-2 text-[#5A5A5A]'>Lakh Sq.Ft Delivered    </p>
                                            </div>

                                        </div>
                                    </div>


                                    <div>
                                        <div className='mx-2'>
                                            <div className='text-center mx-auto' >
                                                <figure className='bg-white w-[80px] h-[80px] mx-auto mb-2 flex justify-center items-center'>
                                                    <img src="/images/units.png" className='w-[50px] h-[50px]' alt="" />
                                                </figure>
                                                <div className='flex justify-center items-center'>
                                                    <CountUp start={0} end={13500} delay={0}>
                                                        {({ countUpRef }) => (
                                                            <div>
                                                                <span className='text-[#062f43] text-2xl font-semibold' ref={countUpRef} />
                                                            </div>
                                                        )}
                                                    </CountUp>
                                                    <span className='text-[#062f43] text-2xl font-semibold'>+</span>
                                                </div>
                                                <p className='text-sm py-2 text-[#5A5A5A]'>Units</p>
                                            </div>

                                        </div>
                                    </div>
                                </Slider>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
