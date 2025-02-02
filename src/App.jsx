import './App.css';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode toggle function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-4 transition-colors duration-500`}>
      {/* Dark Mode Button */}
      <div className="flex justify-end mb-4">
        <button 
          onClick={toggleDarkMode} 
          className="px-6 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className={`text-6xl font-extrabold mb-4 transform transition duration-500 hover:scale-110 hover:text-yellow-400 ${darkMode ? 'text-white' : 'text-white'}`}>
          Tailwind CSS 4 Showcase
        </h1>
        <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-white'}`}>
          Explore the powerful features of Tailwind CSS 4
        </p>
      </header>

      {/* Card Component */}
      <div className="flex justify-center gap-8 mb-12 animate-pulse">
        <div className={`p-8 rounded-lg shadow-xl w-80 transform transition duration-500 hover:scale-105 hover:shadow-2xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
          <h2 className="text-2xl font-semibold mb-4">Card 1</h2>
          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            This is a simple card that demonstrates the power of Tailwind's utilities for design and spacing.
          </p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
            Action
          </button>
        </div>

        <div className={`p-8 rounded-lg shadow-xl w-80 transform transition duration-500 hover:scale-105 hover:shadow-2xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
          <h2 className="text-2xl font-semibold mb-4">Card 2</h2>
          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Another card to showcase how easily you can align components, add shadows, and style with Tailwind.
          </p>
          <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:outline-none">
            Action
          </button>
        </div>
      </div>

      {/* Flexbox & Grid Layout */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">Flexbox & Grid Layouts</h2>
        <div className="flex justify-around mb-8">
          <div className="flex items-center justify-center w-40 h-40 bg-orange-500 text-white rounded-full shadow-xl">
            Flex Item 1
          </div>
          <div className="flex items-center justify-center w-40 h-40 bg-purple-500 text-white rounded-full shadow-xl">
            Flex Item 2
          </div>
          <div className="flex items-center justify-center w-40 h-40 bg-pink-500 text-white rounded-full shadow-xl">
            Flex Item 3
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-yellow-500 p-4 rounded-lg shadow-lg dark:bg-gray-700">
            Grid Item 1
          </div>
          <div className="bg-teal-500 p-4 rounded-lg shadow-lg dark:bg-gray-700">
            Grid Item 2
          </div>
          <div className="bg-indigo-500 p-4 rounded-lg shadow-lg dark:bg-gray-700">
            Grid Item 3
          </div>
        </div>
      </section>

      {/* Buttons & Inputs */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">Buttons & Inputs</h2>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none transform hover:scale-110 transition-all">
            Button 1
          </button>
          <button className="px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 focus:outline-none transform hover:scale-110 transition-all">
            Button 2
          </button>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <input
            type="text"
            placeholder="Enter Text"
            className="px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />
        </div>
      </section>

      {/* Typography & Shadows */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">Typography & Shadows</h2>
        <div className="text-center text-white">
          <p className="text-lg mb-4">Tailwind CSS provides great utility classes for text size, font weight, and color. You can easily apply these to your content.</p>
          <blockquote className="italic text-xl font-light mb-4">"Tailwind CSS is a game-changer for modern web design."</blockquote>
          <p className="text-lg font-semibold text-gray-300">- Developer</p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-3xl font-bold text-shadow-xl text-white">Text Shadow Example</p>
          <p className="text-xl text-white mt-4">Create impressive text effects with Tailwind's shadow utilities.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-white mt-12">
        <p className="text-lg">Tailwind CSS 4 is awesome!</p>
      </footer>
    </div>
  );
}

export default App;
