import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function WhyJodhpurBanner() {
    return (
        <>
            <section className='max-w-full '>
                <figure className='w-full relative'>
                    <img src="/images/team-banner.webp" className='lg:h-auto h-[270px] object-cover' alt="" />
                    <div className='absolute w-full top-1/2 left-[50%] -translate-y-1/2  -translate-x-1/2' id='aboutBannerContent'>
                        <p className=' lg:text-xl text-center uppercase text-white pb-2'><Link to={'/'}   >home</Link> / Why Invest In Jodhpur</p>
                        <p className='  text-[#be8553] lg:text-4xl text-xl text-center capitalize font-semibold'>Why Invest In Jodhpur</p>
                    </div>
                </figure>
            </section>
        </>
    )
}
