import React from 'react'
import RightCard from './RightCard.jsx'

const Rightcontent = (props) => {
  return (
    <div id='right' className='h-full p-6 overflow-x-auto rounded-4xl flex flex-nowrap gap-10 w-3/4'>
      {props.users.map(function(elem, idx){
        return  <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}

export default Rightcontent
