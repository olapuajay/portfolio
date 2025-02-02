import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items with their corresponding section IDs
  const navItems = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'projects', text: 'Projects' },
    { id: 'contact', text: 'Contact' },
  ];

  return (
    <div className='bg-transparent flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 text-white'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-[#6366F1]'> {"<A />"} </h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li key={item.id} className='px-4 py-2 rounded-xl m-2 cursor-pointer duration-300 text-gray-500 hover:text-white'>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ul>
      <div className='line h-6 w-0.5 rounded-3xl bg-[#9CA3AF] mx-2 hidden md:flex'></div>
      <button className='bg-[#6366F1] py-2 px-4 rounded-xl text-white text-center font-semibold hover:bg-[#637bf1] duration-300 min-w-35 cursor-pointer hidden md:flex'>
         Download CV 
      </button>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#6366F1] m-4'> {"<A />"} </h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li key={item.id} className='p-4 rounded-xl hover:bg-[#6366F1] duration-300 hover:text-black cursor-pointer border-gray-600'>
            <a href={`#${item.id}`} onClick={() => setNav(false)}>{item.text}</a>
          </li>
        ))}
        <button className='bg-[#6366F1] py-2 px-4 my-2 mx-3.5 rounded-xl font-bold text-white w-40 cursor-pointer'>
         Download CV 
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
