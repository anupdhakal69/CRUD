import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Read = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/user/read');
      const result = await response.json();

      if (response.ok) {
        setData(result);
      } else {
        setError(result.error || 'An error occurred');
      }
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  const handleDelete = async (id) => {
     
    const response = await fetch(`http://localhost:4000/api/user/delete/${id}`,{
      method: 'DELETE',
    })
    const result = await response.json()

    if(response.ok){
      toast.success('User deleted successfully')
      getData()
    }
    else{
      toast.error(result.error)
    }
  }
  return (
    <div className="container mx-auto mt-10">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-center mb-6">All Users ({data.length})</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 h-20 lg:grid-cols-4 gap-6">
        {error && <p className='text-center text-red-600'>{error}</p>}
        {data.map((user) => (
          <div
            key={user._id}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:scale-95 duration-200"
          >
            <div className="text-2xl font-semibold mb-2">{user.name}</div>
            <p className="text-gray-600">
              <span className="font-semibold">Age:</span> {user.age}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <Link to={`/${user._id}`} className='mr-5 font-semibold text-cyan-600 underline' onClick={""}>Edit</Link>
            <a href="" className='font-semibold text-red-600' onClick={()=> handleDelete(user._id)}>Delete</a>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Read;
