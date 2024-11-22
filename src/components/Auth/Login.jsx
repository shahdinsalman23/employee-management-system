import React, { useState } from 'react'
import loginFormImage from '../../../public/employee.png'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
       e.preventDefault()
       handleLogin(email, password)
       setEmail("")
       setPassword("")
    }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 px-16 py-16 rounded-md  border-emerald-600">
          <img src={loginFormImage} className='invert pb-8 w-28 m-auto' alt="" />
            <form onSubmit={(e)=>{
                submitHandler(e);
            }} className='flex flex-col items-center justify-center'>
               <input required className='outline-none border-2 bg-transparent border-emerald-600 rounded-md text-xl py-3 px-5 placeholder:text-gray-400' type="email" name="" id="" placeholder='Enter your email'
               value={email}
               onChange={(e)=>{
                setEmail(e.target.value)
               }}
               />
               <input required className='outline-none border-2 bg-transparent border-emerald-600 rounded-md text-xl py-3 px-5 placeholder:text-gray-400 mt-8' type="password" name="" id="" placeholder='Enter your password'
               value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                 }}
               />
               <button className='outline-none border-2 bg-emerald-600 hover:bg-transparent border-emerald-600 leading-2 rounded-full text-xl py-2 px-12 mt-8'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login