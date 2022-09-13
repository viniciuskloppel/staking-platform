import React from 'react';
import './App.css';
import Body from './Components/Body';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="grid grid-cols-8 px-8 gap-8 overflow-hidden sm:grid-cols-12">
      <Navbar />
      <Body />
      <Sidebar />
    </div>
  );
}

export default App;
