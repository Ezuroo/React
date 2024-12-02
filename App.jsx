import React, { useContext, useEffect, useState } from 'react'
import Login from './Component/Auth/login'
import EmployeeDashboard from './Component/Dashboard/EmployeeDashboard'
import AdminDashboard from './Component/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {


  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
const authData = useContext(AuthContext)

  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
   
  }, )


//  useEffect(() => {
//    const  loggedInUser = localStorage.getItem('loggedInUser')
   
//    if(loggedInUser){
//     const userData = JSON.parse(loggedInUser)
//     setUser(userData.role)
//     setLoggedInUserData(userData.data)
//   }
   
//  },[])
 
  
  


const handelLogin =(email,password)=>{
  const admin = authData.admin.find((e)=>email==e.email && password==e.password)
 if (admin){
  setUser('admin')
  setLoggedInUserData(admin)
  localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',data:admin}))
 }else if(authData){
  const employee = authData.employees.find((e)=>email == e.email && password == e.password)
  if (employee){
    
    setUser('employee')
    setLoggedInUserData(employee)
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
    
  }

 }else{
  alert("invalid credential")
 }
}


  return (
    <>
    {!user?<Login handelLogin={handelLogin}/>:''}
    {user =='admin'?<AdminDashboard changeUser={setUser} data={loggedInUserData} />:(user == 'employee'?<EmployeeDashboard changeUser={setUser} employees={authData.employees}  data={loggedInUserData} />: null)}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}

    </>
  )
}
// 
export default App