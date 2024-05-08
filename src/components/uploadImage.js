// UploadPhoto.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const UploadPhoto = ({ isLoggedIn }) => {
  const [photo, setPhoto] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const navigate = useNavigate();
  console.log(isLoggedIn)
  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    console.log(selectedPhoto)
    setPhoto(selectedPhoto);
    if (selectedPhoto) {
      const url = URL.createObjectURL(selectedPhoto);
      setPreviewUrl(url);
    }
  };

  const data = new FormData();
  data.append('photoFile', photo);
  console.log('Uploading photo:', data);

  const handleUpload = async() => {
    // Perform upload logic
    if (isLoggedIn) {
      console.log(isLoggedIn)
      // Upload photo
      
      // http://localhost:8000/api/v1/photos/upload
      try {
        const response = await axios.post("/api/v1/photos/upload",data)
        console.log(response)
      } catch (error) {
        alert('Error uploading file:', error);
        console.log(('Error uploading file:', error))
        
      }
      // After successful upload, redirect to another page or show success message
      // navigate("/feed")
    } else {
      // Redirect to home page if user is not logged in
      alert("please log in")
      navigate("/home")
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-400 to-purple-400 font-sans">
      <div className="max-w-md mx-auto my-16 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Upload Photo</h2>
        {previewUrl && (
          <img src={previewUrl} alt="Preview" className="mb-4 max-w-full h-auto" />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="mb-4"
        />
        <button
          onClick={handleUpload}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadPhoto;
