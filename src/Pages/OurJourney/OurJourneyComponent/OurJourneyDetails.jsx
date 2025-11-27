import React from 'react'

export default function OurJourneyDetails() {
    return (
        <>
            <section className='max-w-full lg:my-16 ' id='ourJourneyDetails'>
                <div className='max-w-[1320px] relative  mx-auto '>
                    <div className='grid lg:grid-cols-[55%_auto] '>
                        <figure>
                            <img className='w-full' src="/images/floor-plan.jpg" alt="" />
                        </figure>

                    </div>
                    <div className='lg:w-[816px] max-w-full lg:absolute sm:absolute static  lg:mx-0 mx-2  top-[30%] lg:top-1/2 sm:top-[10%]  lg:-translate-y-1/2 lg:left-[37%] sm:left-[40%] left-0    border-b-10 border-[#be8553] bg-white p-4 shadow-lg h-auto'>
                        <div className='flex items-center gap-3'>
                            <h5 className='uppercase text-[#be8553]'>our journey</h5>
                            <div className='border border-[#be8553] w-12'></div>
                        </div>
                        <h2 className='lg:text-4xl text-2xl text-[#062f43] font-semibold'>A Brief About Our Journey</h2>

                        <div className='text-sm text-justify text-[#5A5A5A] lg:my-5'>

                            <p className='py-2'>Ashapurna started its journey in 1996 and registered as a Private Limited Company. After a year it turned into a Limited Company. We are proud that Ashapurna Buildcon Ltd. became the first ISO: 9001: 2000 Certified Company of western Rajasthan in the year 2004. Ashapurna Started its first project of 400 Villas / Plot in 1997 and completed it within the record time period of 18 months.</p>
                            <p className='py-2'>Then in a series every project that was started, was completed within an 18-month period. Till now a total of 49+ projects consisting of around 6000 Villas, and around 13,500 Plots in various Residential townships / Commercial malls / Residential Multistoried complexes have already been completed and handed over to the respective customers. Shri Karan Singh Unchiyarda is also a recognized person in the hospitality sector as a renowned hotelier. The prestigious three-star comforts Residency Palace Hotel is a unique landmark in the city of Jodhpur.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
