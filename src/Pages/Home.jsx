import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { IoMdArrowDropdown } from "react-icons/io";
import { property } from '../Data/Property';
export default function Home() {

    let [propertyDefaultName, setpropertyDefaultName] = useState("Select Property")

    let [selectProperty, setselectProperty] = useState(false)

    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    let whyChoose_slider = {
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

    let formHandle = (event) => {
        event.preventDefault();
    }

    return (
        <>

            <section className='max-w-full bg-white' id='banner'>
                <div className='max-w-[1320px] mx-auto'>
                    <Slider {...settings} id="homeSlider">
                        <div>
                            <div>
                                <figure>
                                    <img src="/images/awards_banner-min-1714394299.jpg" alt="" />
                                </figure>
                            </div>
                        </div>
                        <div>
                            <div>
                                <figure>
                                    <img src="/images/WhatsApp_Image_2025-01-02_at_16.48.35_(1)-1735816827.jpeg" alt="" />
                                </figure>
                            </div>
                        </div>
                        <div>
                            <div>
                                <figure>
                                    <img src="/images/nri_web_banner_(1)-1724664784.jpg" alt="" />
                                </figure>
                            </div>
                        </div>
                        <div>
                            <div>
                                <figure>
                                    <img src="/images/web_banner_heritage_3_(1)-1724664835.jpg" alt="" />
                                </figure>
                            </div>
                        </div>
                    </Slider>

                    <div className='my-3 w-full shadow-lg border-b-5  border-[#be8553] lg:block sm:hidden hidden'>
                        <form action="" onSubmit={formHandle} className='p-3 grid grid-cols-6  gap-5' id='banner-form'>
                            <input type="text" className='border-1 p-5 rounded-sm  border-gray-400' placeholder='Name' />
                            <input type="email" className='border-1 p-5 rounded-sm  border-gray-400' placeholder='Email' />
                            <input type="tel" className='border-1 p-5 rounded-sm  border-gray-400' placeholder='Phone' />
                            <button className='border-1 px-2  rounded-sm relative border-gray-400 flex  gap-5 cursor-pointer items-center' onClick={() => setselectProperty(!selectProperty)}>{propertyDefaultName}
                                <IoMdArrowDropdown className='text-3xl text-[#be8553]' />
                                <div className={`shadow-2xl bg-white border-1 rounded-md left-0 w-[150%] top-[100%] h-[400px] absolute z-30 overflow-y-scroll ${selectProperty ? '' : 'hidden'}`} id='property-items'>
                                    <ul>
                                        <li>
                                            {
                                                property.map((value, index) => {
                                                    let { id, title } = value
                                                    return (
                                                        <li className='w-full flex  p-2 pb-2 capitalize  hover:bg-blue-600 hover:text-white' onClick={() => {
                                                            setselectProperty(false)
                                                            setpropertyDefaultName(title)
                                                        }}>
                                                            {title}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </li>
                                    </ul>

                                </div>
                            </button>
                            <input type="text" className='border-1 p-5 rounded-sm  border-gray-400' placeholder='Explain Your Query' />
                            <button className='bg-[#be8553] text-white p-5 w-[150px] rounded-sm'>Submit</button>

                        </form>
                    </div>
                </div>
            </section>

            <section className="max-w-full relative my-5 " id="why-choose">
                <figure>
                    <img src="/images/whyashapurna-bg.webp" className='w-full lg:h-auto h-[700px] object-cover' alt="" />
                </figure>
                <div className='max-w-[1320px] w-full mx-auto p-2 grid gap-15 lg:grid-cols-[33%_auto] py-6 absolute top-[5%] left-1/2 -translate-x-1/2 ' id='why-choose-mid'>

                    <div className='self-center' id='why-choose-mid-content'>
                        <p className='text-[#be8553]'>WHY US</p>
                        <h2 className='capitalize font-semibold lg:text-[35px] sm:text-[35px] text-[26px] lg:py-0 sm:py-0 py-2 leading-[1.2]'>Why Ashapurna Is The Best Choice?</h2>
                        <p className=' text-[#5a5a5a] text-[14px] leading-[26px]'>We are the leading Real Estate Builder and Developers in Jaipur, Jodhpur & Rajasthan, offering an unparalleled property development experience with a proven track record of excellence and a commitment to customer satisfaction, For those who are seeking quality, affordability, and reliability we are the best choice whether you're looking for a Dream Home or a thriving commercial space, Ashapurna Buildcon has the expertise, resources, and dedication to make your dream into a reality.</p>
                    </div>
                    <div className='w-full lg:grid grid-cols-2 gap-5 lg:block lg:opacity-100 sm:opacity-0 opacity-0 sm:hidden hidden' id='why-choose-mid-items'>
                        <div className='bg-white hover:bg-[#32343b] duration-250 group hover:cursor-pointer hover:text-white shadow-md border-b-5 rounded-t-md border-[#be8553]'>
                            <div className='p-7 relative' id='why-choose-mid-items-content '>
                                <figure>
                                    <img src="/images/356b3cc2-741e-4c46-920d-7b0ab40eb1df-1669190319.svg" width={60} alt="" />
                                </figure>
                                <h3 className='py-4 font-[600] text-2xl'>Property Care Service</h3>
                                <div className=' border-1 w-[110px] border-[#be8553] border-div'></div>
                                <p className='py-2 leading-[28px] line-clamp-2 text-sm text-gray-600 group-hover:text-white '>We take care of your home like a true custodian. Our support team is usually there that will help <br />you with everything and complete your needs.</p>
                                <p className='text-[#be8553]'>Read More</p>

                                <div className='bg-gray-200 w-[25px] h-[80px] group-hover:bg-black absolute top-10 right-0 '></div>

                            </div>
                        </div>
                        <div className='bg-white shadow-md border-b-5 rounded-t-md border-[#be8553] hover:bg-[#32343b] duration-250 group hover:cursor-pointer hover:text-white '>
                            <div className='p-7 relative' id='why-choose-mid-items-content '>
                                <figure>
                                    <img src="/images/81a99801-36a5-47ea-b817-151c75ed88a8-1669190370.svg" width={60} alt="" />
                                </figure>
                                <h3 className='py-4 font-[600] text-2xl'>Transparent Dealing</h3>
                                <div className=' border-1 w-[110px] border-[#be8553] border-div'></div>
                                <p className='py-2 leading-[28px] line-clamp-2 text-sm text-gray-600 group-hover:text-white  '>We practice all transparency of the highest order to deal with our customers to achieve different goals. That’s why our customers trust us.</p>
                                <p className='text-[#be8553]'>Read More</p>

                                <div className='bg-gray-200 w-[25px] h-[80px] absolute top-10 right-0 group-hover:bg-black '></div>

                            </div>
                        </div>
                        <div className='bg-white shadow-md border-b-5 rounded-t-md border-[#be8553] hover:bg-[#32343b] duration-250 group hover:cursor-pointer hover:text-white group'>
                            <div className='p-7 relative' id='why-choose-mid-items-content '>
                                <figure>
                                    <img src="/images/0e4e1cb5-d8a1-4563-aae9-06ed141ea957-1669190411.svg" width={60} alt="" />
                                </figure>
                                <h3 className='py-4 font-[600] text-2xl'>Hospitality</h3>
                                <div className=' border-1 w-[110px] border-[#be8553] border-div'></div>
                                <p className='py-2 leading-[28px] line-clamp-2 text-sm text-gray-600 group-hover:text-white '>A warm welcome to our valuable customers is what we take on as the supreme priority.</p>
                                <p className='text-[#be8553]'>Read More</p>

                                <div className='bg-gray-200 w-[25px] h-[80px] absolute top-10 right-0 group-hover:bg-black'></div>

                            </div>
                        </div>
                        <div className='bg-white shadow-md border-b-5 rounded-t-md border-[#be8553] hover:bg-[#32343b] duration-250 group hover:cursor-pointer hover:text-white group'>
                            <div className='p-7 relative' id='why-choose-mid-items-content '>
                                <figure>
                                    <img src="/images/da0c8c7a-33fd-4ef3-b7dc-d402fbe3a19b-1669190444.svg" width={60} alt="" />
                                </figure>
                                <h3 className='py-4 font-[600] text-2xl'>Sustainable Homes</h3>
                                <div className=' border-1 w-[110px] border-[#be8553] border-div'></div>
                                <p className='py-2 leading-[28px] line-clamp-2 text-sm text-gray-600 group-hover:text-white '>In the present world, Our Aim is to deliver environmental - friendly homes in the city for you & your Upcoming Generation to Cherish for the lifetime.</p>
                                <p className='text-[#be8553]'>Read More</p>

                                <div className='bg-gray-200 w-[25px] h-[80px] absolute top-10 right-0 group-hover:bg-black'></div>

                            </div>
                        </div>
                    </div>


                </div>

                <div className='lg:hidden sm:block block' id='mob-whyChoose-Slider'>
                    <Slider {...whyChoose_slider} id="WhyChoose-Slider">
                        <div>
                            <div>
                                <div className='bg-white hover:bg-[#32343b] duration-250 group hover:cursor-pointer hover:text-white shadow-md border-b-5 rounded-t-md border-[#be8553]'>
                                    <div className='p-7 relative' id='why-choose-mid-items-content '>
                                        <figure>
                                            <img src="/images/356b3cc2-741e-4c46-920d-7b0ab40eb1df-1669190319.svg" className='w-[60px] h-[50px]' width={60} height={50} alt="" />
                                        </figure>
                                        <h3 className='py-4 font-[600] lg:text-2xl sm:text-xl text-xl'>Property Care Service</h3>
                                        <div className=' border-1 w-[110px] border-[#be8553] border-div'></div>
                                        <p className='py-2 leading-[28px] line-clamp-2 text-sm text-gray-600 group-hover:text-white '>We take care of your home like a true custodian. Our support team is usually there that will help <br />you with everything and complete your needs.</p>
                                        <p className='text-[#be8553]'>Read More</p>

                                        <div className='bg-gray-200 w-[25px] h-[80px] group-hover:bg-black absolute top-10 right-0 '></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className='bg-white shadow-md border-b-5 rounded-t-md border-[#be8553] hover:bg-[#32343b] duration-250 group hover:cursor-pointer hover:text-white '>
                                    <div className='p-7 relative' id='why-choose-mid-items-content '>
                                        <figure>
                                            <img src="/images/81a99801-36a5-47ea-b817-151c75ed88a8-1669190370.svg" className='w-[60px] h-[50px]' width={60} height={50} alt="" />
                                        </figure>
                                        <h3 className='py-4 font-[600] lg:text-2xl sm:text-xl text-xl'>Transparent Dealing</h3>
                                        <div className=' border-1 w-[110px] border-[#be8553] border-div'></div>
                                        <p className='py-2 leading-[28px] line-clamp-2 text-sm text-gray-600 group-hover:text-white  '>We practice all transparency of the highest order to deal with our customers to achieve different goals. That’s why our customers trust us.</p>
                                        <p className='text-[#be8553]'>Read More</p>

                                        <div className='bg-gray-200 w-[25px] h-[80px] absolute top-10 right-0 group-hover:bg-black '></div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div className='bg-white shadow-md border-b-5 rounded-t-md border-[#be8553] hover:bg-[#32343b] duration-250 group hover:cursor-pointer hover:text-white group'>
                                    <div className='p-7 relative' id='why-choose-mid-items-content '>
                                        <figure>
                                            <img src="/images/0e4e1cb5-d8a1-4563-aae9-06ed141ea957-1669190411.svg" className='w-[60px] h-[50px]' width={60} height={50} alt="" />
                                        </figure>
                                        <h3 className='py-4 font-[600] lg:text-2xl sm:text-xl text-xl'>Hospitality</h3>
                                        <div className=' border-1 w-[110px] border-[#be8553] border-div'></div>
                                        <p className='py-2 leading-[28px] line-clamp-2 text-sm text-gray-600 group-hover:text-white '>A warm welcome to our valuable customers is what we take on as the supreme priority.</p>
                                        <p className='text-[#be8553]'>Read More</p>

                                        <div className='bg-gray-200 w-[25px] h-[80px] absolute top-10 right-0 group-hover:bg-black'></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className='bg-white shadow-md border-b-5 rounded-t-md border-[#be8553] hover:bg-[#32343b] duration-250 group hover:cursor-pointer hover:text-white group'>
                                    <div className='p-7 relative' id='why-choose-mid-items-content '>
                                        <figure>
                                            <img src="/images/da0c8c7a-33fd-4ef3-b7dc-d402fbe3a19b-1669190444.svg " className='w-[60px] h-[50px]' width={60} height={50} alt="" />
                                        </figure>
                                        <h3 className='py-4 font-[600] lg:text-2xl sm:text-xl text-xl'>Sustainable Homes</h3>
                                        <div className=' border-1 w-[110px] border-[#be8553] border-div'></div>
                                        <p className='py-2 leading-[28px] line-clamp-2 text-sm text-gray-600 group-hover:text-white '>In the present world, Our Aim is to deliver environmental - friendly homes in the city for you & your Upcoming Generation to Cherish for the lifetime.</p>
                                        <p className='text-[#be8553]'>Read More</p>

                                        <div className='bg-gray-200 w-[25px] h-[80px] absolute top-10 right-0 group-hover:bg-black'></div>

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
