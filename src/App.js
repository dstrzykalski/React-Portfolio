// import logo from '../public/logo192.png';
import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          My React Portfolio
        </p>

      </header>
      <Footer />
    </div>
  );
}

export default App;
