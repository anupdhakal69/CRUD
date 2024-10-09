import React from 'react'

const Update = () => {
  return (
    <div>
       <h1 className='text-center mt-24 mb-8 text-3xl font-serif font-semibold text-gray-800'>Update the data</h1>
        <form className='flex flex-col gap-4 w-96 px-4 mx-auto' >
            <input required type='text' placeholder='Name' className='p-2 border border-gray-300 rounded' value={name} onChange={(e) => setName(e.target.value)}/>
            <input required type='number' placeholder='Age' className='p-2 border border-gray-300 rounded' value={age} onChange={(e) => setAge(e.target.value)}/>
            <input required type='email' placeholder='Email' className='p-2 border border-gray-300 rounded' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button className='bg-blue-500 text-white font-semibold p-2 rounded hover:bg-blue-600'>Submit</button>
            <p className='text-center text-red-600'>{error}</p>
        </form>
    </div>
  )
}

export default Update
