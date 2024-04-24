import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Feed = () => {
  const [photos, setPhotos] = useState([]);
  let tempPhotosArr =[]

  useEffect(() => {
    // Fetch photos data from the backend API
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('/api/v1/photos/receive');
        console.log(response.data.data)
        
       
        setPhotos(response.data.data);
        console.log("photos ",photos)
        
      } catch (error) {
        console.error('Error fetching photos:', error);
      }

    };
    

    fetchPhotos();
  }, []); // Fetch photos only once on component mount

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Photo Feed</h1>
      <div className="grid grid-cols-3 gap-6">
        {photos.map(photo => (
          <div key={photo.title} className="bg-gray-100 rounded-md overflow-hidden shadow-md">
            <img src={photo.photoFile} alt={photo.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <div className="flex items-center mb-4">
                <img src={photo.owner_details.avatar} alt={photo.owner_details.username} className="w-10 h-10 rounded-full mr-2" />
                <span className="font-semibold text-gray-800">{photo.owner_details.username}</span>
              </div>
              <p className="text-gray-700">{photo.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    // <div>
    //     ji
    // </div>
  );
};

export default Feed;
