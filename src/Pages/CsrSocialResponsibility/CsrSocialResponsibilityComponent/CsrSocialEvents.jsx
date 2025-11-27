import React from 'react'

export default function CsrSocialEvents() {
    return (
        <>
            <section className='max-w-full my-12' id='socialEvents'>
                <div className='max-w-[1320px] lg:mx-auto mx-2'>
                    <div id='socialEvents-heading' >
                        <div className='flex items-center gap-3'>
                            <h5 className='uppercase text-[#be8553]'>CSR</h5>
                            <div className='border border-[#be8553] w-12'></div>
                        </div>
                        <h2 className='lg:text-4xl text-2xl text-[#062f43] font-semibold'>Social Events</h2>
                        <div className='lg:text-[15px] text-sm text-justify  text-[#5a5a5a] my-3'>
                            <p className='leading-6'>
                                Shri Karan Singh Uchiyarda with his zeal and enthusiasm to work for social upliftment of poor people has established a trust named as ‘Shree Magmohan Charitable Trust’, with the association of Ashapurna Buildcon Ltd. works for the welfare of General public by organizing medical camps, social events like large scale marriage functions, Housing and other donations to poor and needy people, charitable activities etc.
                            </p>
                            <p className='leading-6 py-5'>
                                In Jan -2011 Many families suffered due to illicit liquor tragedy and No. of families ruined because death of young families members. Ashapurna Decided to help out some of poorest families and help them morally and monetary on 28 Aug 2011 in the presence of Honorable M.P (Pali) Sh. Badhri Ram Jakhar.
                            </p>
                        </div>
                    </div>

                    <div className='lg:my-12' id='socialEvents'>
                        <div id='socialEventsTitle'>
                            <h2 className='lg:text-4xl text-2xl text-center text-[#062f43] font-semibold'>Social Updates</h2>
                        </div>
                        <div className='max-w-full  lg:my-24 my-16 grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-5 sm:gap-14 gap-20' id='socialUpdatesItem'>
                            <div className='bg-[#f4efeb] rounded-md p-2'>
                                <div className='border p-2 overflow-hidden -mt-14  border-[#be8553] rounded-md'>
                                    <figure>
                                        <img className='rounded-md hover:scale-110 duration-300 ' src="/images/blanket_distribution.jpg " alt="" />
                                    </figure>
                                </div>
                                <div className=' py-5 px-2' id='content'>
                                    <h4 className='text-xl text-[#32343B] font-semibold'>Blanket Distribution</h4>
                                    <h5 className='text-[#be8553] py-1 text-[15px] font-medium'>#By Director of Ashapurna</h5>
                                    <p className='py-3 text-sm leading-[26px] text-[#5a5a5a] line-clamp-2 '>On 21st december 2021, Ashapurna group director Shri Harshwardhan Singh distributed blankets and food to the needy people of society.</p>
                                </div>
                                <div className='mb-5 '>
                                    <button className='capitalize bg-[#be8553] text-white py-2 px-5 rounded-sm cursor-pointer hover:bg-transparent border-[#be8553] border hover:text-[#be8553]'>read more</button>
                                </div>
                            </div>

                            <div className='bg-[#f4efeb] rounded-md p-2'>
                                <div className='border p-2 overflow-hidden -mt-14  border-[#be8553] rounded-md'>
                                    <figure>
                                        <img className='rounded-md hover:scale-110 duration-300 ' src="/images/food_distribution.jpg " alt="" />
                                    </figure>
                                </div>
                                <div className=' py-5 px-2' id='content'>
                                    <h4 className='text-xl text-[#32343B] font-semibold'>Blanket And Food Distribution</h4>
                                    <h5 className='text-[#be8553] py-1 text-[15px] font-medium'>#Ashapurna Apna Ghar</h5>
                                    <p className='py-3 text-sm leading-[26px] text-[#5a5a5a] line-clamp-2 '>To include the less priviliged people as part of the 25th anniversary celebration, Ashapurna distributed blankets and food in Apna Ghar Aashram on 19th December 2021.</p>
                                </div>
                                <div className='mb-5 '>
                                    <button className='capitalize bg-[#be8553] text-white py-2 px-5 rounded-sm cursor-pointer hover:bg-transparent border-[#be8553] border hover:text-[#be8553]'>read more</button>
                                </div>
                            </div>

                            <div className='bg-[#f4efeb] rounded-md p-2'>
                                <div className='border p-2 overflow-hidden -mt-14  border-[#be8553] rounded-md'>
                                    <figure>
                                        <img className='rounded-md hover:scale-110 duration-300 ' src="/images/housing_problem_seminar.webp " alt="" />
                                    </figure>
                                </div>
                                <div className=' py-5 px-2' id='content'>
                                    <h4 className='text-xl text-[#32343B] font-semibold'>Seminar On Housing Problems</h4>
                                    <h5 className='text-[#be8553] py-1 text-[15px] font-medium'>#Samajik Sarokar of Ashapurna</h5>
                                    <p className='py-3 text-sm leading-[26px] text-[#5a5a5a] line-clamp-2 '>Addressing the housing problem issues, Ashapurna Group organised a seminar on housing problems. Various issues on the subject have been discussed at great length during the event.</p>
                                </div>
                                <div className='mb-5 '>
                                    <button className='capitalize bg-[#be8553] text-white py-2 px-5 rounded-sm cursor-pointer hover:bg-transparent border-[#be8553] border hover:text-[#be8553]'>read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
