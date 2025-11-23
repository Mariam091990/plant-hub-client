import React from 'react';
import NewPlants from '../components/NewPlants';
import SecOne from '../components/SecOne';
import SecTwo from '../components/SecTwo';

const Home = () => {
    return (
        <div>
           <NewPlants></NewPlants> 
           <SecOne></SecOne>
           <SecTwo></SecTwo>
        </div>
    );
};

export default Home;