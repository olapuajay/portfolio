import React, { useEffect, useState, useRef } from 'react';
import resume from '../assets/resume.pdf';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showNavbar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClickOutside = (e) => {
    if(navRef.current && !navRef.current.contains(e.target)) {
      setNav(false);
    }
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
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [lastScrollY]);

  return (
    <div className={`md:bg-transparent bg-[var(--background-color)] md:backdrop-blur-2xl flex justify-between items-center md:h-16 w-full h-14 fixed top-0 left-0 z-50 px-4 text-white transition-transform duration-300 ${showNavbar ? 'md:translate-y-0' : 'md:-translate-y-full'}`}>
      {/* Logo */}
      <h1 className='w-full md:text-3xl text-2xl font-bold text-[#6366F1]'> 
        <a href="#home" className='cursor-pointer'> {"<A />"} </a>
      </h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li key={item.id} className='px-4 py-2 rounded-xl m-2 cursor-pointer duration-300 text-[var(--secondary-text-color)] hover:text-[var(--text-color)]'>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ul>
      <div className='line h-6 w-0.5 rounded-3xl bg-[#9CA3AF] mx-2 hidden md:flex'></div>
      <ThemeToggle />
      <a href={resume} target='_blank' rel='noopener noreferrer' className='bg-[#6366F1] py-2 px-4 rounded-xl text-[var(--text-color)] text-center font-semibold hover:bg-[#637bf1] duration-300 min-w-35 cursor-pointer hidden md:flex'>
        Download CV
      </a>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden text-[var(--secondary-text-color)]'>
        {nav ? <i className='fas fa-times text-xl'></i> : <i className='fas fa-bars text-xl'></i>}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
      ref={navRef}
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-[#9CA3AF] bg-[var(--background-color)] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-2xl font-bold text-[#6366F1] m-4'> 
          <a href="#home" onClick={() => setNav(false)}>
            {"<A />"} 
          </a>
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li key={item.id} className='p-4 rounded-xl hover:bg-[#6366F1] duration-300 hover:text-black cursor-pointer border-gray-600 text-[var(--text-color)]'>
            <a href={`#${item.id}`} onClick={() => setNav(false)}>{item.text}</a>
          </li>
        ))}
        <div className='flex flex-col justify-center items-center'>
          <a href={resume} target='_blank' rel='noopener noreferrer' onClick={() => setNav(false)} className='bg-[#6366F1] py-2 px-4 my-2 mx-3.5 rounded-xl font-bold text-white w-40 cursor-pointer'>
            Download CV 
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
