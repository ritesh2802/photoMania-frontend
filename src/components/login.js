import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import api from "./api.js"
const Login = ({setIsLoggedIn}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission here
    try {
      // https://photo-mania-backend.vercel.app/api/v1/users/login
      // http://localhost:8000/api/v1/users/login
      const config = {
        headers: {
          "Content-Type": "application/json"
          },
          withCredentials: true
        }
        const response = await axios.post('https://photo-mania-backend.vercel.app/api/v1/users/login', formData,config);
        console.log(response.data);
        setLoading(true)
        // alert(response.data.message)
        setFormData({
            email:"",
            password:""
        })
        setIsLoggedIn(true)
        navigate("/upload-image")
      } 
      catch (error) {
        console.error('Error uploading file:', error);
      }
      finally{
        setLoading(false)
    }

  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-400 to-purple-400 font-sans">

    <div className="max-w-md w-[35%] mx-auto my-[80px] p-6 bg-white rounded-md shadow-md  ">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} method="post">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">Login</button>
      </form>
     
    </div>
    </div>
    
     {loading && <div className="flex justify-center items-center">
     <div className="border-4 border-solid border-gray-200 border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
     </div>
    }
    </>
  );
};

export default Login;