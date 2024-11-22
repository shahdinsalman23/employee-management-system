import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {
  // const [username, setUsername] = useState('')
  // if(!data) {
  //   setUsername('admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    props.changeUser()
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hi <br /> <span className='text-3xl font-semibold'>{props.firstName} 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-white border-2 text-lg font-medium border-red-600 rounded-md hover:bg-transparent hover:text-red-600 px-5 py-2'>Logout</button>
    </div>
  )
}

export default Header