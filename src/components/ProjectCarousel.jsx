import React, {useState, useEffect} from 'react'

function ProjectCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    setInterval(() => {
      nextSlide()
    }, 3000)
  }, [])

  return (
    <div className='relative w-full'>
      <div className='relative h-40 overflow-hidden rounded-lg md:h-65'>
        {images.map((image, index) => (
          <div key={index} className={`absolute w-full h-full flex items-center justify-center transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
            {!isLoaded && (
              <div className='w-full h-full bg-gray-700 animate-pulse rounded-lg'></div>
            )}
            <img src={image} alt="..." className={`${isLoaded ? 'block' : 'hidden'} w-full rounded-lg`} onLoad={() => setIsLoaded(true)} onContextMenu={(e) => e.preventDefault()} draggable="false" />
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <button onClick={prevSlide} className='absolute top-1/2 left-0 transform -translate-y-1/2 md:px-4 md:py-2 px-2 py-1 bg-gray-800 opacity-70 hover:opacity-100 duration-300 rounded-full text-white cursor-pointer'>
        <i className='fas fa-chevron-left'></i>
      </button>
      <button onClick={nextSlide} className='absolute top-1/2 right-0 transform -translate-y-1/2 md:px-4 md:py-2 px-2 py-1 bg-gray-800 opacity-70 hover:opacity-100 duration-300 rounded-full text-white cursor-pointer'>
        <i className='fas fa-chevron-right'></i>
      </button>
    </div>
  )
}

export default ProjectCarousel
