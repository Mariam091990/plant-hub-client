import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';


const PlantUpdtDel = ({ plant, plants , setPlants }) => {
    const { image, wateringFrequency, plantName, category, _id } = plant;


    const handleDelete= (_id)=>{
 console.log(_id);

 Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

fetch(`https://plant-hub-server.vercel.app/plants/${_id}`, {
method: 'DELETE'

})

.then (res=>res.json())
.then (data=>{
    if (data.deletedCount) {
        Swal.fire({
      title: "Deleted!",
      text: "plant has been deleted.",
      icon: "success"
    });

const remainingPlants = plants. filter (singlePlant => singlePlant._id !== _id )

setPlants(remainingPlants);
    }
})


    
  }
});
        
    }

    return (
        <div>
            <div className='container mx-auto'>



                <div className="card bg-base-100 shadow-md gap-5 cursor-pointer w-[90%] h-96 mask-t-from-90% mt-12">
                    <figure className="ml-6 h-48 w-[60%] justify-center">
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

                     
                    </div>
                </div>

                <div className="w-[50%] mx-auto flex gap-2">
                    <button> <Link className="btn btn-active btn-primary" to={`/plantdetails/${_id}`}>View</Link></button>
                    <button> <Link className="btn btn-active btn-secondary" to={`/update/${_id}`} >Update </Link> </button>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-active btn-accent">Delete</button>
                </div>



            </div>

        </div>
    );
};

export default PlantUpdtDel;