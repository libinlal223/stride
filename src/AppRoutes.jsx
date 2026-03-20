import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Index
import Home from './Home.jsx';

// Services
import BusinessSetup from './pages/BusinessSetup';
import ProServices from './pages/ProServices';
import BankAccount from './pages/BankAccount';
import WebDevelopment from './pages/WebDevelopment';
import Accounting from './pages/Accounting';
import Liquidation from './pages/Liquidation';

// Blog
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';

export default function AppRoutes() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/business-setup-uae" element={<BusinessSetup />} />
          <Route path="/pro-services-dubai" element={<ProServices />} />
          <Route path="/bank-account-opening-uae" element={<BankAccount />} />
          <Route path="/company-website-development-dubai" element={<WebDevelopment />} />
          <Route path="/accounting-bookkeeping-dubai" element={<Accounting />} />
          <Route path="/company-liquidation-uae" element={<Liquidation />} />
          
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
