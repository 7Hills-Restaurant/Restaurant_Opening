import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Starters from './pages/Starters';
import IdliDosa from './pages/IdliDosa';
import ChickenCourse from './pages/ChickenCourse';
import LambCourse from './pages/LambCourse';
import FishPrawn from './pages/FishPrawn';
import TandooriSpecials from './pages/TandooriSpecials';
import NaanRice from './pages/NaanRice';
import Biryani from './pages/Biryani';
import SoftDrinks from './pages/SoftDrinks';
import AlcoholDrinks from './pages/AlcoholDrinks';
import Wine from './pages/Wine';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream text-gray-800">
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/starters" element={<Starters />} />
            <Route path="/idli-dosa" element={<IdliDosa />} />
            <Route path="/chicken" element={<ChickenCourse />} />
            <Route path="/lamb" element={<LambCourse />} />
            <Route path="/fish-prawn" element={<FishPrawn />} />
            <Route path="/tandoori" element={<TandooriSpecials />} />
            <Route path="/naan-rice" element={<NaanRice />} />
            <Route path="/biryani" element={<Biryani />} />
            <Route path="/soft-drinks" element={<SoftDrinks />} />
            <Route path="/alcohol" element={<AlcoholDrinks />} />
            <Route path="/wine" element={<Wine />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        <style jsx global>{`
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