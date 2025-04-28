import React from 'react';

function Certifications() {
  const certificates = [
    { 
      id: '1', 
      name: 'Server-side JavaScript with Node.js', 
      platform: 'Coursera', 
      url: 'https://www.coursera.org/learn/server-side-javascript-with-nodejs', 
      date: 'Apr 24' 
    },
    {
      id: '2',
      name: 'HTML, CSS, and JavaScript for Web Developers',
      platform: 'Coursera',
      url: 'https://www.coursera.org/learn/html-css-javascript-for-web-developers',
      date: 'Apr 24'
    },
    {
      id: '3',
      name: 'Foundations of User Experience Design',
      platform: 'Coursera',
      url: 'https://www.coursera.org/learn/foundations-user-experience-design?specialization=google-ux-design',
      date: 'Jul 24'
    },
    {
      id: '4',
      name: 'React.js Certification',
      platform: 'Scaler Topics',
      url: 'https://www.scaler.com/topics/course/free-react-js-course/',
      date: 'Dec 24'
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center w-full h-full py-5' data-aos='fade-in'>
      <h2 className="text-xl md:text-3xl text-[var(--text-color)] font-bold text-center md:mb-8 mb-6" data-aos="fade-down">
        Certifications
      </h2>
      
      <div className="relative w-full max-w-4xl">
        <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gray-300 transform -translate-x-1/2"></div>
        
        <div className="space-y-8 md:space-y-0">
          {certificates.reverse().map((certificate, index) => (
            <div 
              key={certificate.id} 
              className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              data-aos={`fade-${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="hidden md:block absolute left-1/2 top-0 h-5 w-5 mt-14 rounded-full bg-gray-300 transform -translate-x-1/2 hover:scale-110 duration-300"></div>              
              <div className={`w-full md:w-5/12 p-4 rounded-lg shadow-lg bg-[var(--secondary-bg-color)] hover:scale-105 transition-transform duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="flex flex-col h-full">
                  <h3 className="text-lg font-semibold text-[var(--text-color)] mb-1">{certificate.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-[var(--secondary-text-color)]">{certificate.platform}</span>
                    <span className="text-sm font-medium text-gray-600 bg-gray-200 px-2 py-1 rounded">
                      {certificate.date}
                    </span>
                  </div>
                  <a 
                    href={certificate.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-3 inline-block text-sm text-blue-500 hover:underline"
                  >
                    View Certificate →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;