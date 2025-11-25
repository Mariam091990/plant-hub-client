import React from 'react';
import { useLoaderData } from 'react-router';
import PlantCard from '../components/PlantCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AllPlants = () => {

    const allplants =useLoaderData();

console.log(allplants);
   

    return (
        
    <div>

        <div className='fixed top-0 left-0 w-full z-30 bg-white shadow'>
        <Navbar></Navbar></div>

<div className='grid grid-cols-1 md:grid-cols-2 mt-35 container mx-auto gap-2 '>


 {allplants.map(plant =>  <PlantCard key={plant._id} plant={plant}>


 </PlantCard> 
    )}

</div>

<Footer></Footer>
</div>

        
    );
};

export default AllPlants;