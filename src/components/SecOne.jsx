import React from 'react';

const SecOne = () => {


const plants = [
    {
      name: "Aloe Vera",
      img: "https://i.ibb.co.com/gMgyqx33/Aloe-vera.jpg",
      reason: "Perfect for winter skin care"
    },
    {
      name: "Snake Plant",
      img: "https://i.ibb.co.com/v6fckSPf/snake.jpg",
      reason: "Thrives in low light during colder months"
    },
    {
      name: "Lavender",
      img: "https://i.ibb.co.com/1fgkk83y/lavender.jpg",
      reason: "Brings calming aroma in changing seasons"
    }
  ];



    return (
        <div>
            

<div className="max-w-6xl mx-auto mt-20">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        🌸 Seasonal Plants
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {plants.map((p, idx) => (
          <div key={idx} className="card shadow bg-base-100">
            <figure>
              <img src={p.img} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="font-semibold text-xl">{p.name}</h3>
              <p className="text-gray-600">{p.reason}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


        </div>
    );
};

export default SecOne;