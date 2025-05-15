import React from "react";

const GoalsGrid = () => {
  // قائمة الصور
  const images = [
    "src/assets/images/goal2.png",
    "src/assets/images/goal4.png",
    "src/assets/images/goal5.png",
    "src/assets/images/goal6.png",
    "src/assets/images/goal7.png",
    "src/assets/images/goal8.png",
    "src/assets/images/goal9.png",
    "src/assets/images/goal10.png",
    "src/assets/images/goal1.png",
    "src/assets/images/goal3.png",
    "src/assets/images/goal11.png",
    "src/assets/images/goal12.png",
  
  ];

  return (
    <div className="container mx-auto px-10 py-10">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Sustainability Goals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="bg-white p-2 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-80 h-fit object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsGrid;
