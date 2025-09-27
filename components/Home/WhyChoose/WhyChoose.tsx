import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import WhyChooseCard from './WhyChooseCard'

const WhyChoose = () => {
  return (
    <div className='pt-20 pb-20'>
        {/*Section Heading*/}
        <SectionHeading heading='Why Choose us?' subheading='Minimizing our impact, maximizing your journey.'/>
        <div className='grid w-[70%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20'>
            {/*Why choose cards*/}
            <div>
                <WhyChooseCard image="/images/c1.png" title="Data Security" content="Your booking and personal data are always secure with us."/>
            </div>
            <div>
                <WhyChooseCard image="/images/c2.png" title="Trusted Since 2025" content="Experience a trusted stay with our commitment to quality service."/>
            </div>
            <div>
                <WhyChooseCard image="/images/c3.png" title="24/7 Customer Care services" content="Dedicated support is always available to assist you with anything you need."/>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose