import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaFacebook, FaGithub, FaUser, FaGraduationCap, FaBriefcase, FaCode, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { SiJavascript, SiReact, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiPython, SiDjango, SiFlask, SiBootstrap, SiNodedotjs, SiFigma, SiGit, SiGithub, SiExpress, SiMongodb, SiMysql, SiCplusplus } from 'react-icons/si';
import emailjs from '@emailjs/browser';

function App() {
  // ...existing state and config

  const handleSendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const form = e.target;

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form,
      EMAILJS_PUBLIC_KEY
    )
      .then(
        (result) => {
          setSubmitStatus('Your message was sent successfully!');
          form.reset();
        },
        (error) => {
          console.error('EmailJS error:', error);
          setSubmitStatus('There was an error sending your message. Please try again later.');
        }
      )
      .finally(() => setIsSubmitting(false));
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [aboutTab, setAboutTab] = useState('about');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // EmailJS Configuration - Loaded from environment variables
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    let timeoutId = null;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
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
        setActiveSection(prev => (prev !== found ? found : prev));
        setShowScrollTop(prev => (prev !== (window.scrollY > 300) ? window.scrollY > 300 : prev));
      }, 50); // 50ms debounce
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <nav className="fixed top-0 left-0 w-full z-20 bg-white shadow flex items-center justify-between px-6 py-4">
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
                <a href="https://www.linkedin.com/in/morsidm-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
                  <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/appaNatics/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
                  <FaFacebook />
                </a>
                <a href="https://github.com/muhh123" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center md:ml-40 md:-ml-32 relative">
            {/* Soft radial glow */}
            <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] mb-6">
              <img
                src="/pic3.png"
                alt="Avatar"
                className="w-full h-full object-contain relative z-10"
              />
              {/* Radial gradient for all edges */}
              <div
                className="absolute inset-0 pointer-events-none z-20"
                style={{
                  background: "radial-gradient(circle, transparent 35%, #fff 70%, #eff6ff 95%, #eff6ff 100%)",
                  filter: "blur(8px)"
                }}
              />
              {/* Linear gradient for the very bottom edge, exactly at the edge */}
              <div
                className="absolute left-0 right-0 bottom-0 h-px pointer-events-none z-30"
                style={{
                  background: "linear-gradient(to bottom, #eff6ff, #eff6ff)",
                  filter: "blur(8px)"
                }}
              />
              {/* Thicker, stronger white overlay at the very bottom edge */}
              <div
                className="absolute left-0 right-0 bottom-0 h-3 pointer-events-none z-30"
                style={{
                  background: "#fff",
                  filter: "blur(18px)"
                }}
              />
            </div>
          </div>
        </div>
        <a href="#about" className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-blue-600 hover:text-blue-800 transition-colors duration-300" aria-label="Scroll down">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>
      <section id="about" className="w-full pt-20 pb-32 px-0 border-t border-gray-200 relative bg-gradient-to-br from-indigo-50 via-white to-blue-100 overflow-hidden">
        {/* Radial glow background */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-indigo-200 opacity-20 rounded-full blur-3xl z-0 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-8 mt-0 text-black text-center uppercase">About</h2>
          <div className="flex justify-center gap-4 mb-8">
            <button
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${aboutTab === 'about' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50'}`}
              onClick={() => setAboutTab('about')}
            >
              <FaUser /> About Me
            </button>
            <button
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${aboutTab === 'education' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50'}`}
              onClick={() => setAboutTab('education')}
            >
              <FaGraduationCap /> Education
            </button>
            <button
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${aboutTab === 'experience' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50'}`}
              onClick={() => setAboutTab('experience')}
            >
              <FaBriefcase /> Experience
            </button>
          </div>
          {/* Tab content */}
          {aboutTab === 'about' && (
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">About Me</h3>
              <p className="text-gray-700 mb-2">
                Hi, I'm Morsid. I'm a passionate creative with a love for drawing, gaming, and exploring the endless possibilities of technology. I’ve always been curious and driven, whether it’s through art, diving into new games, or getting lost in a good book.<br /><br />
                I originally studied Civil Engineering because it was expected of me, but I’ve come to realize that my real passion is in creativity and tech. Now, I’m focused on what truly excites me: art, design, and building things in the digital world.<br /><br />
                You can check out some of my artwork here: <a href="#" className="text-indigo-600 underline">[Insert your art link]</a><br /><br />
                I'm just getting started, and there’s so much more I want to create.
              </p>
            </div>
          )}
          {aboutTab === 'education' && (
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">Education</h3>
              <ul className="list-disc pl-5 text-gray-700 text-left mx-auto">
                <li>
                  <strong>Bachelor of Science in Civil Engineering</strong><br />
                  Cotabato State University<br />
                  2018 – 2023<br />
                  Although I studied Civil Engineering, I discovered along the way that my true passion lies in art and creativity. My experience in engineering helped me develop discipline and problem-solving skills.
                </li>
                <li className="mt-4">
                  <strong>Self-Taught in Web Development</strong><br />
                  2024 – 2025<br />
                  Currently learning web development through online resources and personal projects. I'm focused on building modern, creative websites while combining my interests in design, art, and technology.
                </li>
              </ul>
            </div>
          )}
          {aboutTab === 'experience' && (
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">Experience</h3>
              <ul className="list-disc pl-5 text-gray-700 text-left mx-auto">
                <li className="mt-4">
                  <strong>Technician (Self-Taught / Freelance)</strong><br />
                  2020 – 2025
                  <ul className="list-disc pl-5 mt-2">
                    <li>Independently learned and applied troubleshooting skills to repair laptops, desktops, and mobile devices</li>
                    <li>Reinstalled and configured various operating systems including Windows, Android, and Linux</li>
                    <li>Performed system cleanups, driver updates, and performance optimizations</li>
                    <li>Helped friends, family, and local clients fix hardware and software issues</li>
                    <li>Gained hands-on experience in diagnosing technical problems and delivering practical solutions</li>
                    <li>Developed strong problem-solving, research, and customer support skills through real-world cases</li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
      <section id="projects" className="w-full py-24 px-0 border-t border-gray-200 relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden">
        {/* Radial glow background */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-200 opacity-15 rounded-full blur-3xl z-0 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-black text-center uppercase">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* easCE Reviewer App Project Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-full hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-3 text-black">easCE Reviewer App</h3>
              <p className="text-gray-700 mb-4">A reviewer app for Civil Engineering students and graduates who want to prepare for the board exam. Built with the MERN stack, Tailwind CSS, and Next.js for a modern, interactive experience.</p>
              {/* What I Learned Section */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-indigo-600 mb-2 uppercase tracking-wide">What I Learned</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Building full-stack apps with MERN (MongoDB, Express, React, Node.js)</li>
                  <li>• Using Next.js for SSR and optimized routing</li>
                  <li>• Designing user-friendly review and quiz interfaces</li>
                  <li>• Integrating Tailwind CSS for rapid UI development</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">MERN</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Next.js</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Tailwind CSS</span>
              </div>
              <div className="flex gap-4 justify-center mt-6">
                <a href="#" className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium">GitHub</a>
                <a href="#" className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium">Live Demo</a>
              </div>
            </div>
            {/* Portfolio Website Project Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-full hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-3 text-black">Portfolio Website</h3>
              <p className="text-gray-700 mb-4">A modern, responsive portfolio built with React and Tailwind CSS, featuring interactive tabs and smooth animations.</p>
              {/* What I Learned Section */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-indigo-600 mb-2 uppercase tracking-wide">What I Learned</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• How to implement responsive design with Tailwind CSS</li>
                  <li>• State management with React hooks</li>
                  <li>• Creating interactive tab components</li>
                  <li>• CSS animations and transitions</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Tailwind CSS</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">JavaScript</span>
              </div>
              <div className="flex gap-4 justify-center mt-6">
                <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium">GitHub</a>
                <a href="#" className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium">Live Demo</a>
              </div>
            </div>
            {/* E-Commerce Platform Project Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-full hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-3 text-black">E-Commerce Platform</h3>
              <p className="text-gray-700 mb-4">A full-stack e-commerce application for my sister's furniture business, with user authentication, product management, and payment integration. This project may be updated in the future as her business grows and her needs evolve.</p>
              {/* What I Learned Section */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-indigo-600 mb-2 uppercase tracking-wide">What I Learned</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Full-stack development with Node.js and Express</li>
                  <li>• Database design and MongoDB integration</li>
                  <li>• User authentication and authorization</li>
                  <li>• Payment gateway integration (Stripe)</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Node.js</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">MongoDB</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Next.js</span>
              </div>
              <div className="flex gap-4 justify-center mt-6">
                <a href="https://github.com/yourusername/ecommerce" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium">GitHub</a>
                <a href="#" className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="w-full py-24 px-0 border-t border-gray-200 relative bg-gradient-to-br from-indigo-50 via-white to-blue-100 overflow-hidden">
        {/* Multiple radial glows for depth */}
        <div className="absolute left-1/4 top-1/3 w-[32rem] h-[32rem] bg-indigo-200 opacity-15 rounded-full blur-3xl z-0 pointer-events-none"></div>
        <div className="absolute right-1/4 bottom-1/3 w-[28rem] h-[28rem] bg-blue-200 opacity-20 rounded-full blur-3xl z-0 pointer-events-none"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-200 opacity-10 rounded-full blur-3xl z-0 pointer-events-none"></div>

        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-5 z-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-indigo-300 rounded-lg rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-blue-300 rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-purple-300 transform rotate-45"></div>
          <div className="absolute bottom-1/3 right-10 w-20 h-20 border-2 border-indigo-300 rounded-lg"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-black text-center uppercase">Skills</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">Technologies I'm proficient in and actively learning:</p>
          {/* Tech Stack Icons - Clean Grid */}
          <div className="flex flex-wrap justify-center gap-8">
            <FaCode className="text-5xl text-blue-600" />
            <SiJavascript className="text-5xl text-yellow-500" />
            <SiReact className="text-5xl text-blue-500" />
            <SiTypescript className="text-5xl text-blue-600" />
            <SiHtml5 className="text-5xl text-orange-500" />
            <SiCss3 className="text-5xl text-blue-500" />
            <SiTailwindcss className="text-5xl text-cyan-500" />
            <SiPython className="text-5xl text-blue-600" />
            <SiDjango className="text-5xl text-green-700" />
            <SiFlask className="text-5xl text-gray-800" />
            <SiBootstrap className="text-5xl text-purple-600" />
            <SiNodedotjs className="text-5xl text-green-600" />
            <SiFigma className="text-5xl text-purple-500" />
            <SiGit className="text-5xl text-orange-600" />
            <SiGithub className="text-5xl text-gray-800" />
            <SiExpress className="text-5xl text-gray-800" />
            <SiMongodb className="text-5xl text-green-600" />
            <SiMysql className="text-5xl text-blue-600" />
            <SiCplusplus className="text-5xl text-blue-600" />
          </div>
        </div>
      </section>
      <section id="contact" className="w-full py-24 px-0 border-t border-gray-200 relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        {/* Multiple radial glows for depth */}
        <div className="absolute left-1/3 top-1/4 w-[30rem] h-[30rem] bg-blue-200 opacity-15 rounded-full blur-3xl z-0 pointer-events-none"></div>
        <div className="absolute right-1/3 bottom-1/4 w-[35rem] h-[35rem] bg-indigo-200 opacity-20 rounded-full blur-3xl z-0 pointer-events-none"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-purple-200 opacity-10 rounded-full blur-3xl z-0 pointer-events-none"></div>

        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-5 z-0 pointer-events-none">
          <div className="absolute top-16 left-16 w-28 h-28 border-2 border-blue-300 rounded-lg rotate-12"></div>
          <div className="absolute bottom-16 right-16 w-20 h-20 border-2 border-indigo-300 rounded-full"></div>
          <div className="absolute top-1/2 left-8 w-12 h-12 border-2 border-purple-300 transform rotate-45"></div>
          <div className="absolute bottom-1/4 right-8 w-16 h-16 border-2 border-blue-300 rounded-lg"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-black text-center uppercase">Contact</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">Let's connect and discuss opportunities! I'm always open to new projects and collaborations.</p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information Cards */}
            <div className="space-y-8 h-full">
              <h3 className="text-2xl font-bold text-black mb-6">Get In Touch</h3>

              {/* Email Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 md:mt-10">
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <FaEnvelope className="text-2xl text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black">Email</h4>
                    <p className="text-gray-600">mohammadmors404@gmail.com</p>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammadmors404@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-medium">Send Email</a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <FaPhone className="text-2xl text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black">Phone</h4>
                    <p className="text-gray-600">09168485747(TM/Globe)</p>
                    <a href="tel:+09168485747" className="text-green-600 hover:text-green-700 font-medium">Call Now</a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-2xl text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black">Location</h4>
                    <p className="text-gray-600">Cotabato City, Philippines</p>
                    <p className="text-gray-600">Available for remote work</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="text-lg font-semibold text-black mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/morsidm-dev/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="https://github.com/muhh123/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition-colors duration-300">
                    <FaGithub className="text-xl" />
                  </a>
                  <a href="https://www.facebook.com/appaNatics/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    <FaFacebook className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <FaEnvelope className="text-indigo-600" />
                Send Message
              </h3>
              <form className="space-y-6" onSubmit={handleSendEmail}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <FaUser className="text-indigo-600 text-sm" />
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
                        placeholder="Full Name"
                        required
                      />
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <FaEnvelope className="text-indigo-600 text-sm" />
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
                        placeholder="your.email@example.com"
                        required
                      />
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <FaBriefcase className="text-indigo-600 text-sm" />
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
                      placeholder="Project Inquiry"
                      required
                    />
                    <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <FaCode className="text-indigo-600 text-sm" />
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                    <FaCode className="absolute left-4 top-4 text-gray-400" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center gap-2"
                >
                  <FaEnvelope className="text-lg" />
                  Send Message
                </button>
              {submitStatus && (
  <div className={`mt-4 text-center font-semibold ${submitStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>{submitStatus}</div>
)}
</form>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 bg-indigo-600 text-white p-5 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}
    </div>
  );
}

export default App;
