import React from 'react'

export default function OurMissionVision() {
    return (
        <>
            <section className='max-w-full  '>
                <div className='max-w-full pt-24 lg:mt-12 pb-10 lg:pb-0 bg-[url(/images/whyashapurna-bg.webp)]'>
                    <div className='max-w-[1320px] lg:my-8  lg:mx-auto mx-2 grid lg:grid-cols-2  sm:grid-cols-2 gap-12'>
                        <div className='w-full p-3 lg:p-0 bg-white' >
                            <div className='grid lg:grid-cols-[222px_auto] gap-5' >
                                <div className='w-[222px] mx-auto' >
                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/ourvision.png" alt="" className='w-full ' />
                                </div>
                                <div className='w-full ' >
                                    <div className='my-3' >
                                        <div className='relative my-5'>
                                            <h2 className='text-xl text-[#32343b] font-semibold uppercase pb-1 '>Our Vision</h2>
                                            <div className='border-1 w-[20%] absolute bottom-0 border-[#32343b]'></div>
                                        </div>
                                        <p className='text-sm text-[#5A5A5A] leading-6 '>To be a leader and most preferred real estate name in Rajasthan by constantly striving hard to put innovation and futuristic perspective in every fine detail of designing and execution.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full p-3 lg:p-0 bg-white' >
                            <div className='grid lg:grid-cols-[222px_auto] gap-5' >
                                <div className='w-[222px] mx-auto' >
                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/ourmission.png" alt="" className='w-full' />
                                </div>
                                <div className='w-full' >
                                    <div className='my-3' >
                                        <div className='relative my-5'>
                                            <h2 className='text-xl text-[#32343b] font-semibold uppercase pb-1 '>Our Mission</h2>
                                            <div className='border-1 w-[20%] absolute bottom-0 border-[#32343b]'></div>
                                        </div>
                                        <p className='text-sm text-[#5A5A5A] leading-6  '>To offer quality and refined workmanship in both product and service plus maintain the highest level of professionalism while dealing with customers, employees and associates.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
