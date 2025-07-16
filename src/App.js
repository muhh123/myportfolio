import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <nav className="sticky top-0 z-10 bg-white shadow flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-extrabold text-xl text-blue-700 tracking-tight">CE.dev</a>
        <div className="flex justify-center items-center gap-6">
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
          <a href="#skills" className="text-gray-700 hover:text-blue-600 transition">Skills</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
        </div>
      </nav>
      <section id="home" className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-blue-50 relative px-4">
        <div className="w-full max-w-5xl flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-48 py-16 md:py-32 mx-auto">
          <div className="flex-1 flex flex-col justify-center items-center md:items-start w-full">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">Hi I'm Morsid Mohammad</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 text-center md:text-left max-w-md">
              <span className="whitespace-nowrap">A self-taught and aspiring developer</span><br />
              making a career shift from Civil Engineering.
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-10 text-center md:text-left">(e.g. Frontend Developer & Lifelong Learner)</p>
          </div>
          <div className="flex-1 flex justify-center items-center md:ml-24">
            <img src="/darkmagic.png" alt="Avatar" className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-lg object-cover mb-6" />
          </div>
        </div>
      </section>
      <section id="about" className="max-w-2xl mx-auto py-20 px-4 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-2">About</h2>
        <p className="text-gray-700">Short bio/introduction goes here.</p>
      </section>
      <section id="projects" className="max-w-2xl mx-auto py-20 px-4 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        <p className="text-gray-700">Project showcase will go here.</p>
      </section>
      <section id="skills" className="max-w-2xl mx-auto py-20 px-4 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-2">Skills</h2>
        <p className="text-gray-700 mb-1">Skills that I know so far, I’m looking to learn more:</p>
        <p className="text-gray-800">Python • JavaScript • AutoCAD • React</p>
      </section>
      <section id="contact" className="max-w-2xl mx-auto py-20 px-4 border-t border-gray-200 mb-10">
        <h2 className="text-2xl font-bold mb-2">Contact</h2>
        <p className="text-gray-700">Contact form and links will go here.</p>
      </section>
    </div>
  );
}

export default App;
