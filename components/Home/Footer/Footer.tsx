import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <div id="footer" className='pt-16 pb-16 '>
        <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid 
        md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {/*1st part*/}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold'>Company</h1>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
                        About Us
                    </p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
                        Careers
                    </p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
                        Blogs
                    </p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
                        Gift cards
                    </p>
                </div>

                <div className='space-y-5'>
                    <h1 className='text-lg font-bold'>Support</h1>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
                        Contact
                    </p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
                        Legal Notice
                    </p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
                        Privacy Policy
                    </p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
                        Terms & Conditiond
                    </p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
                        Sitemap
                    </p>
                </div>

                <div className='space-y-5'>
                    <h1 className='text-lg font-bold'>Other Services</h1>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
                        Hire a Car
                    </p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
                        Tour List
                    </p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
                        Flight finder
                    </p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
                        Train Bookings
                    </p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
                        Travel Agents
                    </p>
                </div>

                <div className='space-y-5'>
                    <h1 className='text-lg font-bold'>Contact Us</h1>
                    <p className='text-gray-800 font-medium cursor-pointer hover:text-blue-950'>
                        Our Mobile Number
                    </p>
                    <p className='text-gray-800 font-bold cursor-pointer  hover:text-blue-0 '>
                        +91 9999999999
                    </p>
                    <p className='text-gray-800 font-medium cursor-pointer hover:text-blue-950'>
                        Our Email Address
                    </p>
                    <p className='text-gray-800 font-bold cursor-pointer  hover:text-blue-0 '>
                        travel.agents_comp23@gmail.com
                    </p>
                </div>

        </div>
        {/*bottom section*/}
        <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between
        items-center text-gray-600 text-sm'> 
        <p className='text-center md:text-left'>Copyright 1999 by who knows who :) 
            </p>
        <div className='flex items-center space-x-4 mt-4 md:mt-0'>
            <span>Social :</span>
            <Link href="#" className='text-gray-400 hover:text-gray-950'><FaInstagram/></Link>
            <Link href="#" className='text-gray-400 hover:text-gray-950'><FaLinkedin/></Link>
            <Link href="#" className='text-gray-400 hover:text-gray-950'><FaYoutube/></Link>
            <Link href="#" className='text-gray-400 hover:text-gray-950'><FaWhatsapp/></Link>
        </div>
        </div>
    </div>
  )
}

export default Footer