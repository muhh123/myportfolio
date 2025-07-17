import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaFacebook, FaGithub, FaUser, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [modalContent, setModalContent] = useState(null);
  const modalRef = React.useRef();

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

  // Accessibility: Close modal on Escape key
  useEffect(() => {
    if (!modalContent) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalContent(null);
      // Trap focus inside modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusableEls = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstEl = focusableEls[0];
        const lastEl = focusableEls[focusableEls.length - 1];
        if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        } else if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    // Focus modal on open
    setTimeout(() => {
      if (modalRef.current) {
        const btn = modalRef.current.querySelector('button, [tabindex="0"]');
        if (btn) btn.focus();
      }
    }, 0);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [modalContent]);

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
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 tracking-tight text-gray-900 drop-shadow-sm">
              Hi I'm <span className="text-indigo-600">Morsid Mohammad</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 text-center md:text-left max-w-md font-semibold leading-relaxed">
              <span className="whitespace-nowrap">A self-taught and aspiring developer</span><br />
              making a career shift from Civil Engineering.
            </p>
            {/* Replace the following paragraph with Download CV button and social icons */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
              <a
                href="/mycv.txt"
                download
                className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg font-semibold shadow text-lg md:text-xl hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-300 mb-4 md:mb-0 md:mr-6"
              >
                Download CV
              </a>
              <div className="flex gap-6 text-3xl">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
                  <FaLinkedin />
                </a>
                <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
                  <FaFacebook />
                </a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center md:ml-24 md:-ml-20 relative">
            {/* Soft radial glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[28rem] md:h-[28rem] bg-indigo-200 opacity-30 rounded-full blur-3xl z-0"></div>
            <img src="/darkmagic.png" alt="Avatar" className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-xl object-cover mb-6 border-4 border-white relative z-10" />
          </div>
        </div>
        <a href="#about" className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-blue-600 hover:text-blue-800 transition-colors duration-300" aria-label="Scroll down">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>
      <section id="about" className="max-w-4xl mx-auto py-24 px-6 border-t border-gray-200 bg-white relative">
        <h2 className="text-4xl font-bold mb-6 text-indigo-600 text-center uppercase">About</h2>
        <div className="flex justify-center gap-4 mb-8">
          <button
            className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={() => setModalContent('about')}
            aria-haspopup="dialog"
            aria-controls="about-modal"
          >
            <FaUser /> About Me
          </button>
          <button
            className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={() => setModalContent('education')}
            aria-haspopup="dialog"
            aria-controls="about-modal"
          >
            <FaGraduationCap /> Education
          </button>
          <button
            className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={() => setModalContent('experience')}
            aria-haspopup="dialog"
            aria-controls="about-modal"
          >
            <FaBriefcase /> Experience
          </button>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">Dedicated developer with a strong foundation in modern web technologies, transitioning from Civil Engineering to pursue my passion for creating innovative digital solutions.</p>
        {/* Modal overlay for About section */}
        {modalContent && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 animate-fade-in"
            style={{ pointerEvents: 'auto' }}
            aria-modal="true"
            role="dialog"
            id="about-modal"
          >
            <div
              ref={modalRef}
              className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative animate-slide-up"
              tabIndex={-1}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold focus:outline-none"
                onClick={() => setModalContent(null)}
                aria-label="Close modal"
              >
                &times;
              </button>
              {modalContent === 'about' && (
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold mb-4 text-indigo-600">About Me</h3>
                  <p className="text-gray-700 mb-2">I am a passionate developer making a career shift from Civil Engineering. I love building modern web applications and learning new technologies.</p>
                  <p className="text-gray-700">In my free time, I enjoy reading, exploring new tools, and contributing to open source.</p>
                </div>
              )}
              {modalContent === 'education' && (
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold mb-4 text-indigo-600">Education</h3>
                  <ul className="list-disc pl-5 text-gray-700 text-left mx-auto">
                    <li>B.Sc. in Civil Engineering</li>
                    <li>Self-taught in Web Development (React, JavaScript, Python, etc.)</li>
                  </ul>
                </div>
              )}
              {modalContent === 'experience' && (
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold mb-4 text-indigo-600">Experience</h3>
                  <ul className="list-disc pl-5 text-gray-700 text-left mx-auto">
                    <li>Freelance Web Developer (React, Tailwind CSS)</li>
                    <li>Internship: Junior Engineer (Civil Engineering)</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
      <section id="projects" className="max-w-6xl mx-auto py-24 px-6 border-t border-gray-200 bg-gray-50">
        <h2 className="text-4xl font-bold mb-12 text-indigo-600 text-center uppercase">Projects</h2>
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
        <h2 className="text-4xl font-bold mb-8 text-indigo-600 text-center uppercase">Skills</h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">Technologies I'm proficient in and actively learning:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg text-lg font-medium hover:bg-gray-200 transition-colors duration-300">Python</span>
          <span className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg text-lg font-medium hover:bg-gray-200 transition-colors duration-300">JavaScript</span>
          <span className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg text-lg font-medium hover:bg-gray-200 transition-colors duration-300">React</span>
          <span className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg text-lg font-medium hover:bg-gray-200 transition-colors duration-300">AutoCAD</span>
        </div>
      </section>
      <section id="contact" className="max-w-4xl mx-auto py-24 px-6 border-t border-gray-200 bg-gray-50 mb-10">
        <h2 className="text-4xl font-bold mb-8 text-indigo-600 text-center uppercase">Contact</h2>
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
