import React from 'react';

const SecTwo = () => {
    return (
        
            <div className="max-w-6xl mx-auto mt-20 mb-20">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
        💼 Low-Maintenance Office Plants
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="p-5 shadow rounded-xl bg-white">
          <img
            src="https://i.ibb.co.com/jt6h1rC/zzplant.webp"
            className="h-44 w-full object-cover rounded"
          />
          <h3 className="text-xl font-medium mt-3">ZZ Plant</h3>
          <p className="text-gray-600">Survives with minimal light & water.</p>
        </div>

        <div className="p-5 shadow rounded-xl bg-white">
          <img
            src="https://i.ibb.co.com/W40PmGFm/peace-lily.jpg"
            className="h-44 w-full object-cover rounded"
          />
          <h3 className="text-xl font-medium mt-3">Peace Lily</h3>
          <p className="text-gray-600">Great for air purification.</p>
        </div>

        <div className="p-5 shadow rounded-xl bg-white">
          <img
            src="https://i.ibb.co.com/rRpYzVH9/spiderplant.webp"
            className="h-44 w-full object-cover rounded"
          />
          <h3 className="text-xl font-medium mt-3">Spider Plant</h3>
          <p className="text-gray-600">Perfect for desks — very low care.</p>
        </div>
      </div>
        </div>
    );
};

export default SecTwo;