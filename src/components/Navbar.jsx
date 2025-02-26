import React, { useEffect, useState } from 'react';
import resume from '../assets/resume.pdf';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showNavbar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 'about', text: 'About' },
    { id: 'projects', text: 'Projects' },
    { id: 'contact', text: 'Contact' },
  ];

  const controlNavbar = () => {
    if(typeof window !== 'undefined') {
      if(window.scrollY > lastScrollY) {
        setShowNavBar(false);
      } else {
        setShowNavBar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if(typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  return (
    <div className={`md:bg-transparent bg-[#030712] md:backdrop-blur-2xl flex justify-between items-center h-16 w-full fixed top-0 left-0 z-50 px-4 text-white transition-transform duration-300 ${showNavbar ? 'md:translate-y-0' : 'md:-translate-y-full'}`}>
      {/* Logo */}
      <h1 className='w-full md:text-3xl text-2xl font-bold text-[#6366F1]'> 
        <a href="#home" className='cursor-pointer'> {"<A />"} </a>
      </h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li key={item.id} className='px-4 py-2 rounded-xl m-2 cursor-pointer duration-300 text-[#9CA3AF] hover:text-white'>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ul>
      <div className='line h-6 w-0.5 rounded-3xl bg-[#9CA3AF] mx-2 hidden md:flex'></div>
      <button className='p-1.5 rounded-lg text-xl hover:bg-[#9CA3AF] mr-2 duration-300 cursor-pointer hidden md:flex'>
        🌞
      </button>
      <a href={resume} target='_blank' rel='noopener noreferrer' className='bg-[#6366F1] py-2 px-4 rounded-xl text-white text-center font-semibold hover:bg-[#637bf1] duration-300 min-w-35 cursor-pointer hidden md:flex'>
        Download CV
      </a>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <i className='fas fa-times text-xl'></i> : <i className='fas fa-bars text-xl'></i>}
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
        <h1 className='w-full text-2xl font-bold text-[#6366F1] m-4'> 
          <a href="#home">
            {"<A />"} 
          </a>
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li key={item.id} className='p-4 rounded-xl hover:bg-[#6366F1] duration-300 hover:text-black cursor-pointer border-gray-600'>
            <a href={`#${item.id}`} onClick={() => setNav(false)}>{item.text}</a>
          </li>
        ))}
        <div className='flex flex-col justify-center items-center'>
          <button className='bg-[#9CA3AF] py-2 px-3 rounded-xl font-bold text-center'>Switch Theme 🌞</button>
          <button className='bg-[#6366F1] py-2 px-4 my-2 mx-3.5 rounded-xl font-bold text-white w-40 cursor-pointer'>
          Download CV 
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
