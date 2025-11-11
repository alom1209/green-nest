import { Leaf } from 'lucide-react';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaLeaf } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { IoLogInOutline } from 'react-icons/io5';
import { RiPlantLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links=<>
  <div className='flex flex-col md:flex-row gap-2 md:gap-5'>
      <NavLink to='/' className={({isActive}) => isActive?'text-blue-600 border-b-2 border-blue-600 font-medium':'font-medium hover:text-blue-600'}><div className='flex items-center gap-1'>
        <IoMdHome />Home
        </div></NavLink>
      <NavLink to='/plant' className={({isActive}) => isActive?'text-blue-600 border-b-2 border-blue-600 font-medium':'font-medium hover:text-blue-600'}><div className='flex items-center gap-1'>
        <RiPlantLine />Plant
        </div></NavLink>
      <NavLink to='/profile' className={({isActive}) => isActive?'text-blue-600 border-b-2 border-blue-600 font-medium':'font-medium hover:text-blue-600'}><div className='flex items-center gap-1'>
        <CgProfile />My Profile
        </div></NavLink>
   
  </div>
    </>
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <Link to='/'>
    <div className='flex gap-2 items-center'>
       <FaLeaf />
        <p className='text-xl font-bold'>GreenNest</p>
    </div>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
    <Link className='btn btn-primary hover:btn-secondary'>
    <div className='flex items-center gap-1
    '>
        <IoLogInOutline />
        <p>Login</p>
    </div>
    </Link>
  </div>
</div>
    );
};

export default Navbar;