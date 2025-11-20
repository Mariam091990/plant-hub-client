import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const PlantDetails = () => {
    const plantData = useLoaderData(); // array of plants or single plant
    const { id } = useParams();

    const [plant, setPlant] = useState(null);

    useEffect(() => {
        if (Array.isArray(plantData)) {
            const found = plantData.find(p => p._id == id);
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setPlant(found);
        } else {
            // if loader already returns single plant object
            setPlant(plantData);
        }
    }, [plantData, id]);

    if (!plant) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    const {
        image,
        plantName,
        category,
        description,
        careLevel,
        wateringFrequency,
        lastWatered,
        nextWatered,
        healthStatus,
    } = plant;

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6">
            <div className="card bg-base-100 shadow-xl border">
                <figure className="h-80 w-full">
                    <img
                        src={image}
                        alt={plantName}
                        className="h-full w-full object-cover"
                    />
                </figure>

                <div className="card-body">
                    <h2 className="card-title text-3xl">{plantName}</h2>

                    <p className="text-gray-700">{description}</p>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <p><strong>Category:</strong> {category}</p>
                        <p><strong>Care Level:</strong> {careLevel}</p>
                        <p><strong>Watering:</strong> {wateringFrequency}</p>
                        <p><strong>Last Watered:</strong> {lastWatered}</p>
                        <p><strong>Next Watering:</strong> {nextWatered}</p>
                        <p><strong>Health Status:</strong> {healthStatus}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails;
