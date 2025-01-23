import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="App">

      
    <header className="App-header">

            
    <h1 style={{color:"white"}}>Live Financial Data Hub</h1>
            <div>
            <Link to="/cryptocurrencyPage">
                <button>Cryptocurrency</button>
            </Link >
            <Link to="/stockMarketPage">
                <button>Stock Market</button>
            </Link >
            </div>
        </header>
        </div>
    );
};

export default HomePage;