import React from 'react'
import { IoCall } from "react-icons/io5";
import { IoMdMailOpen } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <section className='max-w-full bg-[#32343b] '>
        <div className='max-w-[1320px] lg:mx-auto mx-2 pt-12 border-b border-[#314b58]'>
          <div className='max-w-full grid lg:grid-cols-[33%_auto] grid-cols-1'>


            <div className='w-full lg:border-r lg:border-[#314b58]' id='footer-contect' >
              <figure>
                <img src="/images/Ashapurna_-Logo-1747121707.png" className='w-[160px]' alt="" />
              </figure>
              <div className='py-2 px-4 my-3 contact-content'>
                <ul>
                  <li className='flex gap-2'>
                    <div className='w-[38px] h-[38px] rounded-sm bg-transparent border border-white flex justify-center items-center'>
                      <IoCall className='text-white text-lg' />
                    </div>
                    <div>
                      <div>
                        <p className='text-white font-normal'>9314041747</p>
                        <p className='text-white font-normal'>0291-2514747 , 9610383747</p>
                      </div>
                    </div>
                  </li>


                  <li className='flex items-center gap-2 py-2'>
                    <div className='w-[38px] h-[38px] rounded-sm bg-transparent border border-white flex justify-center items-center'>
                      <IoMdMailOpen className='text-white text-lg' />
                    </div>
                    <div>
                      <div>
                        <p className='text-white font-normal'>marketing@ashapurna.com</p>
                      </div>
                    </div>
                  </li>


                  <li className='flex gap-2 py-2'>
                    <div className='w-[77px] h-[38px] rounded-sm border border-white flex justify-center items-center'>
                      <FaLocationDot className='text-white text-lg' />
                    </div>

                    <div>

                      <p className='text-white font-normal'>4A, EAST PATEL NAGAR, CIRCUIT HOUSE ROAD,
                        OPPOSITE LIC OFFICE, Jodhpur, Rajasthan, 342011</p>

                    </div>
                  </li>


                </ul>
              </div>
            </div>


            <div className='w-full' id='footer-link' >
              <div className='mb-3' id='useFul-links'>
                <h4 className='text-xl text-white font-normal'>Useful Links</h4>
                <div className='my-3 links'>
                  <div className='flex lg:flex-row flex-col gap-3'>
                    <Link className='text-[#ccc] hover:text-[#be8553]'>Residential Projects &nbsp; | </Link>
                    <Link className='text-[#ccc] hover:text-[#be8553]'>Commercial projects &nbsp; | </Link>
                    <Link className='text-[#ccc] hover:text-[#be8553]'>Investors Club &nbsp; | </Link>
                    <Link className='text-[#ccc] hover:text-[#be8553]'>NRI corner &nbsp; | </Link>
                    <Link className='text-[#ccc] hover:text-[#be8553]'>Career &nbsp; | </Link>
                    <Link className='text-[#ccc] hover:text-[#be8553]'>Become a Partner &nbsp; | </Link>

                  </div>

                  <div className='flex lg:flex-row flex-col gap-3'>


                    <Link className='text-[#ccc] hover:text-[#be8553]'>Our Testimonials &nbsp; | </Link>
                    <Link className='text-[#ccc] hover:text-[#be8553]'>Privacy Policy &nbsp; | </Link>
                    <Link className='text-[#ccc] hover:text-[#be8553]'>Terms & Conditions </Link>


                  </div>

                </div>
              </div>


              <div className='my-3' id='useFul-links'>
                <h4 className='text-xl text-white font-normal capitalize'>important Links</h4>
                <div className='my-3 links'>
                  <div className='flex lg:flex-row flex-col gap-3'>
                    <Link className='text-[#ccc] hover:text-[#be8553]'>Social Responsibility &nbsp; | </Link>
                    <Link className='text-[#ccc] hover:text-[#be8553]'>Corporate Profile &nbsp; | </Link>
                    <Link className='text-[#ccc] hover:text-[#be8553]'>Why invest in jodhpur?&nbsp; | </Link>
                    <Link className='text-[#ccc] hover:text-[#be8553]'>RERA Disclaimer &nbsp; | </Link>
                    <Link className='text-[#ccc] hover:text-[#be8553]'>EMI Calculator &nbsp; | </Link>


                  </div>

                  <div className='flex gap-3'>


                    <Link className='text-[#ccc] hover:text-[#be8553]'>referral Scheme  </Link>



                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

        <div className='max-w-[1320px] lg:mt-12 mt-5 pb-8 text-center mx-auto' id='followUs'>
          <div >
            <h2 className='text-white font-semibold text-xl'>Follow Us On</h2>
            <div className='justify-center flex gap-2 my-2'>
              <div className='bg-white w-[25px] h-[25px] rounded-[50%] flex justify-center items-center'>
                <FaFacebookF className='text-sm text-[#062f43]' />
              </div>
              <div className='bg-white w-[25px] h-[25px] rounded-[50%] flex justify-center items-center'>
                <FaInstagram className='text-sm text-[#062f43]' />
              </div>
              <div className='bg-white w-[25px] h-[25px] rounded-[50%] flex justify-center items-center'>
                <FaYoutube className='text-sm text-[#062f43]' />
              </div>
              <div className='bg-white w-[25px] h-[25px] rounded-[50%] flex justify-center items-center'>
                <FaTwitter className='text-sm text-[#062f43]' />
              </div>
              <div className='bg-white w-[25px] h-[25px] rounded-[50%] flex justify-center items-center'>
                <FaPinterestP className='text-sm text-[#062f43]' />
              </div>
              <div className='bg-white w-[25px] h-[25px] rounded-[50%] flex justify-center items-center'>
                <FaLinkedinIn className='text-sm text-[#062f43]' />
              </div>
            </div>
          </div>
        </div>

      </section>


      <section className='max-w-full  bg-[#f4efeb]'>
        <div className='max-w-[1320px]  py-12 mx-auto'>
          <div>
            <ul className='flex gap-5 my-3 justify-center'>
              <li>
                <Link className='text-[#314b58] font-normal capitalize'>real estate developer in jodhpur &nbsp; | </Link>
              </li>
              <li>
                <Link className='text-[#314b58] font-normal capitalize'>top builders in jodhpur &nbsp; | </Link>
              </li>
              <li>
                <Link className='text-[#314b58] font-normal capitalize'>top residental projects in jodhpur &nbsp; | </Link>
              </li>
              <li>
                <Link className='text-[#314b58] font-normal capitalize'>Commercial property in jodhpur &nbsp; | </Link>
              </li>
            </ul>


            <ul className='flex gap-8'>
              <li>
                <Link className='text-[#314b58] font-normal capitalize'>Houses in Rajasthan &nbsp; | </Link>
              </li>
              <li>
                <Link className='text-[#314b58] font-normal capitalize'>Flats In Jodhpur &nbsp; | </Link>
              </li>
              <li>
                <Link className='text-[#314b58] font-normal capitalize'>Villas In Jodhpur &nbsp; | </Link>
              </li>
              <li>
                <Link className='text-[#314b58] font-normal capitalize'>Plots In Jodhpur &nbsp; | </Link>
              </li>
              <li>
                <Link className='text-[#314b58] font-normal capitalize'>2BHK Flats In Jodhpur &nbsp; | </Link>
              </li>
              <li>
                <Link className='text-[#314b58] font-normal capitalize'>JDA Property In Jodhpur &nbsp; | </Link>
              </li>
              <li>
                <Link className='text-[#314b58] font-normal capitalize'>Property Type </Link>
              </li>
            </ul>
          </div>

          <div className='mt-12'>
            <p className='text-center text-sm leading-6 text-[#314b58]'>The information on the website regarding the project, except the legal documents, is purely indicative and representational and do not constitute a promise by the company. Further, the Company/Architects reserve the right to add / delete any details / specifications / elevations mentioned, if so warranted.  </p>
          </div>
        </div>

      </section>


      <section className='max-w-full p-3 bg-[#e8ddd5]'>
        <p className='py-2 px-8'>Copyright © 2023 Ashapurna Buildcon Limited</p>
      </section>

    </>
  )
}
