import React from 'react'

export default function OurAchievement() {
    return (
        <>
            <section className='max-w-full lg:my-24' id='ourAchivement'>
                <div className='max-w-[1320px] relative lg:mx-auto mx-2'>
                    <div className='w-full grid lg:grid-cols-2 sm:grid-cols-2'>
                        <div className=''>
                            <figure>
                                <img src="/images/floor-plan.jpg" className='mx-auto' alt="" />
                            </figure>
                        </div>

                    </div>
                    <div className='lg:w-[816px] sm:w-[487px] mx-2 lg:absolute sm:absolute lg:top-1/2 sm:top-[60%] -translate-y-1/2 lg:left-[37%] sm:left-[25%] border-r-10 border-b-10 border-[#be8553] bg-white p-4 shadow-lg h-auto'>
                        <h2 className='lg:text-4xl text-2xl text-[#062f43] font-semibold'>Our Achievement</h2>

                        <div className='text-sm text-justify text-[#5A5A5A] my-5'>
                            <p className='py-2'>“Indian Leadership Award for Infrastructure Development 2011” for Outstanding Contribution in the Field of Infrastructure Development to Shri Karan Singh Uchiyarda, Chairman & Managing Director, Ashapurna Buildcon by “Indian Economic Development & Research Association, New Delhi”</p>
                            <p className='py-2'>Dignitaries Present: Dr. Bhishma Narayan Singh, Former Governor, Tamil Nadu; Dr. GVG Krishnamoorti, Former Chief Election Commissioner, Government of India and Jogendra Singh, Former CBI Director</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
