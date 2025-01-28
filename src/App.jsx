import './index.css'; // Renamed for clarity (optional)
import Navbar from './components/Navbar';
import Header from './components/Header';
import ToolSection from './components/ToolSection';
import React from 'react';


export default function App() {
  return (
    <>
      <Navbar />

      <Header />
      <ToolSection />
    </>

  );
}
