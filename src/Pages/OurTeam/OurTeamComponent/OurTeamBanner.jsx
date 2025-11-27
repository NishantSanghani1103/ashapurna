import React from 'react'

export default function OurTeamBanner() {
    return (
        <section className='max-w-full '>
            <figure className='w-full relative'>
                <img src="/images/team-banner.webp" className='lg:h-auto h-[270px] object-cover' alt="" />
                <div className='w-full absolute top-1/2 left-[50%] -translate-y-1/2  -translate-x-1/2' id='aboutBannerContent'>
                    <p className=' lg:text-xl uppercase text-white pb-2 text-center'>home / Our Team</p>
                    <p className='  text-[#be8553] lg:text-4xl text-xl text-center capitalize font-semibold'>Our Team</p>
                </div>
            </figure>
        </section>
    )
}
