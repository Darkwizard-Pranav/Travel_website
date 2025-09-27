"use client";
import { navLinks } from '@/constants/constants'
import Link from 'next/link'
import React, { useEffect, useState} from 'react'
import { FaPlane } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav:()=>void
}

const Nav = ({ openNav }: Props) => 
{
    const [navBg, setNavBg]=useState(false);
    useEffect(()=>{
        const handler = () => {
        if(window.scrollY>=90) setNavBg(true);
        if(window.scrollY<90) setNavBg(false);
    };
    window.addEventListener("scroll",handler);
    return ()=> window.removeEventListener("scroll",handler);
},[]);
  return (
    <div className={`${navBg?'bg-[#014421] shadow-md' : 'fixed'}transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
        <div className='flex items-center h-full justify-between w-[90%] x1:w-[80%] mx-auto'>
            {/*Logo*/}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                    <FaPlane className='w-6 h-6 text-[#014421]'/>
                </div>
                <h1 className='text-xl md:text-2xl text-white uppercase font-bold'>
                    Aventuro
                </h1>
            </div>
            {/* Navigation tabs*/}
            <div className='hidden lg:flex items-center space-x-10'>
                {navLinks.map((link)=>{
                    return (<Link href={link.url} key={link.id}>
                        <p className="relative text-white text-base font-medium w-fit block
             after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300
             after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300
             after:origin-right after:left-0 after:bottom-0">
                        {link.label}</p>
                    </Link>
                );
                }
                )
                }
            </div>
                {/* Book button */}
                <div className='flex items-center space-x-4'>
                    <Link href="https://wanderlust-i42t.onrender.com/listings">
                    <button className='md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-400 
                    transition-all duration-200 rounded-lg'>
                        Book Now
                        </button> 
                        </Link> 
                    {/* Burger Menu */}
                    <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
                </div>
        </div>
    </div>
  )
}

export default Nav