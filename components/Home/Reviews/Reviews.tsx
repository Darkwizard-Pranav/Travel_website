import React from 'react'
import { FaStar } from 'react-icons/fa6'
import ReviewSlider from './ReviewSlider'

const Reviews = () => {
  return (
    <div id='review' className='pt-20 pb-20 flex items-center flex-col justify-center bg-[#014421]'>
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
            {/*text*/}
            <div>
                <h1 className='text-2xl font-semibold text-white'>Customer Reviews</h1>
                <p className='mt-6 text-gray-200'>
                    Since 2025, we have been dedicated to offering world-class hospitality, modern amenities, and personalized care to every guest. The trust and satisfaction of our visitors are reflected in the glowing reviews we continue to receive.</p>
            {/*Rating*/}
            <div className='mt-6 flex items-center space-x-6'>
                    <div>
                        <p className='text-2xl font-bold text-white'>
                            4.07
                        </p>
                        <p className='text-white mb-2'>Overall Rating</p>
                        <div className='flex items-center'>
                            <FaStar className='text-white'/>
                            <FaStar className='text-white'/>
                            <FaStar className='text-white'/>
                            <FaStar className='text-white'/>
                        </div>
                    </div>
            </div>
            </div>
            {/*Slider review*/}
            <div className='overflow-hidden'>
                <ReviewSlider/>
            </div>
        </div>
    </div>
  )
}

export default Reviews