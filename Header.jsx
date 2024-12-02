import React from 'react'
import { setLocalStorage } from '../utils/localStorage'

const Header = ({data, changeUser}) => {

const logOutUser = ()=>{
  localStorage.setItem('loggedInUser','')
  // window.location.reload()
  changeUser('')
}

  return (
    <>
    <div className='flex  items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>{data.firstName} 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-500 rounded-xl p-2'>Log Out</button>
    </div>
    </>
  )
}

export default Header