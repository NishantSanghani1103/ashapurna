import React, { useEffect } from 'react'

export default function NewsLatter() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <section className='max-w-full my-12' id='newsLatter'>
                <div className='max-w-[1320px] mx-auto'>
                    <h2 className='lg:text-4xl text-2xl text-[#062f43] font-semibold text-center capitalize'>Ashapurna Newsletters</h2>
                </div>
            </section>
        </>
    )
}
