import React from 'react'

export default function NriEnquiry() {
    return (
        <>
            <section className='my-12 max-w-full' id='nriCorner'>
                <div className='max-w-[1320px] lg:mx-auto mx-2'>
                    <div className='text-center' id='nriCorner-heading'>
                        <h3 className='lg:text-4xl text-2xl text-[#062f43] font-semibold uppercase'>nri</h3>

                    </div>
                    <div className='grid my-10 lg:grid-cols-2 gap-5'>
                        <div id='contentDescription'>
                            <div className='' id='heading'>
                                <div className='flex items-center gap-3'>
                                    <h5 className='uppercase text-[#be8553]'>nri</h5>
                                    <div className='border border-[#be8553] w-24'></div>
                                </div>

                                <div className='' id='content-heading'>
                                    <h3 className='lg:text-3xl text-xl text-[#062f43] font-semibold capitalize'><span className='uppercase'>nri</span> clients <span className='text-[#be8553]'>corner</span></h3>
                                </div>
                            </div>
                            <div className='my-2' id='content'>
                                <p className='text-sm text-[#5a5a5a] leading-[26px]'>A non-resident Indian (NRI) is a citizen of India who holds an Indian passport and has temporarily emigrated to another country for six months or more for employment, residence, education or any other such purpose. A person of Indian origin (PIO) is a person of Indian origin or ancestors but who is not a citizen of India and is the citizen of another country. A PIO might have been a citizen of India and subsequently taken citizenship of another country, or have ancestors born in India or other states. Other terms with vaguely the same meaning are overseas Indian and expatriate India. In common usage, this often includes Indian-born individuals (and also people of other nations with Indian ancestors) who have taken the citizenship of other countries. As per the Ministry of Overseas Indian Affairs, India has the second largest diaspora in the world after overseas Chinese. The overseas Indian community is estimated at 25 million spread across every region of the world.</p>
                            </div>

                            <div className='my-2' id='content'>
                                <h3 className='lg:text-[28px] text-xl text-[#5A5A5A] font-semibold'>Investment destination: India</h3>
                                <p className='text-sm py-2 text-[#5a5a5a] leading-[26px]'>In recent times, India has emerged as one of the popular real estate destinations for global investors. Real estate is one of the booming industries in the country and investment in property is promising and set to flourish in the times to come. It is expected to scale new heights with the emergence of fresh localities in tier-I and II cities.</p>
                            </div>
                        </div>

                        <div className='shadow-2xl p-4 bg-white border-l-6 rounded-xl rounded-l-md border-[#d1a782]' id='nriEnquiry'>
                            <div id='nriEnquiry-heading'>
                                <h3 className='lg:text-2xl text-2xl text-[#062f43]  uppercase font-medium'>nri enquiry</h3>
                                <p className='py-1 sub-heading-color'>Please fill in the form and we would contact you at the earliest.</p>
                            </div>

                            <div className='my-5' id='nriEnquiryForm'>
                                <form className='' action="">
                                    <input type="text" className='border border-[#87898e] w-full p-3 rounded-sm my-2' placeholder='Name' />
                                    <input type="number" className='border border-[#87898e] w-full p-3 rounded-sm my-2' placeholder='Phone' />
                                    <input type="email" className='border border-[#87898e] w-full p-3 rounded-sm my-2' placeholder='Email' />
                                    <textarea name="" className='resize-none w-full p-2
                                 border border-[#87898e] rounded-sm my-2' rows={4} placeholder='Message' id=""></textarea>

                                    <button type='submit' className='capitalize border px-12  rounded-sm bg-[#be8553] text-white py-4 my-2 block mx-auto cursor-pointer hover:text-[#be8553] hover:bg-white'>submit</button>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
