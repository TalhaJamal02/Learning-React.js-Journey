import React from "react";

function Card({ username, btnText = "Visit Me" }) {  // Default Value
  return (
    <>
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-56 object-cover"
          src="https://images.pexels.com/photos/5473311/pexels-photo-5473311.jpeg?cs=srgb&dl=pexels-cottonbro-5473311.jpg&fm=jpg&_gl=1*1lfmrir*_ga*MTI2OTQ2MDI0Mi4xNzI2NzUxNDA1*_ga_8JE6  5Q40S6*MTcyNzc3Mjk4OS41LjEuMTcyNzc3MzAxMS4wLjAuMA.."
          alt="Card Image"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold text-white">{username}</h2>
          <p className="mt-2 text-white">
            This is a short description or content for the card. You can add more details as needed
          </p>
          <div className="flex justify-between items-center mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">{btnText}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;
