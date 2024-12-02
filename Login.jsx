import React,{useState} from 'react'

const Login = ({handelLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler =(e)=>{
    e.preventDefault()
    setEmail('')
    handelLogin(email, password)
    setPassword('')

  }


  return (
   <>
   <div className='flex h-screen w-screen items-center justify-center'>
    <div className='border-2 border-emerald-600 p-20'>

        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>

          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required
           className='text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 placeholder:text-gray-400' type="email" placeholder='Enter Your Email' />
          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required 
          className='text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 mt-4 placeholder:text-gray-400' type="password" placeholder='Enter Your Password' />
          <button className='text-white outline-none mt-5 bg-emerald-600 rounded-2xl py-3 px-5 placeholder:text-white'>Log in</button>
        </form>
    </div>
   </div>
   </>
  )
}

export default Login