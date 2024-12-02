import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='h-full w-[300px] bg-blue-400 p-5 rounded-xl flex-shrink-0 '> 
    <div className='flex justify-between items-center'>
   <h3 className='bg-blue-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
    <h4 className='text-base'>{data.date}</h4>
       </div>
       <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
       <p className='text-sm mt-2'> {data.title} </p>
           <div className='mt-2 w-full'>
               <button className='bg-green-600 py-1 px-2 text-sm mr-2 rounded-xl w-full'> Accept</button>
           </div>
           
       </div>
  )
}

export default NewTask