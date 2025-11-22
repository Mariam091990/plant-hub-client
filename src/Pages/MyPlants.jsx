import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData } from 'react-router';
// import PlantCard from '../components/PlantCard';
import PlantUpdtDel from '../components/PlantUpdtDel';

const MyPlants = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const plantadta = useLoaderData();
    console.log(plantadta);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-3 container mx-auto gap-2 '>


            {plantadta.map((plant) => <PlantUpdtDel key={plant._id} plant={plant}

            />

            )}

        </div>
    );
};

export default MyPlants;