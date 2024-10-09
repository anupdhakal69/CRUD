import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Create = () => {
  
      const [name, setName] = useState("")
      const [age, setAge] = useState(0)
      const [email, setEmail] = useState("")
      const [error, setError] = useState("")
      
      const navigate = useNavigate() 

      const handleSubmit = async (e) => {
          e.preventDefault()

          const addUser = {name, age, email}
          const data = await fetch('http://localhost:4000/api/user/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(addUser)
          })

          const response = await data.json()
    
          if(data.ok) {
            console.log('Vayo yahoo')
            toast.success('User added successfully')
            setName("")
            setAge(0)
            setEmail("")
            setError("")

          } else{
            console.log(response,'Vayena huhuhu')
            setError(response.error)
          }
          
          navigate('/all')
        }

  return (
    <div>
        <ToastContainer />
      <h1 className='text-center mt-24 mb-8 text-3xl font-serif font-semibold text-gray-800'>Fill the data</h1>
        <form className='flex flex-col gap-4 w-96 px-4 mx-auto' onSubmit={handleSubmit}>
            <input required type='text' placeholder='Name' className='p-2 border border-gray-300 rounded' value={name} onChange={(e) => setName(e.target.value)}/>
            <input required type='number' placeholder='Age' className='p-2 border border-gray-300 rounded' value={age} onChange={(e) => setAge(e.target.value)}/>
            <input required type='email' placeholder='Email' className='p-2 border border-gray-300 rounded' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button className='bg-blue-500 text-white font-semibold p-2 rounded hover:bg-blue-600'>Submit</button>
            <p className='text-center text-red-600'>{error}</p>
        </form>
    </div>
  )
}

export default Create
