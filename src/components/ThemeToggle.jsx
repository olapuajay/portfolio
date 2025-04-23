import {useState, useEffect} from 'react'
import { SunIcon, MoonIcon } from 'lucide-react';

function ThemeToggle() {
  const [isDarkmode, setIsDarkmode] = useState(true);
  const [toggletip, setToggletip] = useState(false);
  const handleMouseEnter = () => {
    setToggletip(true);
  }
  const handleMouseLeave = () => {
    setToggletip(false);
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }, []);
  
  const toggleTheme = () => {
    const newTheme = isDarkmode ? 'light' : 'dark';
    setIsDarkmode(!isDarkmode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }
  return (
    <div className="relative flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button onClick={toggleTheme} className='p-1.5 rounded-lg text-xl mr-2 text-[var(--secondary-text-color)] hover:bg-[#9CA3AF] hover:text-[var(--text-color)] duration-300 cursor-pointer'>
        {isDarkmode ? <SunIcon /> : <MoonIcon />} 
      </button>

      {toggletip && (
        <p className='absolute top-full mt-2 px-2 py-1 text-sm text-white bg-gray-500 rounded-md z-10 w-26 text-center'>
          Switch Theme
        </p>
      )}
    </div>
  )
}

export default ThemeToggle
