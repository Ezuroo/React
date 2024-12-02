import React from 'react'
import Header from '../../others/Header'
import TaskListNumbers from '../../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data,employees, changeUser}) => {
  return (
    <>
    <div className='p-10 bg-[#1c1c1c] h-screen'>
    <Header changeUser={changeUser}  data={data} />
    <TaskListNumbers  data={data}/>
    <TaskList employees={employees} data={data} />
    </div>
    </>
  )
}

export default EmployeeDashboard