import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider, useToast } from '@chakra-ui/react';
import theme from './theme'; // The path to your theme file
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import TaketheQuiz from './components/TaketheQuiz';
import CheckoutPage from './components/CheckoutPage';
import Profile from './components/Profile';

function App() {
  return (
      <ChakraProvider isResettingCSS={false} useTheme={theme}>
      <Navbar />
      <div>
        <Routes>
          {/* Add more routes as needed */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<TaketheQuiz />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
