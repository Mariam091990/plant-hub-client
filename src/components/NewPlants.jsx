import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const NewPlants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("https://plant-hub-server.vercel.app/plants?sortBy=date")
      .then(res => res.json())
      .then(data => setPlants(data.slice(0, 6))); 
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-16">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
        🌱 New Arrivals Plants
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {plants.map(plant => (
          <div key={plant._id} className="card bg-base-100 shadow">
            <figure>
              <img src={plant.image} className="h-48 w-full object-cover" />
            </figure>

            <div className="card-body">
              <h3 className="card-title">{plant.plantName}</h3>
              <p className="text-gray-600">{plant.category}</p>

              <Link
                to={`/plantdetails/${plant._id}`}
                className="btn btn-primary mt-3"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewPlants;
