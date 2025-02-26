import {useState, useEffect} from 'react'

function ThemeToggle() {
  const [isDarkmode, setIsDarkmode] = useState(true);
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
    <button onClick={toggleTheme} className='p-1.5 rounded-lg text-xl mr-2 hover:bg-[#9CA3AF] duration-300 cursor-pointer'>
      {isDarkmode ? '🌞' : '🌙'}
    </button>
  )
}

export default ThemeToggle
