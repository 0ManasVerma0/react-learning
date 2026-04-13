import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(response.data)
  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-65 w-70 overflow-hidden rounded-xl'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h3 className='font-bold text-lg'>{elem.author}</h3>
        </a>
      </div>
    })
  }



  return (
    <div className='bg-black overflow-auto p-4 h-screen text-white'>
      <div className='flex flex-wrap gap-4 p-2 mb-8'>{printUserData}</div>
      <div className='flex justify-center gap-6 items-center'>
        <button onClick={() => {
          if (index > 1) {
            setUserData([])
            setIndex(index - 1)
          }
        }} className='bg-amber-400 text-black text-sm active:scale-95 cursor-pointer px-4 py-2 rounded font-semibold'>Prev</button>
        <h4>page {index}</h4>
        <button onClick={() => {
          setUserData([])
          setIndex(index + 1)
        }} className='bg-amber-400 text-black text-sm active:scale-95 cursor-pointer px-4 py-2 rounded font-semibold'>Next</button>
      </div>
    </div>
  )
}

export default App
