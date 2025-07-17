import React, { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      let found = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = id;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <nav className="sticky top-0 z-10 bg-white shadow flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-extrabold text-3xl tracking-tight group relative transition-opacity duration-200 hover:opacity-80 md:ml-8">
          <span className="text-indigo-600">CE.</span>
          <span className="text-black">dev</span>
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full opacity-70"></span>
        </a>
        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black rounded my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex justify-center items-center gap-6 md:mr-8">
          <a href="#about" className={`uppercase font-extrabold text-base tracking-tight group relative transition-opacity duration-200 hover:opacity-80 ${activeSection === 'about' ? 'text-indigo-600' : 'text-black'}`}>About
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full opacity-70"></span>
          </a>
          <a href="#projects" className={`uppercase font-extrabold text-base tracking-tight group relative transition-opacity duration-200 hover:opacity-80 ${activeSection === 'projects' ? 'text-indigo-600' : 'text-black'}`}>Projects
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full opacity-70"></span>
          </a>
          <a href="#skills" className={`uppercase font-extrabold text-base tracking-tight group relative transition-opacity duration-200 hover:opacity-80 ${activeSection === 'skills' ? 'text-indigo-600' : 'text-black'}`}>Skills
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full opacity-70"></span>
          </a>
          <a href="#contact" className={`uppercase font-extrabold text-base tracking-tight group relative transition-opacity duration-200 hover:opacity-80 ${activeSection === 'contact' ? 'text-indigo-600' : 'text-black'}`}>Contact
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full opacity-70"></span>
          </a>
        </div>
        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 gap-4 md:hidden animate-fade-in z-20">
            <a href="#about" className={`uppercase font-extrabold text-base tracking-tight group relative transition-opacity duration-200 hover:opacity-80 ${activeSection === 'about' ? 'text-indigo-600' : 'text-black'}`} onClick={() => setIsMenuOpen(false)}>About
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full opacity-70"></span>
            </a>
            <a href="#projects" className={`uppercase font-extrabold text-base tracking-tight group relative transition-opacity duration-200 hover:opacity-80 ${activeSection === 'projects' ? 'text-indigo-600' : 'text-black'}`} onClick={() => setIsMenuOpen(false)}>Projects
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full opacity-70"></span>
            </a>
            <a href="#skills" className={`uppercase font-extrabold text-base tracking-tight group relative transition-opacity duration-200 hover:opacity-80 ${activeSection === 'skills' ? 'text-indigo-600' : 'text-black'}`} onClick={() => setIsMenuOpen(false)}>Skills
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full opacity-70"></span>
            </a>
            <a href="#contact" className={`uppercase font-extrabold text-base tracking-tight group relative transition-opacity duration-200 hover:opacity-80 ${activeSection === 'contact' ? 'text-indigo-600' : 'text-black'}`} onClick={() => setIsMenuOpen(false)}>Contact
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full opacity-70"></span>
            </a>
          </div>
        )}
      </nav>
      <section id="home" className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-blue-50 relative px-6">
        <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row justify-center items-center gap-12 md:gap-64 py-20 md:py-40 mx-auto">
          <div className="flex-1 flex flex-col justify-center items-center md:items-start w-full">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 tracking-tight text-gray-900 drop-shadow-sm">Hi I'm Morsid Mohammad</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 text-center md:text-left max-w-md font-semibold leading-relaxed">
              <span className="whitespace-nowrap">A self-taught and aspiring developer</span><br />
              making a career shift from Civil Engineering.
            </p>
            <p className="text-base md:text-lg text-gray-500 mb-12 text-center md:text-left max-w-lg leading-relaxed">Passionate about creating modern, responsive web applications with clean code and exceptional user experiences.</p>
          </div>
          <div className="flex-1 flex justify-center items-center md:ml-24">
            <img src="/darkmagic.png" alt="Avatar" className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-xl object-cover mb-6 border-4 border-white" />
          </div>
        </div>
        <a href="#about" className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-blue-600 hover:text-blue-800 transition-colors duration-300" aria-label="Scroll down">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>
      <section id="about" className="max-w-4xl mx-auto py-24 px-6 border-t border-gray-200 bg-white">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center uppercase">About</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">Dedicated developer with a strong foundation in modern web technologies, transitioning from Civil Engineering to pursue my passion for creating innovative digital solutions.</p>
      </section>
      <section id="projects" className="max-w-6xl mx-auto py-24 px-6 border-t border-gray-200 bg-gray-50">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center uppercase">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Portfolio Website</h3>
            <p className="text-gray-600 mb-4">A modern, responsive portfolio built with React and Tailwind CSS.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Tailwind</span>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="max-w-4xl mx-auto py-24 px-6 border-t border-gray-200 bg-white">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center uppercase">Skills</h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">Technologies I'm proficient in and actively learning:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg text-lg font-medium hover:bg-gray-200 transition-colors duration-300">Python</span>
          <span className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg text-lg font-medium hover:bg-gray-200 transition-colors duration-300">JavaScript</span>
          <span className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg text-lg font-medium hover:bg-gray-200 transition-colors duration-300">React</span>
          <span className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg text-lg font-medium hover:bg-gray-200 transition-colors duration-300">AutoCAD</span>
        </div>
      </section>
      <section id="contact" className="max-w-4xl mx-auto py-24 px-6 border-t border-gray-200 bg-gray-50 mb-10">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center uppercase">Contact</h2>
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">Let's connect and discuss opportunities!</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:your.email@example.com" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">Email Me</a>
            <a href="https://linkedin.com/in/yourprofile" className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
