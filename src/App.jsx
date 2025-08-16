import Navbar from './components/Navbar.jsx';
import MarciMetzger from './components/MarciMetzger.jsx';
import Looking from './components/Looking.jsx';
import Explore from './components/Explore.jsx';
import GetSold from './components/GetSold.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Partner from './components/Partner.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/footer.jsx';
import React from 'react';
import './App.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <div id="home"><MarciMetzger /></div>
      <div id="looking"><Looking /></div>
      <div id="explore"><Explore /></div>
      <div id="getsold"><GetSold /></div>
      <div id="services"><Services /></div>
      <div id="about"><About /></div>
      <div id="partner"><Partner /></div>
      <div id="contact"><Contact /></div>
      <Footer />

      
      {/* Add other components as needed */}
    
    </div>
  );
}