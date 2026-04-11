import React from 'react'
import Leftcontent from './Leftcontent.jsx'
import Rightcontent from './Rightcontent.jsx'

const Page1content = (props) => {
  return (
    <div className='py-3 px-18 h-[90vh] flex justify-between items-center gap-10'>
      <Leftcontent/>
      <Rightcontent users={props.users}/>
    </div>
  )
}

export default Page1content
