import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData } from 'react-router';

import PlantUpdtDel from '../components/PlantUpdtDel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyPlants = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const plantadta = useLoaderData([]);
    // console.log(plantadta);

    const [plants, setPlants] = useState(plantadta);



    return (

        <div>

            <div className='fixed top-0 left-0 w-full z-30 bg-white shadow"'> <Navbar></Navbar> </div>

            <div className='grid grid-cols-1 md:grid-cols-2 mt-35 container mx-auto gap-2 '>


                {plants.map((plant) =>
                    <PlantUpdtDel
                        key={plant._id}
                        plant={plant}
                        plants={plants}
                        setPlants={setPlants}

                    />

                )}

            </div>

            <Footer></Footer>
        </div>
    );
};

export default MyPlants;