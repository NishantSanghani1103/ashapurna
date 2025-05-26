import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { IoMdArrowDropdown } from "react-icons/io";
import { property } from '../Data/Property';
import { Link } from 'react-router-dom';
import ProjectOverview from './HomeComponent/ProjectOverview';
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


    let featuredProjects = {
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
                    slidesToShow: 1,
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
                            <div >
                                <figure className='lg:block sm:block hidden'>
                                    <img src="/images/awards_banner-min-1714394299.jpg" alt="" />
                                </figure>
                                <figure className='lg:hidden sm:hidden block'>
                                    <img src="/images/award_mobile_banner-min-1714394299.jpg" className='object-cover' alt="" />
                                </figure>
                            </div>
                        </div>
                        <div>
                            <div>
                                <figure className='lg:block sm:block hidden'>
                                    <img src="/images/WhatsApp_Image_2025-01-02_at_16.48.35_(1)-1735816827.jpeg" alt="" />
                                </figure>
                                <figure className='lg:hidden sm:hidden block'>
                                    <img src="/images/Heritage_mb_banner-1724664836.jpg" alt="" />
                                </figure>
                            </div>
                        </div>
                        <div>
                            <div>
                                <figure className='lg:block sm:block hidden'>
                                    <img src="/images/nri_web_banner_(1)-1724664784.jpg" alt="" />
                                </figure>
                                <figure className='lg:hidden sm:hidden block'>
                                    <img src="/images/WhatsApp_Image_2025-01-02_at_16.48.34_(1)-1735816827.jpeg" alt="" />
                                </figure>
                            </div>
                        </div>
                        <div>
                            <div>
                                <figure className='lg:block sm:block hidden'>
                                    <img src="/images/web_banner_heritage_3_(1)-1724664835.jpg" alt="" />
                                </figure>
                                <figure className='lg:hidden sm:hidden block'>
                                    <img src="/images/nri_mb_banner-1724664784.jpg" alt="" />
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

            <section className="max-w-full  my-5 bg-[url(/images/whyashapurna-bg.webp)] " id="why-choose">
                <div className='max-w-[1320px] w-full mx-auto p-2 grid gap-15 lg:grid-cols-[33%_auto] py-6    ' id='why-choose-mid'>
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

                <div className='lg:hidden sm:block block pb-[50px]' id='mob-whyChoose-Slider'>
                    <Slider {...whyChoose_slider} id="WhyChoose-Slider">
                        <div>
                            <div className='sm:mx-2 mx-2'>
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
                            <div className='sm:mx-2 mx-2'>
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
                            <div className='sm:mx-2 mx-2'>
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
                            <div className='mx-2 mx-2'>
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

            <section className='max-w-full bg-[#f4efeb] my-[100px] ' id='featured-projects'>
                <div className='max-w-[1320px] py-12 lg:mx-auto mx-2'>
                    <div className='heading'>
                        <div className='flex gap-3 items-center'>
                            <p className='text-[#be8553]'>OUR WORK</p>
                            <div className='border-[0.5px] border-[#be8553] w-[81px] h-0'></div>
                        </div>
                        <h2 className='capitalize font-semibold lg:text-[35px] sm:text-[35px] text-[26px] lg:py-0 sm:py-0 py-2 leading-[1.2]'>Featured Projects</h2>
                    </div>

                    <Slider className='my-5' {...featuredProjects} id="featured-projects">

                        <div>
                            <div>
                                <div className='grid lg:grid-cols-2  gap-5 featured-projects-images lg:mx-0'>
                                    <div className='w-full'>
                                        <figure>
                                            <img src="/images/Agri_park_web_banner-1738934278.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className='w-full featured-projects-content'>
                                        <div className='flex gap-2 items-center lg:text-3xl text-2xl font-medium text-[#062f43]' id='featured-projects-heading'>
                                            <figure>
                                                <img src="/images/Agri_Park_logo_blue_-1739013900.jpg" style={{ width: "55px" }} alt="" />
                                            </figure>
                                            <Link>Ashapurna Agri Park</Link>
                                        </div>
                                        <div className='lg:my-5 mx-3' id='featured-project-content'>
                                            <p className='line-clamp-4 text-[#062f43] text-sm'> The project offers plots spread across 400 Bighas, designed to accommodate diverse needs. Located directly opposite the Industrial Corridor, it ensures smooth transportation & efficient logistics. The development features robust infrastructure and essential utilities, providing an ideal environment to operate and grow. Strategically located, it offers easy access to key markets, making it a prime choice for investment.</p>
                                        </div>
                                        <div className='w-full my-5 grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-2 ' >
                                            <div className='flex gap-4  lg:justify-center sm:justify-center justify-start' >
                                                <div>
                                                    <figure>
                                                        <img src="/images/E-Land_Mangement_System-1738911472.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>E-land</h4>
                                                    <p className='text-[#062f43] text-sm py-1'>Mangement System</p>
                                                </div>
                                            </div>


                                            <div className='flex gap-4 lg:justify-center sm:justify-center justify-start' >
                                                <div>
                                                    <figure>
                                                        <img src="/images/Telecom_Network-1738911472.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>Telecom</h4>
                                                    <p className='text-[#062f43] text-sm py-1'>Network</p>
                                                </div>
                                            </div>

                                            <div className='flex gap-4 lg:justify-center sm:justify-center justify-start'>
                                                <div>
                                                    <figure>
                                                        <img src="/images/Gas_Pipeline-1738911472.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>gas</h4>
                                                    <p className='text-[#062f43] text-sm py-1'>Pipeline</p>
                                                </div>
                                            </div>
                                        </div>

                                        <button className='bg-[#be8553] text-white font-medium rounded-sm py-2 px-3'>See All</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div>
                                <div className='grid lg:grid-cols-2  gap-5 featured-projects-images lg:mx-0'>
                                    <div className='w-full'>
                                        <figure>
                                            <img src="/images/ashapurna-nri-home-page-image-1676441428.webp" alt="" />
                                        </figure>
                                    </div>
                                    <div className='w-full featured-projects-content'>
                                        <div className='flex gap-2 items-center lg:text-3xl text-2xl font-medium text-[#062f43]' id='featured-projects-heading'>
                                            <figure>
                                                <img src="/images/4db83251-b9ff-4db3-9e89-8a9f6a872165-1669179075.webp" style={{ width: "45px" }} alt="" />
                                            </figure>
                                            <Link>Ashapurna NRI</Link>
                                        </div>
                                        <div className='lg:my-5 mx-3' id='featured-project-content'>
                                            <p className='line-clamp-4 text-[#062f43] text-sm'> The project offers plots spread across 400 Bighas, designed to accommodate diverse needs. Located directly opposite the Industrial Corridor, it ensures smooth transportation & efficient logistics. The development features robust infrastructure and essential utilities, providing an ideal environment to operate and grow. Strategically located, it offers easy access to key markets, making it a prime choice for investment.</p>
                                        </div>
                                        <div className='w-full my-5 grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-2 ' >
                                            <div className='flex gap-4  lg:justify-start sm:justify-center justify-start' >
                                                <div>
                                                    <figure>
                                                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/920174ff-d936-40c9-9be9-bdec0f1df16f-1668411976.svg" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>Rera</h4>
                                                    <p className='text-[#062f43] text-sm py-1'>Approved</p>
                                                </div>
                                            </div>


                                            <div className='flex gap-4 lg:justify-start sm:justify-center justify-start' >
                                                <div>
                                                    <figure>
                                                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/15817f06-ef1a-459b-becc-0b68c0b42536-1668412016.svg" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>Area</h4>
                                                    <p className='text-[#062f43] text-sm py-1'>120+ Acres</p>
                                                </div>
                                            </div>

                                            <div className='flex gap-4 lg:justify-start sm:justify-center justify-start'>
                                                <div>
                                                    <figure>
                                                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/6e5c01b8-441c-432a-b37c-b78eed34e52b-1668412038.svg" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>Availability</h4>
                                                    <p className='text-[#062f43] text-sm py-1'>Residential Flats</p>
                                                </div>
                                            </div>
                                        </div>

                                        <button className='bg-[#be8553] text-white font-medium rounded-sm py-2 px-3'>See All</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div>
                                <div className='grid lg:grid-cols-2  gap-5 featured-projects-images lg:mx-0'>
                                    <div className='w-full'>
                                        <figure>
                                            <img src="/images/WhatsApp_Image_2025-01-02_at_16.48.35_(1)-1735816827.jpeg" alt="" />
                                        </figure>
                                    </div>
                                    <div className='w-full featured-projects-content'>
                                        <div className='flex gap-2 items-center lg:text-3xl text-2xl font-medium text-[#062f43]' id='featured-projects-heading'>
                                            <figure>
                                                <img src="/images/mb_logo_a-1699176365.jpg" style={{ width: "45px" }} alt="" />
                                            </figure>
                                            <Link>Ashapurna Mohan Bagh</Link>
                                        </div>
                                        <div className='lg:my-5 mx-3' id='featured-project-content'>
                                            <p className='line-clamp-4 text-[#062f43] text-sm'>Ashapurna Mohan Bagh is an exclusive opportunity to embrace the allure of Spain right here in Jodhpur. Inspired by the timeless elegance of Spanish architecture, these meticulously crafted homes offer a unique blend of luxury and cultural charm.</p>
                                        </div>
                                        <div className='w-full my-5 grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-2 ' >
                                            <div className='flex gap-4  lg:justify-start sm:justify-center justify-start' >
                                                <div>
                                                    <figure>
                                                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/13-1714653551.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>GYMNASIUM</h4>
                                                    <p className='text-[#062f43] text-sm py-1'>ACTIVITIES</p>
                                                </div>
                                            </div>


                                            <div className='flex gap-4 lg:justify-start sm:justify-center justify-start' >
                                                <div>
                                                    <figure>
                                                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/14-1714654030.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>Telecom</h4>
                                                    <p className='text-[#062f43] text-sm py-1'>Network</p>
                                                </div>
                                            </div>

                                            <div className='flex gap-4 lg:justify-center sm:justify-center justify-start'>
                                                <div>
                                                    <figure>
                                                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/14-1714654030.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>INDOOR AREA</h4>
                                                    <p className='text-[#062f43] text-sm py-1'>Pipeline</p>
                                                </div>
                                            </div>
                                        </div>

                                        <button className='bg-[#be8553] text-white font-medium rounded-sm py-2 px-3'>See All</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div>
                                <div className='grid lg:grid-cols-2  gap-5 featured-projects-images lg:mx-0'>
                                    <div className='w-full'>
                                        <figure>
                                            <img src="/images/Agri_park_web_banner-1738934278.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className='w-full featured-projects-content'>
                                        <div className='flex gap-2 items-center lg:text-3xl sm:text-3xl text-2xl font-medium text-[#062f43]' id='featured-projects-heading'>
                                            <figure>
                                                <img src="/images/Agri_Park_logo_blue_-1739013900.jpg" style={{ width: "55px" }} alt="" />
                                            </figure>
                                            <Link>Ashapurna Agri Park</Link>
                                        </div>
                                        <div className='lg:my-5 mx-3' id='featured-project-content'>
                                            <p className='line-clamp-4 text-[#062f43] text-sm'> The project offers plots spread across 400 Bighas, designed to accommodate diverse needs. Located directly opposite the Industrial Corridor, it ensures smooth transportation & efficient logistics. The development features robust infrastructure and essential utilities, providing an ideal environment to operate and grow. Strategically located, it offers easy access to key markets, making it a prime choice for investment.</p>
                                        </div>
                                        <div className='w-full my-5 grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-2 ' >
                                            <div className='flex gap-4  lg:justify-center sm:justify-center justify-start' >
                                                <div>
                                                    <figure>
                                                        <img src="/images/E-Land_Mangement_System-1738911472.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>E-land</h4>
                                                    <p className='text-[#062f43] text-sm py-1'>Mangement System</p>
                                                </div>
                                            </div>


                                            <div className='flex gap-4 lg:justify-center sm:justify-center justify-start' >
                                                <div>
                                                    <figure>
                                                        <img src="/images/Telecom_Network-1738911472.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>Telecom</h4>
                                                    <p className='text-[#062f43] text-sm py-1'>Network</p>
                                                </div>
                                            </div>

                                            <div className='flex gap-4 lg:justify-center sm:justify-center justify-start'>
                                                <div>
                                                    <figure>
                                                        <img src="/images/Gas_Pipeline-1738911472.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>gas</h4>
                                                    <p className='text-[#062f43] text-sm py-1'>Pipeline</p>
                                                </div>
                                            </div>
                                        </div>

                                        <button className='bg-[#be8553] text-white font-medium rounded-sm py-2 px-3'>See All</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div>
                            <div>
                                <div className='grid grid-cols-2  gap-5 featured-projects-images'>
                                    <div className='w-full'>
                                        <figure>
                                            <img src="/images/mb_web_banner__04-1732967971.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className='w-full featured-projects-content'>
                                        <div className='flex gap-2 items-center text-3xl font-medium text-[#062f43]' id='featured-projects-heading'>
                                            <figure>
                                                <img src="/images/mb_logo_a-1699176365.jpg" style={{ width: "55px" }} alt="" />
                                            </figure>
                                            <Link>Ashapurna Mohan Bagh</Link>
                                        </div>
                                        <div className='my-5' id='featured-project-content'>
                                            <p className='line-clamp-4 text-[#062f43] text-sm'> The project offers plots spread across 400 Bighas, designed to accommodate diverse needs. Located directly opposite the Industrial Corridor, it ensures smooth transportation & efficient logistics. The development features robust infrastructure and essential utilities, providing an ideal environment to operate and grow. Strategically located, it offers easy access to key markets, making it a prime choice for investment.</p>
                                        </div>
                                        <div className='w-full my-5 grid grid-cols-3 gap-5' >
                                            <div className='flex gap-4 justify-center'>
                                                <div>
                                                    <figure>
                                                        <img src="/images/E-Land_Mangement_System-1738911472.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>E-land</h4>
                                                   <p className='text-[#062f43] text-sm py-1'>Mangement System</p>
                                                </div>
                                            </div>


                                            <div className='flex gap-4 justify-center'>
                                                <div>
                                                    <figure>
                                                        <img src="/images/Telecom_Network-1738911472.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>Telecom</h4>
                                                   <p className='text-[#062f43] text-sm py-1'>Network</p>
                                                </div>
                                            </div>

                                            <div className='flex gap-4 justify-center'>
                                                <div>
                                                    <figure>
                                                        <img src="/images/Gas_Pipeline-1738911472.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>gas</h4>
                                                   <p className='text-[#062f43] text-sm py-1'>Pipeline</p>
                                                </div>
                                            </div>
                                        </div>

                                        <button className='bg-[#be8553] text-white font-medium rounded-sm py-2 px-3'>See All</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/*  <div>
                            <div>
                                <div className='grid grid-cols-2  gap-5 featured-projects-images'>
                                    <div className='w-full'>
                                        <figure>
                                            <img src="/images/ashapurna-nri-home-page-image-1676441428.webp" alt="" />
                                        </figure>
                                    </div>
                                    <div className='w-full featured-projects-content'>
                                        <div className='flex gap-2 items-center text-3xl font-medium text-[#062f43]' id='featured-projects-heading'>
                                            <figure>
                                                <img src="/images/4db83251-b9ff-4db3-9e89-8a9f6a872165-1669179075.webp" style={{ width: "55px" }} alt="" />
                                            </figure>
                                            <Link>Ashapurna NRI</Link>
                                        </div>
                                        <div className='my-5' id='featured-project-content'>
                                            <p className='line-clamp-4 text-[#062f43] text-sm'> The project offers plots spread across 400 Bighas, designed to accommodate diverse needs. Located directly opposite the Industrial Corridor, it ensures smooth transportation & efficient logistics. The development features robust infrastructure and essential utilities, providing an ideal environment to operate and grow. Strategically located, it offers easy access to key markets, making it a prime choice for investment.</p>
                                        </div>
                                        <div className='w-full my-5 grid grid-cols-3 gap-5' >
                                            <div className='flex gap-4 justify-center'>
                                                <div>
                                                    <figure>
                                                        <img src="/images/E-Land_Mangement_System-1738911472.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>E-land</h4>
                                                   <p className='text-[#062f43] text-sm py-1'>Mangement System</p>
                                                </div>
                                            </div>


                                            <div className='flex gap-4 justify-center'>
                                                <div>
                                                    <figure>
                                                        <img src="/images/Telecom_Network-1738911472.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>Telecom</h4>
                                                   <p className='text-[#062f43] text-sm py-1'>Network</p>
                                                </div>
                                            </div>

                                            <div className='flex gap-4 justify-center'>
                                                <div>
                                                    <figure>
                                                        <img src="/images/Gas_Pipeline-1738911472.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>gas</h4>
                                                   <p className='text-[#062f43] text-sm py-1'>Pipeline</p>
                                                </div>
                                            </div>
                                        </div>

                                        <button className='bg-[#be8553] text-white font-medium rounded-sm py-2 px-3'>See All</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div>
                                <div className='grid grid-cols-2  gap-5 featured-projects-images'>
                                    <div className='w-full'>
                                        <figure>
                                            <img src="/images/ashapurna-heritage-project-banner-1677493280 (1).webp" alt="" />
                                        </figure>
                                    </div>
                                    <div className='w-full featured-projects-content'>
                                        <div className='flex gap-2 items-center text-3xl font-medium text-[#062f43]' id='featured-projects-heading'>
                                            <figure>
                                                <img src="/images/ashapurna-heritage-logo-1677495446 (1).webp" style={{ width: "55px" }} alt="" />
                                            </figure>
                                            <Link>Ashapurna Heritage</Link>
                                        </div>
                                        <div className='my-5' id='featured-project-content'>
                                            <p className='line-clamp-4 text-[#062f43] text-sm'> The project offers plots spread across 400 Bighas, designed to accommodate diverse needs. Located directly opposite the Industrial Corridor, it ensures smooth transportation & efficient logistics. The development features robust infrastructure and essential utilities, providing an ideal environment to operate and grow. Strategically located, it offers easy access to key markets, making it a prime choice for investment.</p>
                                        </div>
                                        <div className='w-full my-5 grid grid-cols-3 gap-5' >
                                            <div className='flex gap-4 justify-center'>
                                                <div>
                                                    <figure>
                                                        <img src="/images/E-Land_Mangement_System-1738911472.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>E-land</h4>
                                                   <p className='text-[#062f43] text-sm py-1'>Mangement System</p>
                                                </div>
                                            </div>


                                            <div className='flex gap-4 justify-center'>
                                                <div>
                                                    <figure>
                                                        <img src="/images/Telecom_Network-1738911472.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>Telecom</h4>
                                                   <p className='text-[#062f43] text-sm py-1'>Network</p>
                                                </div>
                                            </div>

                                            <div className='flex gap-4 justify-center'>
                                                <div>
                                                    <figure>
                                                        <img src="/images/Gas_Pipeline-1738911472.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>gas</h4>
                                                   <p className='text-[#062f43] text-sm py-1'>Pipeline</p>
                                                </div>
                                            </div>
                                        </div>

                                        <button className='bg-[#be8553] text-white font-medium rounded-sm py-2 px-3'>See All</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div className='grid grid-cols-2  gap-5 featured-projects-images'>
                                  
                                    <div className='w-full featured-projects-content'>
                                        <div className='flex gap-2 items-center text-3xl font-medium text-[#062f43]' id='featured-projects-heading'>
                                            <figure>
                                                <img src="/images/ashapurna-heritage-logo-1677495446 (1).webp" style={{ width: "55px" }} alt="" />
                                            </figure>
                                            <Link>Ashapurna NRI vistara</Link>
                                        </div>
                                        <div className='my-5' id='featured-project-content'>
                                            <p className='line-clamp-4 text-[#062f43] text-sm'> The project offers plots spread across 400 Bighas, designed to accommodate diverse needs. Located directly opposite the Industrial Corridor, it ensures smooth transportation & efficient logistics. The development features robust infrastructure and essential utilities, providing an ideal environment to operate and grow. Strategically located, it offers easy access to key markets, making it a prime choice for investment.</p>
                                        </div>
                                        <div className='w-full my-5 grid grid-cols-3 gap-5' >
                                            <div className='flex gap-4 justify-center'>
                                                <div>
                                                    <figure>
                                                        <img src="/images/E-Land_Mangement_System-1738911472.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>E-land</h4>
                                                   <p className='text-[#062f43] text-sm py-1'>Mangement System</p>
                                                </div>
                                            </div>


                                            <div className='flex gap-4 justify-center'>
                                                <div>
                                                    <figure>
                                                        <img src="/images/Telecom_Network-1738911472.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>Telecom</h4>
                                                   <p className='text-[#062f43] text-sm py-1'>Network</p>
                                                </div>
                                            </div>

                                            <div className='flex gap-4 justify-center'>
                                                <div>
                                                    <figure>
                                                        <img src="/images/Gas_Pipeline-1738911472.png" className='w-[36px]' alt="" />
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h4 className='capitalize font-semibold text-[16px]  text-[#be8553]'>gas</h4>
                                                   <p className='text-[#062f43] text-sm py-1'>Pipeline</p>
                                                </div>
                                            </div>
                                        </div>

                                        <button className='bg-[#be8553] text-white font-medium rounded-sm py-2 px-3'>See All</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </Slider>
                </div>
            </section>

            <ProjectOverview />
        </>
    )
}
