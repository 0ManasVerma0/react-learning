import React from 'react'
import HeroText from './HeroText.jsx'
import Arrow from './Arrow.jsx'
const Leftcontent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
        <HeroText/>
        <Arrow/>
    </div>
  )
}

export default Leftcontent
