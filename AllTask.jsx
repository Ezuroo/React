import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext)
    console.log(authData)
  return (
    <div className='bg-[#1c1c1c] mt-2 p-5 rounded h-60 ' >
        <div className='bg-blue-400 mb-2 py-2 px-4 flex justify-between rounded '>
             <h2 className='w-1/5 text-lg font-medium '>Employee Name</h2>
             <h3 className='w-1/5 text-lg font-medium '>New Task</h3>
             <h5 className='w-1/5 text-lg font-medium '>Active Task</h5>
             <h5 className='w-1/5 text-lg font-medium '>Completed Task</h5>
             <h5 className='w-1/5 text-lg font-medium '>Failed Task</h5>
         </div>
        <div className='h-[80%] overflow-auto '>
        {authData.employees.map((elem,idx)=>{
            return <div  key={idx}className='bg-gray-700 mb-2 py-2 px-4 flex justify-center items-center rounded '>
             <h2 className='w-1/5 text-lg font-medium '>{elem.firstName}</h2>
             <h3 className='w-1/5 text-lg font-medium text-blue-200  '>{elem.taskCount.newTask}</h3>
             <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{elem.taskCount.active}</h5>
             <h5 className='w-1/5 text-lg font-medium text-white '>{elem.taskCount.completed}</h5>
             <h5 className='w-1/5 text-lg font-medium text-red-600'>{elem.taskCount.failed}</h5>
         </div>
        })}
        </div>
       
        
    </div>
  )
}

export default AllTask