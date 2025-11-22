import React from 'react';
import { useLoaderData } from 'react-router';

const Update = () => {
const  { image, wateringFrequency, plantName, description,category, _id } =useLoaderData();

const handleUpdatePlant = e =>{
 e.preventDefault();

}











    return (
        <div>
            


<div className="max-w-3xl mx-auto p-6 bg-green-50 rounded-xl mt-10">
                <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
                   Update the Added Plant
                </h2>

                <form onSubmit={handleUpdatePlant} className="grid grid-cols-1 gap-5">

                    {/* Image */}
                    <div>
                        <label className="font-semibold">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            required
                            className="w-full p-3 border rounded"
                            placeholder="Enter Image URL"
                        />
                    </div>

                    {/* Plant Name */}
                    <div>
                        <label className="font-semibold">Plant Name</label>
                        <input
                            type="text"
                            name="plantName"
                            required
                            className="w-full p-3 border rounded"
                            placeholder="Enter Plant Name"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div>
                        <label className="font-semibold">Category</label>
                        <select
                            name="category"
                            required
                            className="w-full p-3 border rounded"
                        >
                            <option value="">Select Category</option>
                            <option value="succulent">Succulent</option>
                            <option value="fern">Fern</option>
                            <option value="flowering">Flowering</option>
                            <option value="cactus">Cactus</option>
                            <option value="indoor">Indoor Plant</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="font-semibold">Description</label>
                        <textarea
                            name="description"
                            required
                            className="w-full p-3 border rounded"
                            placeholder="Write plant description"
                        ></textarea>
                    </div>

                    {/* Care Level Dropdown */}
                    <div>
                        <label className="font-semibold">Care Level</label>
                        <select
                            name="careLevel"
                            required
                            className="w-full p-3 border rounded"
                        >
                            <option value="">Select Care Level</option>
                            <option value="easy">Easy</option>
                            <option value="moderate">Moderate</option>
                            <option value="difficult">Difficult</option>
                        </select>
                    </div>

                    {/* Watering Frequency */}
                    <div>
                        <label className="font-semibold">Watering Frequency</label>
                        <input
                            type="text"
                            name="wateringFrequency"
                            required
                            className="w-full p-3 border rounded"
                            placeholder="e.g., every 3 days"
                        />
                    </div>

                    {/* Last Watered Date */}
                    <div>
                        <label className="font-semibold">Last Watered Date</label>
                        <input
                            type="date"
                            name="lastWatered"
                            required
                            className="w-full p-3 border rounded"
                        />
                    </div>

                    {/* Next Watered Date */}
                    <div>
                        <label className="font-semibold">Next Watered Date</label>
                        <input
                            type="date"
                            name="nextWatered"
                            required
                            className="w-full p-3 border rounded"
                        />
                    </div>

                    {/* Health Status */}
                    <div>
                        <label className="font-semibold">Health Status</label>
                        <input
                            type="text"
                            name="healthStatus"
                            required
                            className="w-full p-3 border rounded"
                            placeholder="e.g., healthy, needs attention"
                        />
                    </div>

                    {/* User Email – Auto-filled */}
                    {/* <div>
                        <label className="font-semibold">User Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            disabled
                            value={user?.email || ""}
                            className="w-full p-3 border rounded bg-gray-100"
                        />
                    </div> */}

                    {/* User Name – Auto-filled */}
                    {/* <div>
                        <label className="font-semibold">User Name</label>
                        <input
                            type="text"
                            name="userName"
                            disabled
                            value={user?.displayName || ""}
                            className="w-full p-3 border rounded bg-gray-100"
                        />
                    </div> */}

                    <button
                        type="submit"
                        className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
                    >
                       Update Plant
                    </button>

                </form>
            </div>
















        </div>
    );
};

export default Update;