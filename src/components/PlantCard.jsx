import React from 'react';
import { Link } from 'react-router';

const PlantCard = ({ plant }) => {
    const { image, wateringFrequency, plantName, category, _id } = plant;

    return (
        <div className='container mx-auto'>


        <div className="card bg-base-100 shadow-md gap-5  cursor-pointer w-[70%] h-96 mask-t-from-90% mt-12">
            <figure className="h-48 w-full">
                <img
                    src={image}
                    alt={plantName}
                    className="h-full w-full object-cover"
                />
            </figure>

            <div className="card-body">
                <h2 className="card-title hover:underline ">{plantName}</h2>

                <p className="text-sm text-gray-600">
                    <span className="font-semibold hover:bg-gray-500">Category:</span> {category}
                </p>

                <p className="text-sm text-gray-600">
                    <span className="font-semibold">Watering:</span> {wateringFrequency}
                </p>

                <div className="card-actions justify-end mt-auto">
                    <Link className="btn btn-primary btn-sm" to={`/plantdetails/${_id}`}>  
                        View Details
                   </Link>
                </div>
            </div>
        </div></div>
    );
};

export default PlantCard;
