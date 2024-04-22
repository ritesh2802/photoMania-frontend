import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [selectedFiles, setSelectedFiles] = useState({ avatar: "", coverImage: "" });
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    username: '',
    password: ''
  });
  const [loading,setLoading] = useState(false);

  const handleFileChange = (event) => {
    console.log(event.target.name)

    const { name, files } = event.target;
    setSelectedFiles({
      ...selectedFiles,
      [name]: files[0]
    })

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(()=>{
    console.log(loading)
  })




  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);

    try {
      const response = await axios.post('/api/v1/users/register', data);
      console.log(response.data);
      // change

  
      alert(response.data.message)
      setFormData({
        email: '',
        fullName: '',
        username: '',
        password: ''
      })
      setSelectedFiles({ avatar:"", coverImage:"" });
     navigate("/login")
      

    } 
    catch (error) {
        alert('Error uploading file:', error);
        console.log(('Error uploading file:', error))
    }
    finally{
        setLoading(false)
    }

  };



  const data = new FormData();
  data.append('avatar', selectedFiles.avatar);
  data.append('coverImage', selectedFiles.coverImage);
  data.append('email', formData.email);
  data.append('fullName', formData.fullName);
  data.append('username', formData.username);
  data.append('password', formData.password);





  return (
    <>
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-400 to-purple-400 font-sans">

      <div className="max-w-md w-[90%] mx-auto my-10 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-bold font-['inter'] mb-5">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="text-xl font-medium font-['Inter'] ">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none  focus:ring"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fullName" className="text-xl font-medium font-['Inter'] ">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={(e) => handleChange(e)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="text-xl font-medium font-['Inter'] ">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={(e) => handleChange(e)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-xl font-medium font-['Inter'] ">Password</label>
            <input
              type="password"
              value={formData.password}
              id="password"
              name="password"
              onChange={(e) => handleChange(e)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-black-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="avatar" className="text-xl font-medium font-['Inter'] ">Avatar</label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              onChange={handleFileChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="coverImage" className="text-xl font-medium font-['Inter'] ">Cover Image</label>
            <input
              type="file"
              id="coverImage"
              name="coverImage"
              
              onChange={handleFileChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-black-300"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">Sign Up</button>
        </form>
        
      </div>
    </div>
      {loading && <div className="flex justify-center items-center">
                    <div className="border-4 border-solid border-gray-200 border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
                    </div>
        }
    </>
  );
}


export default Signup;