import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        setNewTask({taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false})
       
        const data = userData
        data.forEach(function(elem){
            if(asignTo == elem.firstName){
                elem.tasks.push(newTask)
                elem.taskNumbers.newTask = elem.taskNumbers.newTask+1
            }
        })

        setUserData(data)
        console.log(data)

        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setAsignTo('')
        setCategory('')

    }
    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-lg text-gray-300 mb-2'>Task Title</h3>
                        <input 
                        value={taskTitle}
                        onChange={(e)=>{
                            setTaskTitle(e.target.value)
                        }}
                        className='text-md py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI Design' />
                    </div>
                    <div>
                        <h3 className='text-lg text-gray-300 mb-2'>Date</h3>
                        <input
                        value={taskDate}
                        onChange={(e)=>{
                            setTaskDate(e.target.value)
                        }}
                        className='text-md py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" name="" id="" />
                    </div>
                    <div>
                        <h3 className='text-lg text-gray-300 mb-2'>Assign To</h3>
                        <input
                        value={asignTo}
                        onChange={(e)=>{
                            setAsignTo(e.target.value)
                        }}
                        className='text-md py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" name="" id="" placeholder='employee name' />
                    </div>
                    <div>
                        <h3 className='text-lg text-gray-300 mb-2'>Category</h3>
                        <input 
                        value={category}
                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }}
                        className='text-md py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" name="" id="" placeholder='design, dev etc' />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-lg text-gray-300 mb-2'>Description</h3>
                    <textarea
                    value={taskDescription}
                    onChange={(e)=>{
                        setTaskDescription(e.target.value)
                    }}
                    className='w-full h-60 text-md py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-lg mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask