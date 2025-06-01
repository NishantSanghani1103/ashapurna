import React from 'react'
import CountUp from 'react-countup'

export default function AboutUsAbout() {
    return (
        <>
            <section className='max-w-full my-16' id='aboutAboutUs'>
                <div className='max-w-[1320px] lg:mx-auto mx-3'>
                    <div className='grid lg:grid-cols-2 lg:gap-11 sm:gap-5' id='aboutAboutUs-mid'>
                        <figure>
                            <img src="/images/ashapurna-buildcon-corporate-office-1707809920_(1)-1735817024.png" alt="" />
                        </figure>
                        <div className='w-full' id='aboutAbout-mid-content-heading'>
                            <div>
                                <div className='flex gap-3 items-center'>
                                    <p className='text-[#be8553]'>About Us</p>
                                    <div className='border-[0.5px] border-[#be8553] w-[81px] h-0'></div>
                                </div>
                                <h2 className='capitalize font-semibold lg:text-[35px] sm:text-[35px] text-[26px] lg:py-0 sm:py-0 py-2 leading-[1.2]'>Welcome to Ashapurna </h2>
                            </div>

                            <div className='lg:my-3 text-[#5A5A5A] text-justify text-sm leading-6' id='aboutAboutUs-mid-content'>
                                <p className='py-3'>Ashapurna Buildcon started its journey in 1996 as a private limited company and became a limited company after just one year. Ashapurna became the first ISO 9001:2000 certified company in western Rajasthan in 2004. The company’s first offering was a project of 400 villas/plots that came in 1997 and was completed within a record time of 18 months which eventually became a norm in many upcoming projects. In its 28+ years, Ashapurna Buildcon has 45+ projects and has delivered 40+ projects spanning 140+ Lakh square feet, housing more than 30000 smiling and satisfied faces.</p>

                                <p className='py-3'>Under the able leadership of Shri Karan Singh Uchiyarda, Ashapurna Buildcon has spread its wings across top residential projects in Jodhpur, hospitality, education, and entertainment domains, as well as commercial property in Jodhpur. Shri Karan Singh Uchiyarda gave ‘Comforts Residency Palace’, a renowned 3-star hotel, to Jodhpur, Hotel Ashapurna to Jaipur, and another 5-star resort-cum-hotel is coming up at Uchiyarda. In education, the company owns and runs an architecture institute named ‘Buddha Institute’ in Udaipur. In the past few years, Ashapurna Buildcon has proven itself to the Real Estate market of Rajasthan and conveyed itself as one of the Top 5 real estate companies in Rajasthan  In its quest to take the idea of lifestyle to the next level, Ashapurna Buildcon has launched premium budget homes that perfectly blend style and practicality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='max-w-full lg:my-12 my-5' id='aboutAboutUs-experience'>
                <div className='max-w-[1320px] py-12 bg-[url(/images/aboutmain-features-bg-new.png)] mx-auto'>
                    <div className='w-full  grid lg:grid-cols-4 sm:grid-cols-4 gap-5 grid-cols-2 '>
                        <div className='text-center mx-auto' >
                            <figure className='bg-white w-[80px] h-[80px] mx-auto mb-2 flex justify-center items-center'>
                                <img src="/images/experience-check.svg" className='w-[50px] h-[50px]' alt="" />
                            </figure>
                            <div className='flex justify-center items-center'>
                                <CountUp start={0} end={28} delay={0}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span className='text-[#be8553] text-2xl font-semibold' ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                                <span className='text-[#be8553]  text-2xl font-semibold'>+</span>
                            </div>
                            <p className='font-semibold py-2 text-white'>Years Of Experience</p>
                        </div>

                        <div className='text-center mx-auto'>
                            <figure className='bg-white w-[80px] h-[80px] mx-auto mb-2 flex justify-center items-center'>
                                <img src="/images/villas-completed.svg" className='w-[50px] h-[50px]' alt="" />
                            </figure>
                            <div className='flex justify-center items-center'>
                                <CountUp start={0} end={45} delay={0}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span className='text-[#be8553]  text-2xl font-semibold' ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                                <span className='text-[#be8553]  text-2xl font-semibold'>+</span>
                            </div>
                            <p className='font-semibold py-2 text-white'>Projects Completed</p>
                        </div>

                        <div className='text-center mx-auto' >
                            <figure className='bg-white w-[80px] h-[80px] mx-auto mb-2 flex justify-center items-center'>
                                <img src="/images/happy.svg" className='' alt="" />
                            </figure>
                            <div className='flex justify-center items-center'>
                                <CountUp start={0} end={30000} delay={0}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span className='text-[#be8553]  text-2xl font-semibold' ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                                <span className='text-[#be8553]  text-2xl font-semibold'>+</span>
                            </div>
                            <p className='py-2 text-white font-semibold '>Happy Families</p>
                        </div>



                        <div className='text-center mx-auto' >
                            <figure className='bg-white w-[80px] h-[80px] mx-auto mb-2 flex justify-center items-center'>
                                <img src="/images/units.svg" className='w-[50px] h-[50px]' alt="" />
                            </figure>
                            <div className='flex justify-center items-center'>
                                <CountUp start={0} end={13500} delay={0}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span className='text-[#be8553]  text-2xl font-semibold' ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                                <span className='text-[#be8553]  text-2xl font-semibold'>+</span>
                            </div>
                            <p className='py-2 text-white font-semibold'>Units</p>
                        </div>
                    </div>
               


                </div>
            </section>
        </>
    )
}
