import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
  return (
    <div className='pt-20 pb-20'>
        {/*heading of section*/}
        <SectionHeading heading='Check out the popular Destinations' subheading='Our top picks for unforgettable getaways.'/>
        {/*section content*/}
        <div className='mt-14 w-[80%] mx-auto'>
            {/*Slider*/}
            <DestinationSlider/>
        </div>
    </div>
  )
}

export default Destination