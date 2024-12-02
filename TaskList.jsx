import React from 'react'
import AcceptTask from './AcceptTask'
import FaildTask from './FaildTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data,employees}) => {
  return (
    <div id="taskList" className='h-[55%] overflow-x-auto flex items-center gap-5 flex-nowrap w-full py-5  mt-10  '>
      
       {data.tasks.map((elem,idx)=>{
        if (elem.active){
            return <AcceptTask employees={employees} key={idx}  data={elem}/>
        } 
        if(elem.newTask){
            return <NewTask employees={employees} key={idx} data={elem}/>

        }
        if(elem.completed){
            return <CompleteTask  key={idx} data={elem}/>
        }
        if(elem.failed){
            return <FaildTask  key={idx} data={elem}/>
        }
       })}

    </div>
  )
}

export default TaskList