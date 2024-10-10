import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [age, setAge] = React.useState('')
  const [error, setError] = React.useState('')

  const {id} = useParams()
  const navigate = useNavigate()

  const getSingleUser = async () => {

    const response = await fetch(`http://localhost:4000/api/user/read/${id}`)
    const data = await response.json()

    if(response.ok) {
      setName(data.name)
      setEmail(data.email)
      setAge(data.age)
    } else {
      setError(data.error)
    }
  }

  useEffect(() => {
    getSingleUser()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const updateUser = {name, age, email}
    const data = await fetch(`http://localhost:4000/api/user/update/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateUser)
    })

    const response = await data.json()

    if(data.ok) {
      console.log('Vayo yahoo')
      toast.success('User added successfully')
      setName("")
      setAge(0)
      setEmail("")
      setError("")
      navigate('/all')

    } else{
      console.log(response,'Vayena huhuhu')
      setError(response.error)
    }
    
  }
  

  return (
    <div>
       <h1 className='text-center mt-24 mb-8 text-3xl font-serif font-semibold text-gray-800'>Update the data</h1>
        <ToastContainer />
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-96 px-4 mx-auto' >
            <input required type='text' placeholder='Name' className='p-2 border border-gray-300 rounded' value={name} onChange={(e) => setName(e.target.value)}/>
            <input required type='number' placeholder='Age' className='p-2 border border-gray-300 rounded' value={age} onChange={(e) => setAge(e.target.value)}/>
            <input required type='email' placeholder='Email' className='p-2 border border-gray-300 rounded' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button className='bg-green-500 text-white font-semibold p-2 rounded hover:bg-green-600'>Submit</button>
            <p className='text-center text-red-600'>{error}</p>
        </form>
    </div>
  )
} 

export default Update
