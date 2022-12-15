import React, { Component } from 'react';
import './App.css';

import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';


const App = () => {
  return (
    <div className='grid-container'>

      <Header />

      <Content />

      <Menu />

      <Sidebar />

      <Footer />

    </div>
  );
}




export default App;

