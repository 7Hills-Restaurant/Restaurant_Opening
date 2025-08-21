import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream text-gray-800">
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        <style>{`
          .animate-fade-in {
            animation: fadeIn 1.5s ease-out;
          }
          
          .animate-fade-in-delay {
            animation: fadeIn 1.5s ease-out 0.5s both;
          }
          
          .animate-bounce-in {
            animation: bounceIn 1.5s ease-out 1s both;
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes bounceIn {
            0% {
              opacity: 0;
              transform: scale(0.3);
            }
            50% {
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          .bg-cream {
            background-color: #F5F5DC;
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;