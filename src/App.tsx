import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import SmoothScroll from './components/Layout/SmoothScroll';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Catering from './pages/Catering';
import Order from './pages/Order';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </SmoothScroll>
    </Router>
  );
}

export default App;
