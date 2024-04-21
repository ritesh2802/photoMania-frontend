// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import himalya from "../static/featuredImage/himalya.jpg"
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 font-sans">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">Welcome to <span className="text-5xl">PhotoMania</span></h1>
        <p className="text-lg text-white">Discover and share amazing photos</p>
      </header>
      <section className="max-w-3xl w-full mx-auto mb-8 bg-white bg-opacity-75 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Photos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Render featured photos here */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <img className="w-full" src="" alt="Featured" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img className="w-full" src="https://via.placeholder.com/150" alt="Featured" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img className="w-full" src="https://via.placeholder.com/150" alt="Featured" />
          </div>
          {/* Add more photos as needed */}
        </div>
      </section>
      <section className="text-center ">
        <h2 className="text-2xl font-semibold mb-4 text-white">Join PhotoMania today!</h2>
        <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg ">Sign Up</Link>
        <div className="text-white mt-2">Already have an account? <Link to="/login" className="text-blue-500 text-16 font-semibold hover:text-blue-600">Log In</Link></div>
      </section>
    </div>
  );
};

export default Home;
