import React from 'react'

export default function BannerAbout() {
    return (
        <>
        <section className='max-w-full '>
            <figure className='w-full relative'>
                <img src="/images/team-banner.webp" className='lg:h-auto h-[270px] object-cover' alt="" />
                <div className='absolute top-1/2 left-[50%] -translate-y-1/2  -translate-x-1/2'  id='aboutBannerContent'>
                    <p className=' lg:text-xl uppercase text-white pb-2'>home / about us</p>
                    <p className='  text-[#be8553] lg:text-4xl text-xl text-center capitalize font-semibold'>About Us</p>
                </div>
            </figure>
        </section>
        </>
    )
}
