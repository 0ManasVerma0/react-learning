import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const RightCardContent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-start items-stretch'>
        <h2 className='bg-white h-10 w-10 flex justify-center items-center rounded-full text-xl font-semibold'>{props.id+1}</h2>
        <div className='mt-auto flex flex-col gap-4'>
          <p className='text-lg leading-relaxed text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam quaerat cum repellat eius eligendi.</p>
          <div className='flex justify-between'>
              <button className=' bg-blue-600 text-white px-8 py-2 rounded-full font-medium'>{props.tag}</button>
              <button className=' bg-blue-600 text-white px-3 py-2 rounded-full font-medium'><FaArrowRightLong /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
