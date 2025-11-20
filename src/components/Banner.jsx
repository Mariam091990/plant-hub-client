import React from 'react';
import { Link } from 'react-router';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide,Swiper  } from 'swiper/react';

import "swiper/css/bundle";

const Banner = () => {
    return (
        <div className='w-full max-w-7xl mx-auto mt-7'>
            



 <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="rounded-xl shadow-lg"
            >


{/* plant care */}

                <SwiperSlide>
                    <div className="h-[400px] bg-green-100 flex flex-col justify-center items-center text-center p-10">
                        <h1 className="text-4xl font-bold text-green-700">Plant Care Tips</h1>
                        <p className="text-lg mt-3 text-gray-600">
                            Learn how to nurture your plants with sunlight, watering routines, and proper soil selection.
                        </p>
                        <Link to="/care-tips">
                            <button className="mt-5 px-6 py-2 bg-green-600 text-white rounded-lg">
                                Explore Tips
                            </button>
                        </Link>
                    </div>
                </SwiperSlide>
{/* Plant Varieties */}



<SwiperSlide>
                    <div className="h-[400px] bg-lime-100 flex flex-col justify-center items-center text-center p-10">
                        <h1 className="text-4xl font-bold text-lime-700">Discover Plant Varieties</h1>
                        <p className="text-lg mt-3 text-gray-600">
                            From succulents to ferns — explore unique plant types perfect for your home.
                        </p>
                        <Link to="/plants">
                            <button className="mt-5 px-6 py-2 bg-lime-600 text-white rounded-lg">
                                View All Plants
                            </button>
                        </Link>
                    </div>
                </SwiperSlide>

{/*Watering Guide  */}


 <SwiperSlide>
                    <div className="h-[400px] bg-emerald-100 flex flex-col justify-center items-center text-center p-10">
                        <h1 className="text-4xl font-bold text-emerald-700">Watering Reminders</h1>
                        <p className="text-lg mt-3 text-gray-600">
                            Maintain a healthy watering schedule and keep your plants thriving all year.
                        </p>
                        <Link to="/watering-guide">
                            <button className="mt-5 px-6 py-2 bg-emerald-600 text-white rounded-lg">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </SwiperSlide>


{/*   Potting & Soil Guide*/}


  <SwiperSlide>
                    <div className="h-[400px] bg-green-200 flex flex-col justify-center items-center text-center p-10">
                        <h1 className="text-4xl font-bold text-green-800">Potting & Soil Guide</h1>
                        <p className="text-lg mt-3 text-gray-700">
                            Discover the best soil mixes and potting methods for strong, healthy plant growth.
                        </p>
                        <Link to="/soil-guide">
                            <button className="mt-5 px-6 py-2 bg-green-700 text-white rounded-lg">
                                Learn Potting Tips
                            </button>
                        </Link>
                    </div>
                </SwiperSlide>






            </Swiper>
















        </div>
    );
};

export default Banner;