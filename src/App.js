import React from 'react';
import About from './components/about/About';
import Header from './components/header/Header';
import AboutUs from './components/aboutUs/AboutUs';
import Events from './components/events/Events';
import Footer from './components/footer/Footer';
import Reviews from './components/reviews/Reviews';
import Team from './components/team/Team';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Events />
      <AboutUs />
      <Reviews />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
