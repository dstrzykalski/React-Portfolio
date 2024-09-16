// import logo from '../public/logo192.png';
import './App.css';
import React from 'react';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
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
