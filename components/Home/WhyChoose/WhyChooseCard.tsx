import React from 'react'

type Props ={
    image:string;
    title:string;
    content:string;
};

const WhyChooseCard = ({image,title,content}: Props) => {
  return (
    <div>
        {/*image*/}
        <img src={image} width={90} height={90} alt="image" className='mx-auto'/>
        {/*Content*/}
        <h1 className='mt-6 text-center text-gray-900 font-medium text-lg'>{title}</h1>
        <p className='text-center mt-2 text-s font-medium'>
            {content}
        </p>
    </div>
  )
}

export default WhyChooseCard