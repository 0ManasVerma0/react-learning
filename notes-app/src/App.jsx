import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({title,detail})
    setTask(copyTask)

    setTitle('')
    setDetail('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)

  }

  return (
    <div className=' h-screen lg:flex bg-black text-white'>
      {/* //form */}
      <form onSubmit={(e)=>submitHandler(e)} className='flex lg:w-1/2 flex-col gap-4 p-10'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter Notes Heading' className='px-5 py-2 border-2 rounded outline-none font-medium' />
        <textarea onChange={(e) => setDetail(e.target.value)} value={detail} type="text" placeholder='Enter Details' className='px-5 py-2 h-32 border-2 rounded outline-none font-medium' />
        <button className='bg-white active:scale-95 text-black px-5 py-2  rounded outline-none font-medium'>Add Note</button>
      </form>
      {/* //card */}
      <div className=' lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div id="scrollbar" className='flex items-start justify-start flex-wrap gap-5 mt-5 overflow-auto h-full'>
          {task.map(function(elem, idx){
            return <div key={idx} className='flex justify-between flex-col items-start h-52 w-40 p-4 text-black rounded-2xl bg-white'>
              <div>
              <h3 className='leading-tight font-bold text-lg'>{elem.title}</h3>
              <p className='mt-4 leading-tight text-sm font-medium text-gray-500'>{elem.detail}</p>
              </div>
              <button onClick={() => deleteNote(idx)} className='bg-red-400 active:scale-95 text-white w-full cursor-pointer py-1 text-xs rounded font-bold'>Delete Note</button>
            </div>
          })}
        
        </div>
      </div>
    </div>
  )
}

export default App
