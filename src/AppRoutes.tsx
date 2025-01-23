import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './homePage';
import CryptocurrencyPage from './cryptocurrencyPage';
import StockMarketPage from './stockMarketPage';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cryptocurrencyPage" element={<CryptocurrencyPage />} />
      <Route path="/stockMarketPage" element={<StockMarketPage />} />
    </Routes>
  );
};

export default AppRoutes