import SearchBox from '@/components/Helper/SearchBox'
import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className="relative w-full min-h-screen sm:min-h-[100vh]">
        {/*overlay for hero video*/}
        <div className='absolute top-0 left-0 w-full h-full bg-blue-950 opacity-100'>
        {/*Video*/}
        <video 
        src="/images/hero1.mp4" 
        autoPlay 
        muted 
        loop
        preload='metadata' 
        className='w-full h-full object-cover'/>
        {/*Text Content*/}
        <div className='absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%]
         translate-y-[-50%]'>
            <div className='flex items-center justify-center flex-col w-full h-full'>
                <div>
                    <h1 className='text-[20px] sm:text-[25px] md:text-[35px] lg:text-[45px] tracking-[0.2rem] 
                      sm:tracking-[0.3rem] md:tracking-[0.5rem] lg:tracking-[0.7rem] text-white font-bold 
                      uppercase text-center'>Wander.Discover.Remember.</h1>
                     <p className=' text-sm  sm:text-base  md:text-lg  lg:text-xl  text-center 
                        text-white font-normal [word-spacing:5px]'>Take a break from the stress of everyday life, plan trips and explore your favourite destination</p>
                </div>
              {/*Search box component*/}
              <SearchBox/>
              <Link href="#" className='rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden 
              group bg-green-950 relative hover:bg-gradient-to-r hover:from-green:500 hover:to-green-400
              text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300'>
              <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform
              translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
              <span className='relative font-bold'>Search</span>
              </Link>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Hero