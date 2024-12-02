import React, { useState } from 'react'

const CreateTask = () => {

    const  [Title, setTaskTitle] = useState('')
    const [Description, setTaskDescription] = useState('')
    const [Date, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    // const [newTask, setNewTask] = useState('')

    const submitHandler =(e)=>{
        e.preventDefault()

        // setNewTask({Title,Description, Date,category,active:false,newTask:true,completed:false,failed:false})
        const newTask = {Title,Description, Date,category,active:false,newTask:true,completed:false,failed:false}
        const data = JSON.parse(localStorage.getItem('employees'))
        data.forEach(elem => {
            if(assignTo==elem.firstName){
                elem.tasks.push(newTask)
                // elem.taskCount.newTask=elem.taskCounts.newTask+1
                console.log(elem.taskCount.newTask)

            }
        });
        localStorage.setItem("employees",JSON.stringify(data))
        setAssignTo('')
        setCategory('')
        setAssignTo('')
        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')

    }


  return (
    <div className='mt-3 bg-gray-800'>
    <form onSubmit={(e)=>{
        submitHandler(e)
    }}
     className='flex flex-wrap items-start w-full  p-3 justify-between'>
        <div className='w-1/2'>
            <div className='m-3'>
                <h3>Task Title</h3>
            <input
              value={Title}
              onChange={(e)=>{
                  setTaskTitle(e.target.value)
              }}
             className='bg-transparent border-white border-2 rounded w-[80%] outline-none' type="text" placeholder='Make a UI design' />
            </div>
            
            <div className='m-3'>
                <h3>Date</h3>
            <input 
             value={Date}
             onChange={(e)=>{
                 setTaskDate(e.target.value)
             }}
            className='bg-transparent border-white border-2 rounded w-[80%] outline-none'  type="date" />
            </div>
            <div className='m-3'>
                <h3>Assign to</h3>
            <input 
             value={assignTo}
             onChange={(e)=>{
                 setAssignTo(e.target.value)
             }}
            className='bg-transparent border-white border-2 rounded w-[80%] outline-none '  type="text" placeholder='employee name'/>
            </div>
            <div className='m-3'>
                <h3>Category</h3>
            <input
             value={category}
             onChange={(e)=>{
                 setCategory(e.target.value)
             }}
             className='bg-transparent border-white border-2 rounded w-[80%] outline-none '  type="text" placeholder='Desing, Dev, etc' />
            </div>
        </div>
        <div className='flex flex-col w-[38%]' >
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea 
                     value={Description}
                     onChange={(e)=>{
                         setTaskDescription(e.target.value)
                     }}
                    className=' bg-transparent border-white border-2 rounded mb-3' name="" id="" cols='30' rows='7'></textarea>
                    
                    <button className='w-full text-sm rounded-lg  py-1 bg-green-400 hover:bg-emerald-500 '>Create Task</button>
            </div>
        
    </form>
    
</div>
  )
}

export default CreateTask