import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='h-full w-[300px] bg-green-400 p-5 rounded-xl flex-shrink-0 '> 
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4 className='text-base'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'> {data.description} </p>
          <div className='flex justify-center items-center mt-2'>
            <button className='bg-green-400 py-1 px-2 text-sm rounded-xl'>Completed</button>
          </div>
        </div>
 )
}

export default CompleteTask