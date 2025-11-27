import React from 'react'
import CountUp from 'react-countup'

export default function OurJourneyExperience() {
    return (
        <>
            <section className='max-w-full lg:my-12 my-5 lg:mx-0 sm:mx-2 mx-2 ' id='experience'>
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
