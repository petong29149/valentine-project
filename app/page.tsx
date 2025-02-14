"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true); // State to control popup visibility
  const [bounceClass, setBounceClass] = useState("animate-bounce"); // State to control bounce animation

  // Stop bounce animation after 2 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setBounceClass(""); // Remove bounce class
    }, 1440);
    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

  const handleClosePopup = () => {
    setBounceClass("animate-bounce-out"); // Add bounce-off animation
    setTimeout(() => {
      setShowPopup(false); // Remove popup after animation
    }, 500); // Ensure the animation duration matches the Tailwind config
  };

  return (
    <div className="min-h-screen flex flex-col bg-pink-400" 
      style={{  backgroundImage:"url('/pink_background.png')",
                backgroundPosition: "center",
                backgroundSize: "cover", 
                backgroundRepeat: "no-repeat" 
                }}>
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className={`bg-white rounded-lg p-4 w-[300px] text-center transition-transform duration-500 ${bounceClass}`}
          >
            <h2 className="text-2xl font-bold text-pink-600">
              No matter who you are,
            </h2>
            <p className="text-lg mt-2 text-pink-800">
              Everyone deserves love. <br />
              especially <span className="font-bold">Mild</span>, my best girl
            </p>
            <div className="my-1 text-[5rem] animate-bounce">
              ❤️
            </div>
            <button
              onClick={handleClosePopup}
              className=" bg-pink-500 text-white px-4 py-2 rounded transition-all ease-in-out duration-200 hover:bg-pink-600 hover:scale-105"
            >
              Get your Love ❤️
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="w-full text-center text-3xl py-3">
        <p>Valentine's Day</p>
        <p className="text-xl">is here for you all</p>
      </div>
      <div className="flex-grow">
        <div className="container mx-auto"></div>
      </div>
      <div className="w-full text-center">footer</div>
    </div>
  );
}
