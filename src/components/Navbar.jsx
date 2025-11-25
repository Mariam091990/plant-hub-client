/* eslint-disable react-hooks/set-state-in-effect */
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import userIcon from '../assets/user.png'
import plant from '../assets/plant.jpg'






const Navbar = () => {


 const links = <>

    <NavLink to="/"><li className='m-2 btn'> Home</li></NavLink>
    <NavLink to="/allplants"><li className='m-2 btn'>  All Plants</li></NavLink>
    <NavLink to="/addplants"><li className='m-2 btn'>Add Plants</li></NavLink>
    <NavLink to="/myplants"><li className='m-2 btn'> My Plants </li></NavLink>

  </>

const { user, logOut} =useContext(AuthContext);
// console.log(user);

const [name, setName]= useState("");
// console.log(user ,name);
const navigate = useNavigate();





 useEffect(() => {

 
  setName(user?.displayName || "");
  
  
  
}, [user]);


const handleLogout =()=>{


      Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!"
    })
    
    .then((result) => {
      if (result.isConfirmed) {
        logOut();
          Swal.fire("Logged out!", "You have been logged out successfully.", "success")
          .then(() => {
            navigate("/");
          });
      }
    })
        .catch((error) => {
       
      console.log(error);
     });

}





    return (
        <div>
             <div className="navbar bg-base-100 shadow-sm z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
         <div className=' flex' > 
          <img className=' w-10 sm:w-16 md:w-20' src={plant} alt="eventLogo" />
          <a className="btn btn-ghost text-lg  sm:text-xl  md:text-2xl lg:text-2xl   mt-4 sm:mt-6  text-blue-400 font-serif" ><Link to='/' >  Plant~Hub </Link></a>
          </div>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        
        
        <div className="navbar-end flex gap-3">



          <div className="tooltip tooltip-bottom p-1" 
          data-tip={`${name}\n ${user?.email}`}

          >
            {/* <div className="tooltip-content">
              <div className="animate-bounce text-blue-400 -rotate-10 text-sm ">{name}</div>
              <div className="animate-bounce text-blue-400 -rotate-10 text-sm ">{user && user.email}</div>
            </div> */}

            <button> <img className='w-10 h-10 rounded-full border-2 border-blue-400' src={user ? user.photoURL : userIcon} alt="user" /></button>

          </div>


          

          {user ? (<button onClick={handleLogout} className='btn btn-primary mr-6' >logout</button>) :
            (<Link to="/auth/login" className='btn btn-primary mr-6' >LogIn</Link>)}
        </div>
      </div>
        </div>
    );
};

export default Navbar;