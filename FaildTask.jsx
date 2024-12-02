import React from 'react'

const FaildTask = ({data}) => {
  return (
  <div className='h-full w-[300px] bg-red-400 p-5 rounded-xl flex-shrink-0 '> 
      <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
          <h4 className='text-base'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
      <p className='text-sm mt-2'> {data.description} </p>
    <div className='mt-2 flex justify-center items-center w-full'>
            <button className='bg-red-700 py-1 px-2 text-sm rounded-xl w-full'>Marked as Failed</button>
    </div>
</div>
  )
}

export default FaildTask